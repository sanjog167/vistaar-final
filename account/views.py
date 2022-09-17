from unicodedata import name
from django.db import reset_queries
from django.shortcuts import redirect, render
from django.contrib import messages
from django.shortcuts import render, reverse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, update_session_auth_hash
from django.shortcuts import get_object_or_404
from .forms import LeadsEditForm, MyPasswordChangeForm, UserRegistrationForm, UserEditForm, ProfileEditForm, CompanyForm, EditCompanyInfoForm
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from .models import *
from suppliers.models import Company, Supplier
from products.models import Products
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes,force_text,force_str,DjangoUnicodeDecodeError
from .utils import generate_token
from django.core.mail import EmailMessage
from django.conf import settings as conf_settings

import os
from vistaar.settings import MEDIA_ROOT

import qrcode
from PIL import Image
from pathlib import Path

import json

from itertools import chain

from openpyxl import Workbook

# Create your views here.

#Activation email - SEND
def send_action_email(user,request):
    current_site = get_current_site(request)
    email_subject = 'Vistaar - Activate Your account!'
    email_body = render_to_string('account/activate.html',{
        'user':user,
        'domain':current_site,
        'uid':urlsafe_base64_encode(force_bytes(user.pk)),
        'token': generate_token.make_token(user),
    })
    
    email = EmailMessage(subject=email_subject,body=email_body,from_email=conf_settings.EMAIL_FROM_USER,to=[user.email])

    email.send()
    
    
#Lead notification Email
def send_lead_email(user,supplier,product,request):
    email_subject = 'Vistaar - You have a new lead!'
    email_body = render_to_string('supplier/new_lead.html',{
        'user':user,
        'supplier':supplier,
        'product':product,
    })
    
    email = EmailMessage(subject=email_subject,body=email_body,from_email=conf_settings.EMAIL_FROM_USER,to=[supplier.email,supplier.user.email])
    email.send()

    

def register(request):
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name  = request.POST['last_name']
        username  = request.POST['username']
        email  = request.POST['email']
        password  = request.POST['password']
        confirm_password  = request.POST['confirm_password']
        phone_number = request.POST['phone_number']

        if password == confirm_password:
            if User.objects.filter(username=username).exists():
                messages.error(request, 'Username is already taken. Try a different one!')
                return redirect('register')
            elif User.objects.filter(email=email).exists():
                messages.error(request, 'Email already registered!')
                return redirect('register')
            else:
                user = User.objects.create_user(
                    first_name=first_name,
                    last_name=last_name,
                    username=username,
                    email=email,
                    password=password
                )
                user.save()
                
                user.profile.mobile_number = phone_number
                
                user.profile.save()
                
                send_action_email(user,request)
                
                messages.success(request, 'Your account has been created. Login to continue!')
                
                return redirect('login')
        else:
            messages.error(request, 'Password fields do not match!')
            return redirect('register')
    else:
        return render(request,'account/register.html')
    

def user_login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return redirect('home')
            else:
                messages.error(request, 'Disabled account')
                return redirect('login')
        else:
            messages.error(request, 'Your username and password didn\'t match. Please try again.')
            return redirect('login')
    else:
        return render(request, 'sanjog/login.html')

@login_required
def post_requirements(request):
    if request.method == 'POST':

        current_user = request.user.username
        buyer = User.objects.get(username=current_user)
        try:
            product_attribute = request.POST['product']
            product = Products.objects.filter(Q(product_name__icontains=product_attribute) | Q(description__icontains=product_attribute))
        except Products.DoesNotExist:
            product = None
        quantity_required = request.POST['quantity']
        request_description = request.POST['description']
        for pr in product:
            try:
                supplier_user = User.objects.get(username=pr.supplier.user.username)
                supplier = Supplier.objects.get(user=supplier_user)
            except Supplier.DoesNotExist:
                supplier = None

            if (supplier_user.profile.account_type == 'Supplier3' or supplier_user.profile.account_type == 'Supplier4'):

                rfq_leads = RFQ_leads(seller=supplier, buyer=buyer, product=pr,
                                            quantity_required=quantity_required,
                                            request_description=request_description)

                rfq_leads.save()
                send_lead_email(current_user,supplier,pr,request)
        return redirect('home')
    else:
        return render(request, 'account/post_requirements.html')


@login_required
def dashboard(request):
    current_profile = request.user.profile
    try:
        current_supplier = Supplier.objects.get(user=request.user)
    except Supplier.DoesNotExist:
        current_supplier = None

    all_products = Products.objects.filter(supplier = current_supplier)
    views = all_products.aggregate(models.Sum('clicks'))['clicks__sum']

    print(views)

    latest_buyleads = Primary_leads.objects.filter(seller = current_supplier)[:3]
    all_buyleads_count = Primary_leads.objects.filter(seller=current_supplier).count()

    trending_products = Products.objects.filter(supplier=current_supplier).order_by('-clicks')[:4]
    trending_names = []
    trending_clicks = []
    clicks_count = 0

    for p in trending_products:
        trending_names.append(str(p.product_name[:5]))
        trending_clicks.append(p.clicks)
        clicks_count += p.clicks

    return render(request,
                'sanjog/dashboard.html',
                {'section': 'dashboard','current_profile': current_profile,
                'current_supplier':current_supplier,'leads':latest_buyleads,'leads_count':all_buyleads_count,
                'trending':trending_products,'trending_names':trending_names,'trending_count':trending_clicks,'trending_total_count':clicks_count,
                'views':views}
                )


@login_required
def company_profile(request):

    current_profile = request.user.profile
    try:
        current_supplier = Supplier.objects.get(user=request.user)
    except Supplier.DoesNotExist:
        current_supplier = None

    current_company = Company.objects.get_or_create(supplier=current_supplier)

    try:
        company_form = CompanyForm(instance=current_company.id)
    except:
        company_form = CompanyForm(request.POST or None)

    if request.method == 'POST':
        try:
            company_form = CompanyForm(instance=current_company.id)
        except:
            company_form = CompanyForm(request.POST or None)

        if company_form.is_valid():
            company_details = company_form.save(commit=False)
            company_details.supplier = current_supplier
            company_details.save()

    return render(request,
                'sanjog/profile.html',
                {'section': 'dashboard','current_profile': current_profile,
                'current_supplier':current_supplier, 'company_form': company_form})
                

@login_required
def lead_manager(request):

    current_profile = request.user.profile
    try:
        current_supplier = Supplier.objects.get(user=request.user)
    except Supplier.DoesNotExist:
        current_supplier = None

    sent_messages = Lead_messages.objects.filter()

    return render(request,
                'dashboard/lead_manager.html',
                {'section': 'dashboard','current_profile': current_profile,'current_supplier':current_supplier})

@login_required
def manage_products(request):

    current_profile = request.user.profile
    try:
        current_supplier = Supplier.objects.get(user=request.user)
    except Supplier.DoesNotExist:
        current_supplier = None

    products = Products.objects.filter(supplier=current_supplier)

    return render(request,
                'sanjog/products.html',
                {'section': 'dashboard','current_profile': current_profile,
                 'current_supplier':current_supplier,
                 'products': products})


@login_required
def buy_leads(request):

    current_profile = request.user.profile
    try:
        current_supplier = Supplier.objects.get(user=request.user)
    except Supplier.DoesNotExist:
        current_supplier = None

    primary_leads = Primary_leads.objects.filter(seller=current_supplier).order_by("created")
    rfq_leads = RFQ_leads.objects.filter(seller=current_supplier).order_by("created")
    premium_leads = Premium_leads.objects.filter(seller=current_supplier).order_by("created")
    
    all_leads = chain(primary_leads,rfq_leads,premium_leads)

    return render(request,
                'sanjog/leads.html',
                {'section': 'dashboard','current_profile': current_profile,
                 'prim_leads': primary_leads,
                 'rfq_leads':rfq_leads,
                 'prem_leads':premium_leads,
                 'all_leads':all_leads})


@login_required
def edit_leads(request, id):
    lead = Primary_leads.objects.get(pk=id)

    if request.method == 'POST':
        lead_edit_form = LeadsEditForm(instance=lead,
                                    data=request.POST)
        if lead_edit_form.is_valid():
            lead_edit_form.save()
    else:
        lead_edit_form = LeadsEditForm(instance=lead)
    return render(request,
                  'dashboard/edit_leads.html',
                  {'lead_edit_form': lead_edit_form})


@login_required
def collect_payments(request):

    current_profile = request.user.profile
    try:
        current_supplier = Supplier.objects.get(user=request.user)
    except Supplier.DoesNotExist:
        current_supplier = None

    return render(request,
                'dashboard/collect_payments.html',
                {'section': 'dashboard','current_profile': current_profile,'current_supplier':current_supplier})

@login_required
def catalog_view(request):

    current_profile = request.user.profile
    try:
        current_supplier = Supplier.objects.get(user=request.user)
    except Supplier.DoesNotExist:
        current_supplier = None

    return render(request,
                'dashboard/catalog_view.html',
                {'section': 'dashboard','current_profile': current_profile,'current_supplier':current_supplier})

@login_required
def photos_docs(request):

    current_profile = request.user.profile
    try:
        current_supplier = Supplier.objects.get(user=request.user)
    except Supplier.DoesNotExist:
        current_supplier = None

    return render(request,
                'dashboard/photos&docs.html',
                {'section': 'dashboard','current_profile': current_profile,'current_supplier':current_supplier})


@login_required
def bills_invoice(request):

    current_profile = request.user.profile
    try:
        current_supplier = Supplier.objects.get(user=request.user)
    except Supplier.DoesNotExist:
        current_supplier = None

    return render(request,
                'dashboard/bill&invoice.html',
                {'section': 'dashboard','current_profile': current_profile,'current_supplier':current_supplier})


@login_required
def buyer_tools(request):

    current_profile = request.user.profile
    try:
        current_supplier = Supplier.objects.get(user=request.user)
    except Supplier.DoesNotExist:
        current_supplier = None

    return render(request,
                'dashboard/buyer_tools.html',
                {'section': 'dashboard','current_profile': current_profile,'current_supplier':current_supplier})


@login_required
def settings(request):

    current_profile = request.user.profile
    try:
        current_supplier = Supplier.objects.get(user=request.user)
    except Supplier.DoesNotExist:
        current_supplier = None

    return render(request,
                'dashboard/settings.html',
                {'section': 'dashboard','current_profile': current_profile,'current_supplier':current_supplier})


@login_required
def edit(request):
    if request.method == 'POST':
        user_form = UserEditForm(instance=request.user,
                                 data=request.POST)
        profile_form = ProfileEditForm(instance=request.user.profile,
                                    data=request.POST,
                                    files=request.FILES)
        if user_form.is_valid() and profile_form.is_valid():
            user_form.save()
            profile_form.save()
    else:
        user_form = UserEditForm(instance=request.user)
        profile_form = ProfileEditForm(instance=request.user.profile)
        
        if not request.user.profile.email_verified:
            send_action_email(request.user,request)
    return render(request,
                  'account/edit.html',
                  {'user_form': user_form,
                   'profile_form': profile_form})



def generate_qr(new_supplier):
# taking image which user wants
# in the QR code center

    Logo_link = 'static/images/faviconbg4.png'

    logo = Image.open(Logo_link)

# taking base width
    basewidth = 100

# adjust image size
    wpercent = (basewidth/float(logo.size[0]))
    hsize = int((float(logo.size[1])*float(wpercent)))
    logo = logo.resize((basewidth, hsize), Image.ANTIALIAS)
    QRcode = qrcode.QRCode(
	error_correction=qrcode.constants.ERROR_CORRECT_H)


# taking url or text
    url = 'vistaartrade.com/'+'supplier/'+ str(new_supplier.id)

# adding URL or text to QRcode
    QRcode.add_data(url)

# generating QR code
    QRcode.make()

# taking color name from user
    QRcolor = '#00917c'

# adding color to QR code
    QRimg = QRcode.make_image(
	fill_color=QRcolor, back_color="white").convert('RGB')

# set size of QR code
    pos = ((QRimg.size[0] - logo.size[0]) // 2,
	        (QRimg.size[1] - logo.size[1]) // 2)
    QRimg.paste(logo, pos)


    destination = ''.join(['media/suppliers/',str(new_supplier.id),'/','qr_code.png'])
    # save the QR code generated
    QRimg.save(destination)

    new_supplier.qr_code = ''.join(['suppliers/',str(new_supplier.id),'/','qr_code.png'])
    new_supplier.save()

    print('QR code generated!')
    
def create_supplier(form_data,current_user):
    new_supplier = Supplier.objects.create(user=current_user,
                                                name = current_user.first_name,
                                                company_name = form_data['company-name'],
                                                mobile_number = form_data['company-phone'],
                                                establishment_year = form_data['estdyear'],
                                                ceo_name = form_data['ceo-name'],
                                                email = form_data['company-email'],
                                                website = form_data['website'],
                                                contact_name = form_data['contact-name'],
                                                contact_phone = form_data['contact-phone'],
                                                contact_email = form_data['contact-email'],
                                                state = form_data['state'],
                                                address1 = form_data['address1'],
                                                address2 = form_data['address2'],
                                                pan = form_data['pan'],
                                                vat = form_data['vat']   )

    
    new_supplier.save()

    path = os.path.join(MEDIA_ROOT, 'suppliers/', str(new_supplier.id))
    os.makedirs(path,exist_ok=True)

    workbook = Workbook()
    workbook_dest = os.path.join(path,"data.xlsx")
    workbook.save(filename=workbook_dest)
    
    generate_qr(new_supplier)

    current_user.linked = True
    current_user.save()

    user_profile = Profile.objects.get(user=current_user)
    user_profile.linked = True
    user_profile.save()
    

@login_required
def register_supplier(request):
    current_user = request.user

    if request.method == 'POST':
        form_data = request.POST

        create_supplier(form_data,current_user)

        profile = Profile.objects.get(user=current_user)
        profile.account_type = 'Supplier1'
        profile.save()

        return render(request, 'account/verifying_you.html')

    else:

        return render(request,'account/become-a-seller.html')


@login_required
def edit_company_info(request):
    if request.method == 'POST':
        company_info_form = EditCompanyInfoForm(instance=request.user.supplier,
                                 data=request.POST)
        if company_info_form.is_valid():
            company_info_form.save()
    else:
        company_info_form = EditCompanyInfoForm(instance=request.user.supplier)
    return render(request,
                  'dashboard/edit_company_info.html',
                  {'company_info_form': company_info_form})


@login_required
def edit_business_profile(request):
    if request.method == 'POST':
        business_profile_form = EditBusinessProfileForm(instance=request.user.supplier,
                                 data=request.POST)
        if business_profile_form.is_valid():
            business_profile_form.save()
    else:
        business_profile_form = EditBusinessProfileForm(instance=request.user.supplier)
    return render(request,
                  'dashboard/edit_company_info.html',
                  {'company_info_form': business_profile_form})


@login_required
def change_password(request):
    if request.method == 'POST':
        change_password_form = MyPasswordChangeForm(user=request.user, data=request.POST)
        if change_password_form.is_valid():
            change_password_form.save()
            # This will update the session and we won't be logged out after changing the password
            update_session_auth_hash(request, change_password_form.user)
            messages.success(request, 'Your password has been updated!')
            return redirect('password_change')
        else:
            messages.success(request, 'Something went wrong. Please try again.')
            return redirect('password_change')
    else:
        change_password_form = MyPasswordChangeForm(user=request.user)
    context = {
               'change_password_form':change_password_form,
               }
    return render(request, 'account/password_change_form.html', context)
    

#Activation email - Verification
def activate_user(request,uidb64,token):
    
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(id=uid)
        
    except Exception as e:
        user = None
        
    if user and generate_token.check_token(user,token):
        user.profile.email_verified=True
        user.save()
        
        messages.add_message(request, messages.SUCCESS, 'Your account has been successfully activated!')
        
        return redirect(reverse('home'))
        
    return render(request,'account/activation-failed.html',{'curuser':user,'userid':uid})
        
        
        
        
        
        
    

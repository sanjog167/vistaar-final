
from urllib import request
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib import messages
from django.shortcuts import redirect, render, get_object_or_404
from django.views.generic import View, TemplateView, CreateView, FormView, DetailView, ListView
from .models import Products,Category,Subcategory
from suppliers.models import Supplier
from account.models import Primary_leads, Message_box, Lead_messages

from .forms import ProductEditForm, SubmitProductForm
from django.utils.text import slugify
from django.http import JsonResponse
import datetime
from django.db.models import Q
from account.views import send_lead_email
import operator

from django.core.paginator import Paginator,PageNotAnInteger,EmptyPage



# Create your views here.

class HomeView(TemplateView):
    template_name = "sanjog/index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        all_products = Products.objects.filter(featured=True).order_by("-id")
        categories = Category.objects.all().order_by("id")
        fcategories = Category.objects.filter(featured=True).order_by("id")

        trending = Products.objects.all().order_by("-clicks")[:5]
        subcat = Subcategory.objects.all().order_by("-id")
        #c1 = Category.objects.get(slug='kitchen-utensils')
        #c2 = Category.objects.get(slug='handicraft')
        #c3 = Category.objects.get(slug='cosmetics')
        c1 = Category.objects.get(slug='computer-it-solutions')
        c2 = Category.objects.get(slug='consumer-electronics')
        c3 = Category.objects.get(slug='cosmetics-toiletries-personal-care')
        cat1 = Products.objects.filter(category=c1)[:4]
        cat2 = Products.objects.filter(category=c2)[:4]
        cat3 = Products.objects.filter(category=c3)[:4]
        context['products'] = all_products
        context['categories'] = categories
        context['fcategories'] = fcategories
        context['trending'] = trending
        context['cat1'] = cat1
        context['cat2'] = cat2
        context['cat3'] = cat3
        context['subcat'] = subcat

        return context

    

def product_detail(request,id,slug):
    product = get_object_or_404(Products,id=id,slug=slug,available=True)

    if request.method == 'POST':

        new_lead = Primary_leads(seller = product.supplier, buyer = request.user, product = product)
        new_lead.save()

        #related

        mbox_title = str(product.supplier) + " - " + request.user.first_name + " - " + str(product)

        new_mbox = Message_box(lead = new_lead, title = mbox_title, initiated = datetime.datetime.now(), seller=product.supplier.user, buyer= request.user)
        new_mbox.save()

        first_message = Lead_messages(m_box = new_mbox, content = new_lead.get_message(), sender = request.user, reciever = product.supplier.user, time = datetime.datetime.now() )
        first_message.save()

        return render(request,'dashboard/lead_created.html',{'success':'Success'})

    else:

        product.clicks += 1
        product.save()
        pcategory = product.category
        cat = Products.objects.filter(category=pcategory)

        return render(request,'sanjog/product-detail.html',{'product':product,'cat':cat})

def category_detail(request,id,slug):
    category = get_object_or_404(Category,id=id,slug=slug)
    
    products = Products.objects.filter(category=category)

    fcategories = Category.objects.filter(featured=True).order_by("id")
    
    return render(request, 'category.html',{'category':category,'products':products,'fcategories':fcategories})
    
def subcategory_detail(request,id,slug):
    subcategory = get_object_or_404(Subcategory,id=id,slug=slug)
    
    products = Products.objects.filter(sub_category=subcategory)

    fcategories = Category.objects.filter(featured=True).order_by("id")
    
    return render(request, 'category.html',{'category':subcategory,'products':products,'fcategories':fcategories})

# def submit_product(request):
#     current_user = request.user
#     categories = Category.objects.all().order_by("id")

#     if request.method == 'POST':
#         submit_product_form = SubmitProductForm(request.POST,request.FILES or None)

#         cat_id = Category.objects.get(id=request.POST['category'])
#         subcat_id = Subcategory.objects.get(id=20)

#         new_product = Products.objects.create(product_name=request.POST['product-name'],
#                                                 description=request.POST['description'],
#                                                 category=cat_id,
#                                                 price=0, max_price=0,
#                                                 supplier = current_user.supplier,
#                                                 minimum_order_quantity="1 pcs",
#                                                 sub_category = subcat_id
#                                                 )
        
#         new_product.slug = slugify(new_product.product_name)
#         new_product.save()
        
#         messages.success(request, 'Your product has successfully been added!')
    
#         return redirect('products:submit_product')

#     else:
#         submit_product_form = SubmitProductForm()
        
#     return render(request, 'products/product_add.html',{'submit_product_form':submit_product_form,'categories':categories})

def submit_product(request):
    current_user = request.user

    if request.method == 'POST':
        submit_product_form = SubmitProductForm(request.POST,request.FILES or None)
        print("-------------------------------------------------------------------")
        print(request.POST)
        if request.POST['category'] != '0':
            cat_id = Category.objects.get(id=request.POST['category'])
        else:
            messages.success(request,'Select a category!')
            return redirect('products:submit_product')
        
        if request.POST['sub-category'] != '0':    
            subcat_id = Subcategory.objects.get(id=request.POST['sub-category'])
        else:
            messages.success(request,'Select a sub-category!')
            return redirect('products:submit_product')

        new_slug = slugify(request.POST['product-name'])

        new_product = Products.objects.create(product_name=request.POST['product-name'],
                                                 slug = new_slug,
                                                 description=request.POST['description'],
                                                 category=cat_id,
                                                 price=request.POST['min-price'],
                                                 max_price=request.POST['max-price'],
                                                 supplier = current_user.supplier,
                                                 minimum_order_quantity=request.POST['min-qty'],
                                                 sub_category = subcat_id,
                                                 image=request.FILES['image1'],
                                                 image2=request.FILES['image2'],
                                                 image3=request.FILES['image3'],
                                                 image4=request.FILES['image4']
                                                 )
        
        new_product.save()

        messages.success(request, 'Your product has successfully been added!')
    
        return redirect('products:submit_product')

    else:
        submit_product_form = SubmitProductForm()

        categories = Category.objects.all()
        sub_categories = Subcategory.objects.all()
        
    return render(request, 'products/product_add.html',{'submit_product_form':submit_product_form,'cat':categories,'subcat':sub_categories})

def edit_product(request,id):
    if request.method == 'POST':

        submit_product_form = SubmitProductForm(request.POST,request.FILES or None)

        if request.POST['category'] != '0':
            cat_id = Category.objects.get(id=request.POST['category'])
        else:
            messages.success(request,'Select a category!')
            return redirect('products:submit_product')
        
        if request.POST['sub-category'] != '0':    
            subcat_id = Subcategory.objects.get(id=request.POST['sub-category'])
        else:
            messages.success(request,'Select a sub-category!')
            return redirect('products:submit_product')
        
        Products.objects.filter(id=id).update(product_name=request.POST['product-name'],
                                                 description=request.POST['description'],
                                                 category=cat_id,
                                                 price=request.POST['min-price'],
                                                 max_price=request.POST['max-price'],
                                                 minimum_order_quantity=request.POST['min-qty'],
                                                 sub_category = subcat_id)

        new = Products.objects.get(id=id)
        new.save()

        messages.success(request, 'Your product has successfully been edited!')
    
        return redirect('products:edit_product',id)
    else:
        
        product = Products.objects.get(id=id)
        submit_product_form = SubmitProductForm(initial={'product_name':'hi'})
        categories = Category.objects.all()
        sub_categories = Subcategory.objects.all()
        return render(request, 'products/edit.html',{'submit_product_form':submit_product_form,'product':product,'cat':categories,'subcat':sub_categories})

 
@login_required
def get_best_price(request, id):
    if request.method == 'POST':
        current_user = request.user.username
        buyer = User.objects.get(username=current_user)
        product = Products.objects.get(id=id)
        supplier = product.supplier

        quantity_required = request.POST['quantity']
        request_description = request.POST['description']

        primary_leads = Primary_leads(seller=supplier, buyer=buyer, product=product,
                                    quantity_required=quantity_required,
                                    request_description=request_description)
        primary_leads.save()

        
        send_lead_email(current_user,supplier,product,request)

        #Similar product leads to pro and premium sellers

        keywords = product.keywords
        #for key in keywords:

        messages.success(request,"Your request has been successfully sent to:")
        return redirect(product)
    else:
        return render(request, 'product/detail.html')


# @login_required
# def edit_product(request, id):
#     product = Products.objects.get(pk=id)

#     if request.method == 'POST':
#         product_form = ProductEditForm(instance=product,
#                                     data=request.POST,
#                                     files=request.FILES)
#         if product_form.is_valid():
#             product_form.save()
#     else:
#         product_form = ProductEditForm(instance=product)
#     return render(request,
#                   'products/edit.html',
#                   {'product_form': product_form})


class SearchView(TemplateView):
    template_name="sanjog/categorypage.html"

    def get_context_data(self,**kwargs):
        context = super().get_context_data(**kwargs)
        kw = self.request.GET.get("keyword")
        category = self.request.GET.get("category")

        if str(category) == "None":
            results = Products.objects.filter(Q(product_name__icontains=kw)|Q(description__icontains=kw)|Q(supplier__company_name__icontains=kw)|Q(keywords__icontains=kw))
        else:
            results = Products.objects.filter(Q(product_name__icontains=kw)|Q(description__icontains=kw)|Q(supplier__company_name__icontains=kw)|Q(keywords__icontains=kw)).filter(category__title=category)


        search_category = []
        search_seller = []
    
        for p in results:
            if not p.category in search_category:
                search_category.append(p.category)

            if not p.supplier in search_seller:
                search_seller.append(p.supplier)    
                
                
        context["keyword"] = kw
        context["category"] = search_category
        context["supplier"] = search_seller
        context["results"] = results
        context["scat"] = category

        pag = Paginator(results,16)
        page_number = self.request.GET.get("page")

        try:
            page_obj = pag.page(page_number)
        except PageNotAnInteger:
            page_obj = pag.page(1)
        except EmptyPage:
            page_obj = pag.page(pag.num_pages)


        context["pag"] = page_obj

        return context
        

def privacy_policy(request):
    
    success = 1
    
    return render(request, 'vistaar/privacy.html',{'success':success,})
    
def terms_conditions(request):
    
    success = 1
    
    return render(request, 'sanjog/terms.html',{'success':success,})

def add_products(request):
    
    success = 1

    if request.method=='POST':
        print('---------------------------------------')
        print(request.FILES)
    
    return render(request, 'sanjog/add-products.html',{'success':success,})

def become_a_seller(request):
    
    success = 1

    if request.method=='POST':
        print('---------------------------------------')
        print(request.FILES)
    
    return render(request, 'sanjog/become-a-seller.html',{'success':success,})
    
    

def append_value(dict_obj, key, value):
    # Check if key exist in dict or not
    if key in dict_obj:
        # Key exist in dict.
        dict_obj[key] += 1
    else:
        # As key is not in dict,
        # so, add key-value pair
        dict_obj[key] = value

def keyword_data(request):

    all_products = Products.objects.all()
    key_dict = {}

    for p in all_products:
        keys = p.keywords
        for x in keys:
            append_value(key_dict,x,1) 

    #sorted_d = dict(sorted(key_dict.items(), key=operator.itemgetter(1),reverse=True))
    return render(request,'admin/keyword_data.html',{'keywords':key_dict})

        

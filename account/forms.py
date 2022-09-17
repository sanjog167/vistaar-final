from django import forms
from django.contrib.auth.models import User
from .models import Primary_leads, Profile
from suppliers.models import Supplier, Company
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth import password_validation


class LoginForm(forms.Form):
    
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)


class UserRegistrationForm(forms.ModelForm):
    password = forms.CharField(label='Password',
                                widget=forms.PasswordInput)
    password2 = forms.CharField(label='Repeat password',
                                widget=forms.PasswordInput)
    class Meta:
        model = User
        fields = ('username', 'first_name', 'email')

    def clean_password2(self):
        cd = self.cleaned_data
        if cd['password'] != cd['password2']:
            raise forms.ValidationError('Passwords don\'t match.')
        return cd['password2']


class UserEditForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email')
        widgets = {
            'first_name': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
            'last_name': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
            'email': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'})
        }
        labels = {
            'first_name': 'First Name',
            'last_name': 'Last Name',
            'email': 'Email',
        }


class ProfileEditForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ('account_type',)
        widgets = {
            'account_type': forms.Select(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'})
        }
        labels = {
            'account_type': 'Account Type'
        }


# class SupplierForm(forms.ModelForm):
#     class Meta:
#         model = Supplier
#         fields = ('name','phone_number','mobile_number','company_name','establishment_year','ceo_name',
#                   'email','website','state',
#                   'address1','address2','exim','pan','vat')
#         widgets = {
#             'name': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'phone_number': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'mobile_number': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),

#             'company_name': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'establishment_year': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'ceo_name': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'email': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'website': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),

#             'state': forms.Select(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'address1': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'address2': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),

#             'exim': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'pan': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'vat': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#         }
#         labels = {
#             'name': 'Name *',
#             'phone_number': 'Phone Number',
#             'mobile_number': 'Mobile Number *',
#             'company_name': 'Company Name *',
#             'establishment_year': 'Year of Establishment *',
#             'ceo_name': 'CEO Name *',
#             'email': 'Email *',
#             'website': 'Website *',
#             'pin_code': 'PIN Code *',
#             'state': 'State *',
#             'city': 'City *',
#             'street': 'Street *',
#             'building_number': 'Building Number',
#             'locality': 'Locality',
#             'landmark': 'Landmark',
#             'exim': 'EXIM',
#             'pan': 'PAN',
#             'vat': "VAT"
#         }


class EditCompanyInfoForm(forms.ModelForm):
    class Meta:
        model = Supplier
        fields = ('name','phone_number','email')
        widgets = {
            'name': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
            'phone_number': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
            'email': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
        }
        labels = {
            'name': 'Name *',
            'phone_number': 'Phone Number *',
            'email': 'Email *'
        }


# class EditBusinessProfileForm(forms.ModelForm):
#     class Meta:
#         model = Supplier
#         fields = ('company_name','establishment_year','ceo_name',
#                   'website','pin_code','state','city','street','building_number',
#                   'locality','landmark','exim','pan','vat')
#         widgets = {
#             'company_name': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'establishment_year': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'ceo_name': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'website': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),

#             'pin_code': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'state': forms.Select(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'city': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'street': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'building_number': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'locality': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'landmark': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),

#             'exim': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'pan': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#             'vat': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
#         }
#         labels = {
#             'company_name': 'Company Name *',
#             'establishment_year': 'Year of Establishment *',
#             'ceo_name': 'CEO Name *',
#             'website': 'Website *',
#             'pin_code': 'PIN Code *',
#             'state': 'State *',
#             'city': 'City *',
#             'street': 'Street *',
#             'building_number': 'Building Number',
#             'locality': 'Locality',
#             'landmark': 'Landmark',
#             'exim': 'EXIM',
#             'pan': 'PAN',
#             'vat': "VAT"
#         }


class MyPasswordChangeForm(PasswordChangeForm):
    old_password = forms.CharField(
                    strip=False,
                    widget=forms.PasswordInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
                    label='Old Password'
                )
    new_password1 = forms.CharField(
                    strip=False,
                    widget=forms.PasswordInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
                    help_text=password_validation.password_validators_help_text_html(),
                    label='New Password'
                )
    new_password2 = forms.CharField(
                    strip=False,
                    widget=forms.PasswordInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
                    label='Confirm New Password'
                )


class CompanyForm(forms.ModelForm):

    class Meta:
        model = Company
        fields = ('company_name','establishment_year','ceo_name','email','website')
        widgets = {
            'company_name': forms.TextInput(attrs={'class':'form-control shadow-none'}),
            'establishment_year': forms.TextInput(attrs={'class':'form-control shadow-none'}),
            'ceo_name': forms.TextInput(attrs={'class':'form-control shadow-none'}),
            'email': forms.TextInput(attrs={'class':'form-control shadow-none'}),
            'website': forms.TextInput(attrs={'class':'form-control shadow-none'}),
        }
        labels = {
            'company_name': 'Company Name',
            'establishment_year': 'Year of Establishment',
            'ceo_name': 'CEO Name',
            'email': 'Email Address',
            'website': 'Website'
        }


class LeadsEditForm(forms.ModelForm):
    class Meta:
        model = Primary_leads
        fields = ('category',)
        widgets = {
            'category': forms.Select(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'})
        }
        labels = {
            'category': 'Category'
        }
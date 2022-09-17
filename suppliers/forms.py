from django import forms
from suppliers.models import Company

class CompanyForm(forms.ModelForm):

    class Meta:
        model = Company
        fields = ('company_name','establishment_year','ceo_name','email','website')
        widgets = {
            'company_name': forms.TextInput(attrs={'class':'form-control shadow-none'}),
            'establishment_year': forms.Select(attrs={'class':'form-control shadow-none'}),
            'ceo_name': forms.TextInput(attrs={'class':'form-control shadow-none'}),
            'email': forms.TextInput(attrs={'class':'form-control shadow-none'}),
            'website': forms.TextInput(attrs={'class':'form-control shadow-none'}),
        }
        labels = {
            'company_name': 'Name',
            'establishment_year': 'State',
            'ceo_name': 'City',
            'email': 'Street',
            'website': 'Phone Number'
        }

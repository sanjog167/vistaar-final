from django import forms
from .models import Quotations


class QuotationForm(forms.ModelForm):

    class Meta:
        model = Quotations
        fields = ['name','email','phone_number','mail_address','product_category','product_name','quantity','description']

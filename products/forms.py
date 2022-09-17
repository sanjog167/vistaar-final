from django import forms
from .models import Products


class SubmitProductForm(forms.ModelForm):

    class Meta:
        model = Products
        fields = ['product_name','description','category','sub_category','image','price','max_price','minimum_order_quantity']
        widgets = {
            'product_name': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
            'description': forms.Textarea(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com', 'rows':'8'}),
            'category': forms.Select(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
            'sub_category': forms.Select(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
            'price': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
            'max_price': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
            'minimum_order_quantity': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
        }
        labels = {
            'product_name': 'Product Name',
            'description': 'Description',
            'category': 'Category',
            'sub_category': 'Sub - Category',
            'image': '',
            'price': 'Price',
            'max_price':'Maximum Price',
            'minimum_order_quantity': 'Minimum Order Quantity',
        }


class ProductEditForm(forms.ModelForm):
    class Meta:
        model = Products
        fields = ('product_name', 'description', 'category', 'image', 'price', 'minimum_order_quantity')
        widgets = {
            'product_name': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
            'description': forms.Textarea(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com', 'rows':'8'}),
            'category': forms.Select(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
            'price': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
            'max_price': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'}),
            'minimum_order_quantity': forms.TextInput(attrs={'class':'form-control shadow-none', 'id':'floatingName', 'placeholder':'name@example.com'})
        }
        labels = {
            'product_name': 'Product Name',
            'description': 'Description',
            'category': 'Category',
            'image': '',
            'price': 'Price',
            'max_price':'Maximum Price',
            'minimum_order_quantity': 'Minimum Order Quantity'
        }
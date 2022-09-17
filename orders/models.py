from django.db import models
from products.models import Category

# Create your models here.

class Quotations(models.Model):

    name = models.CharField(max_length=50, blank=False,null=False)
    email = models.EmailField()
    phone_number = models.DecimalField(decimal_places=0,max_digits=13)
    mail_address = models.CharField(max_length=200)

    product_category = models.ForeignKey(Category, on_delete=models.CASCADE)

    product_name = models.CharField(max_length=50)
    quantity = models.CharField(max_length = 30)
    description = models.CharField(max_length=200)

    






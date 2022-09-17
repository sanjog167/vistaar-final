from unicodedata import category
from django.db import models
from suppliers.models import Supplier
from django.urls import reverse
from datetime import date
from django_mysql.models import ListCharField
from ckeditor.fields import RichTextField

import numpy as np
# Create your models here.

class Category(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    featured = models.BooleanField(default=False)
    listed = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    def get_image_path(self, filename):
        path = ''.join([date.today().strftime('categories/%Y/%m/%d/'), filename])
        return path

    image = models.ImageField(upload_to=get_image_path, default='default.jpg', blank=True)
    
    def get_absolute_url(self):
        return reverse('category_detail', args=[self.id,self.slug])

    def get_subcat(self):
        return Subcategory.objects.filter(category=self)
        
        
class Subcategory(models.Model):
    title = models.CharField(max_length=100)
    slug =  models.SlugField(unique=True)
    category = models.ForeignKey(Category,on_delete=models.CASCADE,related_name='subcat')

    def __str__(self):
        return self.title



class Products(models.Model):
    product_name = models.CharField(max_length=100, db_index=True)
    slug = models.SlugField(max_length=200, db_index=True)
    description = RichTextField(blank=True, null=True)

    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def get_image_path(self, filename):
        path = ''.join([date.today().strftime('products/%Y/%m/%d/'), filename])
        return path

    image = models.ImageField(upload_to=get_image_path, default='default.jpg', blank=True, null=True)
    image2 = models.ImageField(upload_to=get_image_path, blank=True)
    image3 = models.ImageField(upload_to=get_image_path, blank=True)
    image4 = models.ImageField(upload_to=get_image_path, blank=True)

    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)
    price = models.PositiveIntegerField(null=False, blank=False)
    max_price = models.PositiveIntegerField(null=False, blank=False, default=0)
    minimum_order_quantity = models.CharField(max_length=250)
    featured = models.BooleanField(default=False)
    available = models.BooleanField(default=True)

    clicks = models.PositiveIntegerField(default=0)
    
    keywords = ListCharField(base_field=models.CharField(max_length=20),default=[],max_length=400)
    
    sub_category = models.ForeignKey(Subcategory, on_delete=models.CASCADE, blank=True, null=True)
    
    class Meta:
        ordering = ('product_name',)
        index_together = (('id', 'slug'),)

    def __str__(self):
        return self.product_name

    def get_absolute_url(self):
        return reverse('products:product_detail', args=[self.id,self.slug])

    def related_products(self,queryset):
        keywords = self.keywords
        related = []
        for p in queryset:
            cmp = p.keywords
            similarity = len(np.intersect1d(keywords, cmp))
            if similarity >= 2:
                related.append(p)

        return related

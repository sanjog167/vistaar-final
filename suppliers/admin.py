from django.contrib import admin
from .models import Supplier, Company, CompanyAddress, CompanyStatutory
# Register your models here.

admin.site.register(Supplier)
admin.site.register(Company)
admin.site.register(CompanyAddress)
admin.site.register(CompanyStatutory)
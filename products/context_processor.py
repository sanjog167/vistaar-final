from distutils.util import subst_vars
from unicodedata import category
from products.models import Category

def extras(request):
    fcategories = Category.objects.filter(featured=True).order_by("id")
    all_cat = Category.objects.all()


    return {'nav_categories':fcategories,'all_cat':all_cat}
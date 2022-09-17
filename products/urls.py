from django.urls import path
from .views import *

app_name = 'products'

urlpatterns = [
    
    path('<int:id>/<slug:slug>/', product_detail,name='product_detail'),
    path('category/<int:id>/<slug:slug>/', category_detail,name='category_detail'),
    path('subcategory/<int:id>/<slug:slug>/', subcategory_detail,name='subcategory_detail'),
    path('submit_product', submit_product,name='submit_product'),
    path('get_best_price/<int:id>', get_best_price, name='get_best_price'),
    path('edit_product/<int:id>/', edit_product, name='edit_product'),

    path("search/", SearchView.as_view(), name="search"),
    
    path("keywords_data/", keyword_data,name="keyword_data"),
]


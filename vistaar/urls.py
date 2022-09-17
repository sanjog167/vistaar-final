"""vistaar URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.urls.conf import re_path
from products.views import HomeView,category_detail,privacy_policy,terms_conditions
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include('account.urls')),
    path('', HomeView.as_view(), name='home'),
    path('products/', include('products.urls')),
    path('supplier/', include('suppliers.urls')),

    path('orders/', include('orders.urls', namespace='orders')),
    path('<int:id>/<slug:slug>/', category_detail,name='category_detail'),
    path('privacy-policy', privacy_policy,name='privacy_policy'),
    path('newterms-conditions', terms_conditions,name='terms_conditions'), 
    path('terms-conditions', terms_conditions,name='terms_conditions'), 
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

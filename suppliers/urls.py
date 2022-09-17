from django.urls import path
from .views import supplier_detail

app_name = 'suppliers'

urlpatterns = [
    
    path('<int:id>/', supplier_detail,name='supplier_detail'),

]

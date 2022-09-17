from django.urls import path
from . import views
from orders.views import req_quotation

app_name = 'orders'

urlpatterns = [

    path("request-quotation/",views.req_quotation, name="request_quotation" )

    
]

from django.shortcuts import render

from .forms import QuotationForm
from django.conf import settings
from django.views.generic import View
from django.shortcuts import render, redirect
from django.urls import reverse_lazy, reverse

from django.http import HttpResponseRedirect
import requests


def req_quotation(request):

    if request.method == 'POST':
        quotation_form = QuotationForm(request.POST)

        if quotation_form.is_valid():
            new_quotation = quotation_form.save(commit=False)
            
            new_quotation.save()

            return render(request, 'shop/orders/quotation_submitted',{'new_quotation':new_quotation})

    else:
        quotation_form = QuotationForm()

    return render(request,'orders/submit_quotation.html',{'quotation_form':quotation_form})


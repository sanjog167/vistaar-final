from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import Supplier,Company
from products.models import Products,Category



from django.shortcuts import render

# Create your views here.
    

def supplier_detail(request,id):

    
    supplier = get_object_or_404(Supplier,id=id)
    
    supplier_products = supplier.products_set.all().order_by("-clicks")[:10]
    
    all_products = supplier.products_set.all()
    
    supplier_category = []
    
    for p in all_products:
        if not p.category in supplier_category:
            supplier_category.append(p.category)


    if request.method == 'POST':
        
        success = 1
        
        return render(request,'supplier/profile_page.html',{'success':'Success'})
        
    else:
        
        return render(request,'supplier/seller_page.html',{'supplier':supplier,'products':supplier_products,'category':supplier_category,'all_products':all_products})






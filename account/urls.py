from django.urls import path
from django.contrib.auth import views as auth_views
from . import views



urlpatterns = [
# post views
        path('post_requirements/', views.post_requirements, name='post_requirements'),
        path('login/', views.user_login, name='login'),
        # path('login/', auth_views.LoginView.as_view(template_name='account/login.html'), name='login'),
        path('logout/', auth_views.LogoutView.as_view(template_name='account/logged_out.html'), name='logout'),
        
        #Seller-Tools
        path('dashboard/', views.dashboard, name='dashboard'),
        path('company_profile/',views.company_profile, name='company_profile'),
        path('lead_manager/',views.lead_manager, name='lead_manager'),
        path('manage_products/',views.manage_products, name='manage_products'),
        path('buy_leads/',views.buy_leads, name='buy_leads'),
        path('edit_leads/<int:id>/',views.edit_leads, name='edit_leads'),

        path('collect_payments/',views.collect_payments, name='collect_payments'),
        path('catalog_view/',views.catalog_view, name='catalog_view'),
        path('photos_and_docs/',views.photos_docs, name='photos_docs'),
        path('bills_and_invoice/',views.bills_invoice, name='bills_invoice'),
        path('buyer_tools/',views.buyer_tools, name='buyer_tools'),
        path('settings/',views.settings, name='settings'),

        # change password urls
        path('password_change', views.change_password, name='password_change'),
        path('password_change/done/',auth_views.PasswordChangeDoneView.as_view(),name='password_change_done'),

        # reset password urls
        path('password_reset/',auth_views.PasswordResetView.as_view(),name='password_reset'),
        path('password_reset/done/',auth_views.PasswordResetDoneView.as_view(),name='password_reset_done'),
        path('reset/<uidb64>/<token>/',auth_views.PasswordResetConfirmView.as_view(),name='password_reset_confirm'),
        path('reset/done/',auth_views.PasswordResetCompleteView.as_view(),name='password_reset_complete'),

        #User Registration
        path('register/', views.register, name='register'),

        #Edit Profile
        path('edit/', views.edit, name='edit'),

        #Verifying Users
        path('verify_supplier', views.register_supplier, name='register_supplier'),

        path('edit_company_info', views.edit_company_info, name='edit_company_info'),
        path('edit_business_profile', views.edit_business_profile, name='edit_business_profile'),
        
        #Email Activation
        path('activate-user/<uidb64>/<token>',views.activate_user, name='activate'),
]

from django.contrib import admin
from .models import Profile,Primary_leads,Message_box,Lead_messages,RFQ_leads,Premium_leads


# Register your models here.

@admin.register(Profile)
class ProfileAdmin (admin.ModelAdmin):
    list_display = ['user','account_type']


admin.site.register(Primary_leads)
admin.site.register(Premium_leads)
admin.site.register(RFQ_leads)
admin.site.register(Lead_messages)
admin.site.register(Message_box)



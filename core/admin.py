# admin.py
from django.contrib import admin
from .models import Event, Contact

admin.site.register(Event)
'''
username -> adminhkd
password -> adminhkd
'''

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'address', 'mobile', 'created_at')
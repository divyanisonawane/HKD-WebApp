from django.contrib import admin
from .models import Event, Contact

admin.site.register(Event)
'''
username -> adminhkd
password -> adminhkd
'''
from django.contrib import admin
from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    def course_display(self, obj):
        return obj.get_course_display()

    course_display.short_description = 'Course'

    list_display = ('name', 'email', 'city', 'state', 'mobile', 'course_display', 'created_at')
    search_fields = ('name', 'email', 'city')
    list_filter = ('state', 'course')
    fields = ('name', 'email', 'city', 'state', 'mobile', 'course')

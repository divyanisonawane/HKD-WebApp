from django.urls import path
from .views import about, home, courses, calendar,donate, event_page, create_contact, gallary, library, counter, teachers

urlpatterns = [
    path('', home, name='home'),
    path('courses', courses, name='courses'),
    path('about', about, name='about'),
    path('contact', courses, name='contact'),
    path('teachers', teachers, name='teachers'),
    path('event1', courses, name='event1'),
    path('event2', courses, name='event2'),
    path('gallary', gallary, name='gallary'),
    path('team', courses, name='team'),
    path('calendar', calendar, name='calendar'),
    path('library', library, name='library'),
    path('donate', donate, name='donate'),
    path('counter', counter, name='counter'),
    path("events/<str:title>/", event_page, name="event_page"),
    path('submit-contact/', create_contact, name='submit_contact'),
]

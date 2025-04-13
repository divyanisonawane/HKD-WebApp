# models.py
from django.db import models


class Event(models.Model):
    title = models.CharField(max_length=200)
    event_description = models.TextField()
    start = models.DateTimeField()
    end = models.DateTimeField()
    url = models.URLField()

    def __str__(self):
        return self.title

class Contact(models.Model):
    COURSE_CHOICES = [
        ('Bhagavad Gita Course', 'Bhagavad Gita Course'),
        ('Diksha Preparation Course', 'Diksha Preparation Course'),
        ('Digital Marketing Course', 'Digital Marketing Course'),
    ]

    name = models.CharField(max_length=255)
    email = models.EmailField()
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    mobile = models.CharField(max_length=15)
    course = models.CharField(max_length=100, choices=COURSE_CHOICES, default='Bhagavad Gita Course')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    def print_display(self):
        print("Raw course:", self.course)
        print("Display course:", self.get_course_display())
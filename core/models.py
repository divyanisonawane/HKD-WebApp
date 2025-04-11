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
    name = models.CharField(max_length=255)
    email = models.EmailField()
    address = models.CharField(max_length=255)
    mobile = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
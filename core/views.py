import csv
import os
import re
from django.conf import settings
from django.shortcuts import render, redirect
from django.http import Http404
from django.contrib import messages
from .forms import Contact


def home(request):
    return render(request, 'home.html')

def courses(request):
    return render(request, 'courses.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def teachers(request):
    return render(request, 'teachers.html')

def event1(request):
    return render(request, 'event1.html')

def event2(request):
    return render(request, 'event2.html')

def team(request):
    return render(request, 'team.html')

def gallary(request):
    return render(request, 'gallary.html')

def calendar(request):
    return render(request, 'calendar.html')

def donate(request):
    return render(request, 'donate.html')

def library(request):
    return render(request, 'library.html')

def counter(request):
    return render(request, 'counter.html')

def slugify(title):
    """Converts event title to a URL-friendly slug."""
    return re.sub(r'\s+', '-', title.strip().lower())  # Replace spaces with hyphens and lowercase it

def get_event_details():
    """Reads event content from CSV stored in the static folder."""
    file_path = os.path.join(settings.BASE_DIR, "core", "static", "events.csv")

    if not os.path.exists(file_path):
        raise FileNotFoundError(f"CSV file not found at {file_path}")

    event_data = {}
    event_titles = []
    with open(file_path, mode="r", encoding="utf-8") as file:
        reader = csv.DictReader(file)
        for row in reader:
            event_name = row["title"].strip()  # Keep original case for display
            slug = slugify(event_name)  # Convert to slug
            event_data[slug] = {"title": event_name, "description": row["event-description"]}
            event_titles.append(slug)

    return event_data, event_titles

def event_page(request, title):
    """Dynamically renders an event page based on the slug."""
    event_data, event_titles = get_event_details()

    if title not in event_data:
        raise Http404("Event not found")

    # Format title by replacing hyphens with spaces
    formatted_title = title.replace("-", " ").title()

    # Get previous and next event for navigation
    current_index = event_titles.index(title)
    previous_title = event_titles[current_index - 1] if current_index > 0 else None
    next_title = event_titles[current_index + 1] if current_index < len(event_titles) - 1 else None

    return render(request, "event_template.html", {
        "title": formatted_title,  # Use formatted title
        "event_description": event_data[title]["description"],
        "previous_title": previous_title,
        "next_title": next_title,
    })

def contact_form_submission(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        address = request.POST.get('address')
        mobile = request.POST.get('mobile')

        if name and email and address and mobile:
            Contact.objects.create(name=name, email=email, address=address, mobile=mobile)
            messages.success(request, "Your contact details have been saved successfully!")
            return redirect('/')  # Redirect to home page or success page
        else:
            messages.error(request, "All fields are required!")

    return render(request, "home.html") 

import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hkd.settings")
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()

username = os.environ.get("DJANGO_SU_NAME", "hkdadmin")
email = os.environ.get("DJANGO_SU_EMAIL", "sonawanedivyani148@gmail.com")
password = os.environ.get("DJANGO_SU_PASSWORD", "HareKrishna@")

if not User.objects.filter(username=username).exists():
    User.objects.create_superuser(username=username, email=email, password=password)
    print("✅ Superuser created.")
else:
    print("ℹ️ Superuser already exists.")

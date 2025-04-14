import django
from django.contrib.auth import get_user_model
from django.conf import settings
import os


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hkd.settings")
django.setup()

User = get_user_model()

username = "krishna"
email = "sonawanedivyani148@gmail.com"
password = "harekrishna"

if not User.objects.filter(username=username).exists():
    print("👑 Creating superuser...")
    User.objects.create_superuser(username=username, email=email, password=password)
else:
    print("✅ Superuser already exists.")

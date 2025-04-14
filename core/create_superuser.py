import django
from django.contrib.auth import get_user_model
import sys
import os

# Add the parent directory to the sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

# Explicitly set the Django settings module
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hkd.settings")

# Now setup Django
django.setup()

# Get the user model
User = get_user_model()

# Hardcoded superuser credentials
username = "hkdadmin"
email = "sonawanedivyani148@gmail.com"
password = "harekrishna"

# Check if the superuser already exists, if not, create one
if not User.objects.filter(username=username).exists():
    print("👑 Creating superuser...")
    User.objects.create_superuser(username=username, email=email, password=password)
else:
    print("✅ Superuser already exists.")

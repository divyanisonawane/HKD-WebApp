#!/usr/bin/env bash

# Exit on error
set -o errexit

echo "📦 Installing dependencies..."
pip install -r requirements.txt

echo "📂 Running migrations..."
python manage.py migrate

echo "📁 Collecting static files..."
python manage.py collectstatic --noinput

echo "👑 Creating superuser if needed..."
python core/create_superuser.py

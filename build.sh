#!/usr/bin/env bash
set -o errexit

echo "🔧 Installing dependencies..."
poetry install --no-root

echo "🛠️ Running migrations..."
poetry run python manage.py migrate

echo "🎨 Collecting static files..."
poetry run python manage.py collectstatic --noinput

echo "👑 Creating admin superuser..."
poetry run python core/create_superuser.py

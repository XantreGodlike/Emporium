from django.contrib import admin
from .models import Article

# Регистрирую таблицу Articles
admin.site.register(Article)
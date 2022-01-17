from django.shortcuts import render
from .models import Article

def new_card(request):
	news = Article.objects.all()
	return render(request, 'tmp.html', {'news': news})    # Emporium/templates/

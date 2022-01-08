from django.urls import path
from django.views.generic.base import *

class HomePage(TemplateView):
    template_name = 'index.htm'
    # template_name = 'about.htm'

    def get_context_data(self, **kwargs: any) -> dict[str, any]:
        return super().get_context_data(**kwargs)
    

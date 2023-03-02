from django.contrib import admin
from .models import Resource

class ResourceAdmin(admin.ModelAdmin):
  list_display = ('name', 'desc', 'link', 'category')
  
admin.site.register(Resource, ResourceAdmin)

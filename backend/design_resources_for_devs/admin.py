from django.contrib import admin
from .models import Resource, Category

class ResourceAdmin(admin.ModelAdmin):
  list_display = ('id', 'name', 'description', 'link', 'category')
  
class CategoryAdmin(admin.ModelAdmin):
  display = ('category')
  
admin.site.register(Resource, ResourceAdmin)
admin.site.register(Category, CategoryAdmin)


from rest_framework import serializers
from .models import Resource, Category

class ResourceSerializer(serializers.ModelSerializer):
  category_id = serializers.StringRelatedField(source='category.id', read_only=True)
  
  class Meta:
    model = Resource
    fields = ('id', 'name', 'description', 'link', 'category_id')
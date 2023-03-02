from rest_framework import serializers
from .models import Resource

class ResourceSerializer(serializers.ModelSerializer):
  class Meta:
    model = Resource
    fields = ('id', 'name', 'desc', 'link', 'category')
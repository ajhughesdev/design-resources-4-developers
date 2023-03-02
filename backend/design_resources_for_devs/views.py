from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ResourceSerializer
from .models import Resource


class ResourceView(viewsets.ModelViewSet):
  queryset = Resource.objects.all()
  serializer_class = ResourceSerializer
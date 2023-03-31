from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Resource, Category
from .serializers import ResourceSerializer


class ResourceList(APIView):
  def get(self, request):
    resources = Resource.objects.all()
    serializer = ResourceSerializer(resources, many=True)
    return Response(serializer.data)
  
class ResourceDetails(APIView):
  def get(self, request, resource_id):
    resource = get_object_or_404(Resource, pk=resource_id)
    serializer = ResourceSerializer(resource)
    return Response(serializer.data)
  
class CategoryList(APIView):
  def get(self, request):
    categories = Category.objects.all()
    data = [{'category': c.name} for c in categories]
    return Response(data)
  
class ResourceCategory(APIView):
  def get(self, request, category):
    resources = Resource.objects.filter(category__name=category)
    serializer = ResourceSerializer(resources, many=True)
    return Response(serializer.data)
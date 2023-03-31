from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from django.contrib import admin    
from design_resources_for_devs import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/resources/', views.ResourceList.as_view(), name='resource_list'),
    path('api/resources/<int:resource_id>/', views.ResourceDetails.as_view(), name='resource_detail'),
    path('api/categories/', views.CategoryList.as_view(), name='category_list'),
    path('api/categories/<str:category>/', views.ResourceCategory.as_view(), name='category_resources' ),
]

urlpatterns = format_suffix_patterns(urlpatterns)
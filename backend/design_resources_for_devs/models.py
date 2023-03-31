from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=150, verbose_name='Category', unique=True)
    
    class Meta:
        verbose_name_plural = 'Categories'
        
    def __str__(self):
        return self.name        
    

class Resource(models.Model):
    name = models.CharField(max_length=150, verbose_name='Name')
    description = models.TextField(verbose_name='Description')
    link = models.URLField(verbose_name='Link')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name='Category')
    
    class Meta:
        unique_together = ('name', 'category')

    def __str__(self):
        return self.name
from django.db import models


class Resource(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150, verbose_name='Name')
    desc = models.TextField(verbose_name='Description')
    link = models.URLField(verbose_name='Link')
    category = models.CharField(max_length=150, verbose_name='Category')
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['name', 'category'], name='unique_name_category')
        ]

    def __str__(self):
        return self.name

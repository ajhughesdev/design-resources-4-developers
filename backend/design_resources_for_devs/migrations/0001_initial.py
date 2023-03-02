# Generated by Django 4.1.7 on 2023-03-02 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Resource',
            fields=[
                ('resource_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=150, verbose_name='Name')),
                ('desc', models.TextField(verbose_name='Description')),
                ('link', models.URLField(verbose_name='Link')),
                ('category', models.CharField(max_length=150, verbose_name='Category')),
            ],
        ),
        migrations.AddConstraint(
            model_name='resource',
            constraint=models.UniqueConstraint(fields=('name', 'category'), name='unique_name_category'),
        ),
    ]

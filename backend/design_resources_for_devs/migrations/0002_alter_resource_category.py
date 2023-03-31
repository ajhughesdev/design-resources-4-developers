# Generated by Django 4.1.7 on 2023-03-31 08:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('design_resources_for_devs', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resource',
            name='category',
            field=models.ForeignKey(db_column='category', on_delete=django.db.models.deletion.CASCADE, to='design_resources_for_devs.category', verbose_name='Category'),
        ),
    ]

# Generated by Django 2.1.7 on 2019-03-05 06:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_project_data_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='url',
            field=models.URLField(blank=True, null=True),
        ),
    ]

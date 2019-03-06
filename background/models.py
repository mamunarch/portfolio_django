from django.db import models

class Background(models.Model):
	home_banner		= models.ImageField(upload_to='images/', blank=True, null=True)
	service_bg		= models.ImageField(upload_to='images/', blank=True, null=True)
	contact_home	= models.ImageField(upload_to='images/', blank=True, null=True)
	contact_modal	= models.ImageField(upload_to='images/', blank=True, null=True)
	project_banner	= models.ImageField(upload_to='images/', blank=True, null=True)
	blog_banner		= models.ImageField(upload_to='images/', blank=True, null=True)

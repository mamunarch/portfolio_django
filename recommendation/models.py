from django.db import models

class Recommendation(models.Model):
	image	= models.ImageField(upload_to='images/')
	comment	= models.TextField()
	name	= models.CharField(max_length=50)

	def __str__(self):
		return self.name

from django.db import models

class Post(models.Model):
	title		= models.CharField(max_length=50)
	image		= models.ImageField(upload_to='images/')
	date		= models.DateTimeField(auto_now=False, auto_now_add=False, blank=True, null=True)
	descriptoin	= models.TextField(blank=True, null=True)
	category	= models.CharField(max_length=50, blank=True, null=True)
	tag			= models.CharField(max_length=50, blank=True, null=True)
	data_filter	= models.CharField(max_length=50, blank=True, null=True)
	featured	= models.BooleanField(default=False)

	def comment(self):
		return self.blog_comment

	def __str__(self):
		return self.title

	def pub_date(self):
		return self.date.strftime("%b %d %Y")

	def short_desc(self):
		return self.descriptoin[:200]

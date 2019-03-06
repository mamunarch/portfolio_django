from django.db import models
from django.utils import timezone
from django.urls import reverse

class Project(models.Model):
	title		= models.CharField(max_length=50, blank=True, null=True)
	client		= models.CharField(max_length=50, blank=True, null=True)
	image 		= models.ImageField(upload_to='images/')
	year		= models.DateTimeField(auto_now=False, auto_now_add=False, blank=True, null=True)
	category	= models.CharField(max_length=50, blank=True, null=True)
	data_category= models.IntegerField(blank=True, null=True)
	technology	= models.CharField(max_length=200, blank=True, null=True)
	summery		= models.CharField(max_length=200, blank=True, null=True)
	description = models.TextField()
	url			= models.URLField(null=True, blank=True)

	def comment(self):
		return self.project_comment

	def __str__(self):
		return self.title

	def pub_date(self):
		return self.year.strftime("%Y")


# class Comment(models.Model):
# 	project		= models.ForeignKey(projects.Project, related_name='project_comment', on_delete=models.CASCADE)
# 	author		= models.CharField(max_length=50)
# 	text 		= models.TextField()
# 	create_date	= models.DateTimeField(default=timezone.now)


# 	def __str__(self):
# 		return self.text

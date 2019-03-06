from django.db import models
from django.utils import timezone
from django.urls import reverse

from blog.models import Post
from projects.models import Project

class Comment(models.Model):
	post	= models.ForeignKey(Post, related_name='blog_comment', on_delete=models.CASCADE, blank=True, null=True)
	project = models.ForeignKey(Project, related_name='project_comment', on_delete=models.CASCADE, blank=True, null=True)
	author	= models.CharField(max_length=20)
	text	= models.TextField()
	date	= models.DateTimeField(default=timezone.now)
	email	= models.EmailField(blank=True, null=True)

	def __str__(self):
		return self.text

	def get_absolute_url(self):
		return reverse("project:list")

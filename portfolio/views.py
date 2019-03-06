from django.shortcuts import render
from projects.models import Project
from blog.models import Post
from recommendation.models import Recommendation
from background.models import Background

def home(request):
	project = Project.objects.all()
	post	= Post.objects.all().order_by('-id')
	recommendation	= Recommendation.objects.all()
	background		= Background.objects.all()
	return render(request, 'index.html', {'proj':project, 'post':post, 'recommendation':recommendation, 'background':background})
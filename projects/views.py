from django.shortcuts import render, get_object_or_404, redirect

from .models import Project
from comments.models import Comment
from background.models import Background

# from comments.forms import CommentForm

def project(request):
	project = Project.objects.all
	background = Background.objects.all()
	return render(request, 'projects/projects.html', {'project':project, 'background':background})

def project_detail(request, pk):
	project = get_object_or_404(Project, pk=pk)
	return render(request, 'projects/project_detail.html', {'project':project})

def add_comment_to_project(request, pk):
	
	if request.method == 'POST':
		if request.POST.get('author') and request.POST.get('email') and request.POST.get('text'):
			print(request.POST.get('author'))
			# proj = get_object_or_404(Project, pk=pk)
			# proj.comment.author=request.POST.get('author')
			# proj.comment.email=request.POST.get('email')
			# proj.comment.text=request.POST.get('text')
			# proj.save()
			return redirect('project:detail', pk)
	else:
		form = CommentForm()

	return redirect('project:detail', pk)
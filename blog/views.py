from django.shortcuts import render, get_object_or_404
from .models import Post
from background.models import Background


def blog_list(request):
	post = Post.objects.all
	background = Background.objects.all()
	return render(request, 'blog/blog.html', {'post':post, 'background':background})

def blog_detail(request, pk):
	post = get_object_or_404(Post, pk=pk)
	return render(request, 'blog/blog_detail.html', {'post':post})
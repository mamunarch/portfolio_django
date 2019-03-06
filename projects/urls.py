from django.urls import path
from django.conf.urls import url
from . import views

app_name = "project"

urlpatterns = [
    url(r'^$', views.project, name='list'),
    url(r'(?P<pk>\d+)/$', views.project_detail, name='detail'),
    url(r'(?P<pk>\d+)/comment/$', views.add_comment_to_project, name='comment'),
]

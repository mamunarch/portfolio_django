from django.urls import path
from django.conf.urls import url
from . import views

app_name = "blog"

urlpatterns = [
    url(r'^$', views.blog_list, name='list'),
    url(r'(?P<pk>\d+)/$', views.blog_detail, name='detail'),
]

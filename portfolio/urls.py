from django.contrib import admin
from django.urls import path

# those are for visualize static from admin
from django.conf import settings
from django.conf.urls.static import static

from django.conf.urls import url, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^$', views.home, name='home'),
    url(r'^project/', include('projects.urls')),
    url(r'^blog/', include('blog.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

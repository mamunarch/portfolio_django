from django.contrib import admin
from .models import Post

from django.utils.html import format_html


class BlogAdmin(admin.ModelAdmin):

    def image_tag(self, obj):
        return format_html('<img src="{}" style="width:100px;"/>'.format(obj.image.url))

    image_tag.short_description = 'Image'

    list_display = ['title', 'id', 'pub_date', 'featured','image_tag']

admin.site.register(Post, BlogAdmin)

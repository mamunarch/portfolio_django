from django.contrib import admin

from .models import Comment

from django.utils.html import format_html


class CommentAdmin(admin.ModelAdmin):

    def image_tag(self, obj):
        return format_html('<img src="{}" style="width:100px;"/>'.format(obj.image.url))

    image_tag.short_description = 'Image'

    list_display = ['text','post','project']

admin.site.register(Comment, CommentAdmin)
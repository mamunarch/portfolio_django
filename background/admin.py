from django.contrib import admin
from .models import Background

from django.utils.html import format_html


# class BackgroundAdmin(admin.ModelAdmin):

#     def image_tag(self, obj):
#         return format_html('<img src="{}" style="width:100px;"/>'.format(obj.image.url))

#     image_tag.short_description = 'Image'

#     list_display = ['id', 'image_tag']

admin.site.register(Background)
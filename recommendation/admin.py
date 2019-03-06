from django.contrib import admin
from .models import Recommendation

from django.utils.html import format_html


class RecommendationAdmin(admin.ModelAdmin):

    def image_tag(self, obj):
        return format_html('<img src="{}" style="width:100px;"/>'.format(obj.image.url))

    image_tag.short_description = 'Image'

    list_display = ['name','image_tag']

admin.site.register(Recommendation, RecommendationAdmin)
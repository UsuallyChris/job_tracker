""" routes for jobs app """
from rest_framework import routers
from .views import JobViewSet

ROUTER = routers.DefaultRouter()
ROUTER.register('', JobViewSet, 'jobs')

urlpatterns = ROUTER.urls

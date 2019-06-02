""" routes for jobs app """
from rest_framework import routers
from .views import JobViewSet, ContactViewSet

ROUTER = routers.DefaultRouter()
ROUTER.register('jobs', JobViewSet, 'jobs')
ROUTER.register('contacts', ContactViewSet, 'contacts')

urlpatterns = ROUTER.urls

""" routes for contacts app """
from rest_framework import routers
from .views import ContactViewSet

ROUTER = routers.DefaultRouter()
ROUTER.register('', ContactViewSet, 'contacts')

urlpatterns = ROUTER.urls

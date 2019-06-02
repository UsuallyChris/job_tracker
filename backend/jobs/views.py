""" view definitions for jobs app """
from rest_framework import viewsets, permissions
from .models import Job, Contact
from .serializers import JobSerializer, ContactSerializer


class JobViewSet(viewsets.ModelViewSet):
    """ ViewSet definition for Job model """
    queryset = Job.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = JobSerializer


class ContactViewSet(viewsets.ModelViewSet):
    """ ViewSet definition for Contact model """
    queryset = Contact.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ContactSerializer

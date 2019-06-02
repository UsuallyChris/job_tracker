""" view definitions for jobs app """
from rest_framework import viewsets, permissions
from .models import Job
from .serializers import JobSerializer


class JobViewSet(viewsets.ModelViewSet):
    """ ViewSet definition for Job model """
    queryset = Job.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = JobSerializer

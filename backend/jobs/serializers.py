""" serializer definitions for jobs app """
from rest_framework import serializers
from .models import Job


class JobSerializer(serializers.ModelSerializer):
    """ Job model serializer """
    class Meta:
        model = Job
        fields = '__all__'

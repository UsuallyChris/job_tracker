""" serializer definitions for jobs app """
from rest_framework import serializers
from .models import Job, Contact


class JobSerializer(serializers.ModelSerializer):
    """ Job model serializer """
    class Meta:
        model = Job
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
    """ Contact model serializer """
    class Meta:
        model = Contact
        fields = '__all__'

""" serializers definition for contacts app """
from rest_framework import serializers
from .models import Contact


class ContactSerializer(serializers.ModelSerializer):
    """ Contact serializer """
    class Meta:
        model = Contact
        fields = '__all__'

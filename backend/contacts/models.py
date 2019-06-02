""" model definitions for contacts app """
from django.db import models


class Contact(models.Model):
    """ Contact model definition """
    name = models.CharField(max_length=100, null=True)
    phone_number = models.CharField(max_length=20, null=True)
    email = models.EmailField(null=True)
    company = models.CharField(max_length=100, null=True)

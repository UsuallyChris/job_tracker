""" model definitions for jobs app """
from django.db import models


class Job(models.Model):
    """ Job model definition """
    company = models.CharField(max_length=100)
    date_applied = models.DateField()
    job_title = models.CharField(max_length=100)


class Contact(models.Model):
    """ Contact model definition """
    name: models.CharField(max_length=100)
    phone: models.CharField(max_length=20)
    email: models.EmailField()
    company: models.CharField(max_length=100)

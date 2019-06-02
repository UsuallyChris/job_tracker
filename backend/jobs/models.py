""" model definitions for jobs app """
from django.db import models


class Job(models.Model):
    """ Job model definition """
    company = models.CharField(max_length=100)
    date_applied = models.DateField()
    job_title = models.CharField(max_length=100)

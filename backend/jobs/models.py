""" model definitions for jobs app """
from django.db import models


class Job(models.Model):
    """ Job model definition """

    # CHOICES
    OFFER = 'OFF'
    APPLIED = 'APP'
    REJECTED = 'REJ'
    JOB_STATUS_CHOICES = (
        (OFFER, 'Job offered'),
        (APPLIED, 'Applied to job'),
        (REJECTED, 'Application rejected'),
    )

    # MODEL FIELDS
    company = models.CharField(max_length=100)
    date_applied = models.DateTimeField()
    job_title = models.CharField(max_length=100)
    job_status = models.CharField(
        max_length=3, choices=JOB_STATUS_CHOICES, default='APP')

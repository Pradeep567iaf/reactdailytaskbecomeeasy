from unittest.util import _MAX_LENGTH
from django.db import models
from datetime import datetime

class tasksheduler(models.Model):
    firstname = models.CharField(max_length=30)
    lastname = models.CharField(max_length=30)
    email = models.EmailField()
    phonenumber = models.CharField(max_length=10)
    jobtitle = models.CharField(max_length=100)
    jobdescription = models.CharField(max_length=200)
    date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.firstname+ " " + self.jobtitle


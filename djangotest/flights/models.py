from django.db import models

# Create your models here.

class Airport(models.Model):
    code = models.CharField(max_length = 3)
    city = models.CharField(max_length = 64)

    def __str__(self):
        return f"{self.code} and {self. bcity}"
    
class Flight(models.Model):
    origin = models.CharField(max_length = 64)
    destination = models.CharField(max_length = 64)
    duration = models.IntegerField()


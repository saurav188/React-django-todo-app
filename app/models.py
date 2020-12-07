from django.db import models

# Create your models here.
class task(models.Model):
    title = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title
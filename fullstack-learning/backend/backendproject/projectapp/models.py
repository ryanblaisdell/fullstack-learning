from django.db import models

# Create your models here.

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
    
class Exercises(models.Model):
    name = models.CharField(max_length=100)
    muscleGroup = models.CharField(max_length=100)
    difficulty_level = models.CharField(max_length=50, choices=[('Novice', 'Novice'), ('Intermediate', 'Intermediate'), ('Expert', 'Expert')])
    equipment_needed = models.CharField(max_length=200, blank=True)
    instructions = models.TextField()

    def __str__(self):
        return self.name
from django.db import models
from django.contrib.auth.models import User

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
    instructions = models.TextField()

    def __str__(self):
        return self.name
    
class Subscribers(User):
    def __str__(self):
        return self.username
    
class WorkoutPlans(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    exercises = models.ManyToManyField(Exercises)

    def __str__(self):
        return self.name
    
class UserWorkoutPlans(models.Model):
    user = models.ForeignKey(Subscribers, on_delete=models.CASCADE)
    workout_plan = models.ForeignKey(WorkoutPlans, on_delete=models.CASCADE)
    date_registered = models.DateField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username + ' - ' + self.workout_plan.name
    
    def completed(self):
        return self.completed
    
    def in_progress(self):
        return not self.completed
    
# make a class that links the exercises to the items
class EquipedWorkouts(models.Model):
    exercise = models.ForeignKey(Exercises, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    description = models.TextField()
    
    def __str__(self):
        return self.exercise.name + ' - ' + self
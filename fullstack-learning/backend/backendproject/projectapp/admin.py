from django.contrib import admin
from .models import Item, Exercises, Subscribers, WorkoutPlans, UserWorkoutPlans, EquipedWorkouts

# Register your models here.
admin.site.register(Item)
admin.site.register(Exercises)
admin.site.register(Subscribers)
admin.site.register(WorkoutPlans)
admin.site.register(UserWorkoutPlans)
admin.site.register(EquipedWorkouts)
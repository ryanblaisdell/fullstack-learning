from rest_framework import viewsets
from .models import Item, Exercises
from .serializers import ItemSerializer, ExercisesSerializer

# Create your views here.
class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ExercisesViewSet(viewsets.ModelViewSet):
    queryset = Exercises.objects.all()
    serializer_class = ExercisesSerializer
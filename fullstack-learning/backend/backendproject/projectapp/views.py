from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Item, Exercises
from .serializers import ItemSerializer, ExercisesSerializer

# Create your views here.
class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ExercisesViewSet(viewsets.ModelViewSet):
    queryset = Exercises.objects.all()
    serializer_class = ExercisesSerializer

class SearchView(APIView):
    def get(self, request, *args, **kwargs):
        query = request.query_params.get('query', None)
        if query:
            items = Item.objects.filter(name__icontains=query)
            exercises = Exercises.objects.filter(name__icontains=query)
            
            item_serializer = ItemSerializer(items, many=True)
            exercises_serializer = ExercisesSerializer(exercises, many=True)
            
            return Response({
                'items': item_serializer.data,
                'exercises': exercises_serializer.data
            }, status=status.HTTP_200_OK)
        return Response({'error': 'Query parameter is required'}, status=status.HTTP_400_BAD_REQUEST)
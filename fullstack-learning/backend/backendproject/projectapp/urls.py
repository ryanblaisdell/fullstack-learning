from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet, ExercisesViewSet, SearchView

router = DefaultRouter()
router.register(r'items', ItemViewSet)
router.register(r'exercises', ExercisesViewSet)

# the api/ prefix is added to the urls in the registered routes
# so this would be api/items/

# the api/search/?query= endpoint will be used for searching and it will return results that match the non empty query from both tables
urlpatterns = [
    path('', include(router.urls)),
    path('search/', SearchView.as_view(), name='search'),
]
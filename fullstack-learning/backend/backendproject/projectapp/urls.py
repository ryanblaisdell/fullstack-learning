from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet

router = DefaultRouter()
router.register(r'items', ItemViewSet)

# the api/ prefix is added to the urls in the registered routes
# so this would be api/items/
urlpatterns = [
    path('', include(router.urls)),
]
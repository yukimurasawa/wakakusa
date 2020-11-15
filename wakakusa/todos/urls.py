from django.urls import path
from . import views
from rest_framework import routers
from .views import ListTodo, DetailTodo

router = routers.DefaultRouter()
router.register(r'todos', ListTodo)
urlpatterns = [
    path('', views.index , name="index"),
    path('complete/<list_id>', views.complete, name="complete")
]
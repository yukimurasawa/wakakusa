from django.shortcuts import render, redirect
from .models import Todo
from django.views.generic import TemplateView,CreateView 
from django.urls import reverse_lazy 
from rest_framework import generics, mixins, viewsets
from .serializer import TodoSerializer
from .forms import TodoForm
from django.views import generic


def index(request):
    todos = Todo.objects.all
    return render(request, 'todos/index.html', {'todos' : todos})

def delete(request, todo_id):
    todo = Todo.objects.get(pk=todo_id)
    todo.delete()
    return redirect('todos/index.html')
    
def complete(request, todo_id):
    todo = Todo.objects.get(pk=todo_id)
    todo.completed = True
    todo.save()
    return redirect('todos/index.html')
    
class ListTodo(mixins.ListModelMixin,
                     viewsets.GenericViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class DetailTodo(generics.RetrieveAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    
class TodoCreateView(generic.CreateView):
    model = Todo
    form_class = TodoForm
    success_url = reverse_lazy('todo:list')
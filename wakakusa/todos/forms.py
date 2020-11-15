from django import forms
from .models import Todo

class TodoForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields = ["body", "completed"]
    
    # title = forms.CharField(
    #     label = 'やること')

    # completed = forms.checklist()
from django.db import models
import datetime

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=200)
    body  = models.TextField()
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField('作成日時', auto_now_add=True)
    user = models.ForeignKey(
        'auth.User',
        on_delete=models.CASCADE
    )
    
    def __str__(self):
        return self.title

    # 日付けもここで取得？
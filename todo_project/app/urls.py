from django.urls import path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/get_all_tasks/',views.show_all_task_view),
    #http://localhost:8000/api/get_all_tasks/
    path('api/get_task/<str:pk>',views.show_task_view),
    #http://localhost:8000/api/get_task/1
    path('api/create_task/',views.create_task_view),
    #http://localhost:8000/api/create_task/
    path('api/edit_task/<str:pk>',views.edit_task_view),
    #http://localhost:8000/api/edit_task/1
    path('api/delete_task/<str:pk>',views.delete_task_view),
    #http://localhost:8000/api/delete_task/1
]
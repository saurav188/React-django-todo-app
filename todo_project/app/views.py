from django.shortcuts import render
from .models import task
from .serializer import TaskSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def show_all_task_view(request):
    tasks=task.objects.all()
    serializer = TaskSerializer(tasks, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def show_task_view(request,pk):
    tasks=task.objects.get(id=pk)
    serializer = TaskSerializer(tasks, many=False)

    return Response(serializer.data)

@api_view(['POST'])
def create_task_view(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

@api_view(['PUT'])
def edit_task_view(request,pk):
    tasks=task.objects.get(id=pk)
    serializer = TaskSerializer(data=request.data,instance=tasks)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)
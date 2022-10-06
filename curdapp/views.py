from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import tasksheduler
from rest_framework.response import Response
import json


def index(request):
    return render(request,'index.html')

@csrf_exempt
def addtask(request):
    if request.method == "POST":
        print(request.POST)
        data = tasksheduler.objects.create(firstname = request.POST['firstname'],lastname = request.POST['lastname'],
         email = request.POST['email'],phonenumber = request.POST['phonenumber'],jobtitle= request.POST['jobtitle'],jobdescription=request.POST['jobdesc'],
         date = request.POST['jobdate'])
        data.save()
        return JsonResponse({'msg':'added'})
    else:
        return JsonResponse({'msg':'failed'})

def mytask(request):
    data = tasksheduler.objects.all()
    print(data)
    return JsonResponse({'msg':'failed','mytask':data})



  


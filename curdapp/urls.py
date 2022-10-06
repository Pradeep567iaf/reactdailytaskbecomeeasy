from django.contrib import admin
from django.urls import path,include
from .views import *

 
urlpatterns = [
  
    path('',index,name="index"),
    path('submittask/',addtask,name="addtask"),
    path('alltask/',mytask,name="mytask"),
]

from . import views
from django.urls import path


urlpatterns = [
    path("", views.index, name = "index"),
    # path("demo", views.render, name = "render"),
    path("<str:doggy>", views.greet, name="greet"),

]
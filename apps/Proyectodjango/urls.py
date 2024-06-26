from django.urls import path
from . import views

urlpatterns = [ 
    path('',views.cargarProyecto),
    path('registro',views.cargarProyecto2),
    path('editar/<sku>',views.cargarProyecto3),
    path('editarprod',views.editarProducto),
    path('guardar',views.cargarProyecto4),
    path('guardarprod',views.agregarProducto),
    path('principal',views.cargarProyecto5),
    path('eliminarProducto/<sku>',views.eliminarProducto),
    path('guardaruser',views.agregarUsuario)
]
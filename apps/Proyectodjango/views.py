from django.shortcuts import render, redirect
from .models import *
import os
from django.conf import settings
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages


# Create your views here.
#trabaja con tabla de producto y categortias
def cargarProyecto5(request):
    productos = Producto.objects.filter(stock__gt=0)
    producto_plantas = Producto.objects.filter(categoria_id=1, stock__gt=0)
    producto_macetero = Producto.objects.filter(categoria_id=2, stock__gt=0)
    producto_fertiliza = Producto.objects.filter(categoria_id=3, stock__gt=0)
    return render(request,"principal.html",{"prod" : productos, "prod_plan":producto_plantas, "prod_mace":producto_macetero, 
                                        "prod_fer":producto_fertiliza})

def cargarProyecto2(request):
    return render(request,"registro.html")


#trae el sku para traer todos los datos del producto
def cargarProyecto3(request,sku):
    producto = Producto.objects.get(sku = sku)
    categorias = Categoria.objects.all()
    return render(request,"editar.html",{"prod":producto,"cate":categorias})



#trabaja con tabla de producto y categortias
def cargarProyecto4(request):
    categorias = Categoria.objects.all()
    productos = Producto.objects.all()

    return render(request, "guardar.html",{"cate":categorias,"prod":productos})




def cargarProyecto(request):
    return render(request,"login.html")




#funciones para agregar productos, esto va en el action
def agregarProducto(request):
    #print("AGREGANDO PRODUCTOS A LA BBDD",request.POST)
    v_sku = request.POST['txtSku']
    v_precio = request.POST['txtPrecio']
    v_nombre = request.POST['txtNombre']
    v_imagen = request.FILES['txtImagen']
    v_descripcion = request.POST['txtDescripcion']
    v_stock = request.POST['txtStock']

    v_categoria = Categoria.objects.get(id_categoria = request.POST['cmbCategoria'])

    Producto.objects.create(sku = v_sku, precio = v_precio, nombre = v_nombre,imagen = v_imagen,descripcion = v_descripcion,stock = v_stock, categoria_id = v_categoria)


    return redirect('/guardar')


#funcion para editar productos , esto va en el action
def editarProducto(request):
    v_sku = request.POST['txtSku']
    productoBD = Producto.objects.get(sku = v_sku)
    v_precio = request.POST['txtPrecio']
    v_nombre = request.POST['txtNombre']
    v_descripcion = request.POST['txtDescripcion']
    v_stock = request.POST['txtStock']
    v_categoria = Categoria.objects.get(id_categoria = request.POST['cmbCategoria'])

    try:
        v_imagen = request.FILES['txtImagen']   
        ruta_img = os.path.join(settings.MEDIA_ROOT,str(productoBD.imagen))
        os.remove(ruta_img)

    except:
        v_imagen = productoBD.imagen

    productoBD.nombre = v_nombre
    productoBD.precio = v_precio
    productoBD.imagen = v_imagen
    productoBD.descripcion = v_descripcion
    productoBD.stock = v_stock
    productoBD.categoria_id = v_categoria
    

    productoBD.save()

    return redirect('/guardar')


#funcion a eliminar que va en el action
def eliminarProducto(request,sku):
    producto = Producto.objects.get(sku = sku)
    ruta_img = os.path.join(settings.MEDIA_ROOT,str(producto.imagen))
    os.remove(ruta_img)
    producto.delete()

    return redirect('/guardar')


#funcion para agregar usuario
def agregarUsuario(request):
    #print("AGREGANDO PRODUCTOS A LA BBDD",request.POST)
    v_nombre_usuario = request.POST['nombreUsuario']
    v_nombre = request.POST['nombre']
    v_correo= request.POST['correo']
    v_contra = request.POST['contra']
    v_numero = request.POST['numeros']


    Producto.objects.create(usuario = v_nombre_usuario , nombre = v_nombre , correo = v_correo,contrasenia = v_contra, numFono = v_numero )


    return redirect('/registo')





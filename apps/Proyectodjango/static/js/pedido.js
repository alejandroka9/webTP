const carro  = new Carrito();
const carrito  = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');


cargarEventos();

function cargarEventos() {
    //comprar producto
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});
      //eliminar producto
    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)}); 
     //vaciar carrito
    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});
    document.addEventListener('DOMContentLoaded',carro.leerLocalStorage());
}
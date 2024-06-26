//validacion formulario de agregar producto con jquerry
$(function(){
    $("#formAgregarproducto").validate({
        rules:{
          
            txtNombre:{
                required:true,
                minlength:12
            },
            txtPrecio:{
                required:true,
                minlength:6
            },
            txtDescripcion:{
                required:true,
                minlength:50
            },
            txtStock:{
                required:true,
                minlength:4
            }
        },
        messages:{
         
            txtNombre:{
                required:"El Nombre es un campo obligatorio.",
                minlength: "El minimo de caracteres es 10."
            },
            txtPrecio:{
                required: "El Valor es un campo obligatorio.",
                minlength: "El minimo de caracteres es 6."
            },
            txtDescripcion:{
                
                required: "La Descripcion es un campo obligatorio.",
                minlength: "El minimo de caracteres es 50."
            },
            txtStock:{
                
                required: "El Stock es un campo obligatorio.",
                minlength: "El minimo de caracteres es 4."
            }
        }
    })
})

//añadir clase con js a agregar 
var letritas = document.getElementsByTagName("small");

for (var i = 0; i < letritas.length; i++) {
  letritas[i].classList.add("textito");
}


//constante par subir producto
const formulario = document.getElementById("formAgregarproducto");


formulario.addEventListener('submit',function(evento){
    evento.preventDefault();

    if (document.getElementById("txtSku").value.length == 0) {
        alert("Debe ingresar un codigo de producto.");
    }else{
        this.submit();
    }

})
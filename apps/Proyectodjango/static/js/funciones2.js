// jquerry que permite que el boton aparezca cuando los campos esten rellenos 
$(document).ready(function() {
  // Asignar evento de cambio a los campos de entrada
  $('#usuario, #contraseña').on('input', function() {
    var campo1 = $('usuario').val();
    var campo2 = $('#contraseña').val();

    if (campo1 !== '' && campo2 !== '') {
      $('#submitt').show();
    } else {
      $('#submitt').hide();
    }
  });

  // Evitar la acción por defecto del botón
  $('#submitt').on('click', function(e) {
    e.preventDefault();
    // Aquí puedes realizar otras acciones si es necesario
  });
});

//validacion en editar plantas
document.getElementById("valsku").style.display = "none";
document.getElementById("valnombre").style.display = "none";
document.getElementById("valvalor").style.display = "none";
document.getElementById("valstock").style.display = "none";
document.getElementById("valdescripcion").style.display = "none";


function validarFormulario(){
  let sku = document.getElementById("txtSku").value;
  let nombre = document.getElementById("txtNombre").value;
  let valor = document.getElementById("txtPrecio").value;
  let fecha = document.getElementById("txtStock").value;
  let descripcion = document.getElementById("txtDescripcion").value;

  if (sku.length == 0) {
      document.getElementById("valsku").style.display = "inline";
      document.getElementById("txtSku").classList.add("is-invalid");
  }else{
      document.getElementById("txtSku").classList.remove("is-invalid");
      document.getElementById("txtSku").classList.add("is-valid");
      document.getElementById("valsku").style.display = "none";
  }


  if (nombre.length == 0) {
      document.getElementById("valnombre").style.display = "inline";
      document.getElementById("txtNombre").classList.add("is-invalid");
  }else{
      document.getElementById("txtNombre").classList.remove("is-invalid");
      document.getElementById("txtNombre").classList.add("is-valid");
      document.getElementById("valnombre").style.display = "none";
  }
  
  if (valor.length == 0) {
      document.getElementById("valvalor").style.display = "inline";
      document.getElementById("txtPrecio").classList.add("is-invalid");
  }else{
      document.getElementById("txtPrecio").classList.remove("is-invalid");
      document.getElementById("txtPrecio").classList.add("is-valid");
      document.getElementById("valvalor").style.display = "none";
  }

  if (fecha.length == 0) {
    document.getElementById("valstock").style.display = "inline";
    document.getElementById("txtStock").classList.add("is-invalid");
}else{
    document.getElementById("txtStock").classList.remove("is-invalid");
    document.getElementById("txtStock").classList.add("is-valid");
    document.getElementById("valstock").style.display = "none";
}


  if (descripcion.length == 0) {
      document.getElementById("valdescripcion").style.display = "inline";
      document.getElementById("txtDescripcion").classList.add("is-invalid");
  }else{
      document.getElementById("txtDescripcion").classList.remove("is-invalid");
      document.getElementById("txtDescripcion").classList.add("is-valid");
      document.getElementById("valdescripcion").style.display = "none";
  }

}



//añadir clase con js a editar
var letritas = document.getElementsByTagName("small");

for (var i = 0; i < letritas.length; i++) {
letritas[i].classList.add("textito");
}

//añadir clase con js a agregar
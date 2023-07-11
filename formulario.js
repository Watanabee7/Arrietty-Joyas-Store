function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    var cuerpoMensaje = "Nombre: " + nombre + "\nEmail: " + email + "\nMensaje: " + mensaje;
    var link = "https://mail.google.com/mail/?view=cm&to=arriettystore@gmail.com&su=Nuevo%20mensaje&body=" + encodeURIComponent(cuerpoMensaje);
  
    window.open(link, "_blank");
  }
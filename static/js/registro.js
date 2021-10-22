function validar()
{
    var usuarioInput = document.formularioRegistro.usuario;
    var claveInput = document.formularioRegistro.clave;
    var correoInput = document.formularioRegistro.correo;
    var confirmCorreoInput = document.formularioRegistro.comprobar_correo;

    var formato_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    var swErrores=false;

    console.log(nombreUsuario.value + "-"+claveInput.value);



    if(usuarioInput.value.length == 0 || usuarioInput.value.length < 8)
    {
        //alert("El nombre de usuario debe tener mínimo 8 caracteres.");
        document.getElementById("errorusuario").innerHTML="El nombre de usuario debe tener mínimo 8 caracteres.";
        usuarioInput.focus();
        swErrores=true;
    }

    if(claveInput.value.length == 0 || claveInput.value.length < 8)
    {
        //alert("La clave debe tener mínimo 8 caracteres.");
        document.getElementById("errorClave").innerHTML="La clave debe tener mínimo 8 caracteres.";
        claveInput.focus();
        swErrores=true;
    }

    if(!correoInput.value.match(formato_email))
    {
        //alert("Por favor escriba un correo válido.");
        document.getElementById("errorMail").innerHTML="Por favor escriba un correo válido.";
        correoInput.focus();
        swErrores=true;
    }

    if(confirmCorreoInput.value != correoInput.value)
    {
        //alert("Por favor escriba un correo válido.");
        document.getElementById("errorMail").innerHTML="Los correos electrónicos no coinciden, por favor verifique.";
        confirmCorreoInput.focus();
        swErrores=true;
    }


    if( swErrores==true)
    {
        return false;
    }
    else{
        return true;
    }


    

}

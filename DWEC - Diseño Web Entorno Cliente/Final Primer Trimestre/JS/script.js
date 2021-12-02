function initRegistro(){
    var l = localStorage;
    //evento guardar usuario
    document.getElementById("bRegistro").addEventListener("click",function(evento){
        //obtener campos
        var nombre = document.getElementById("nUnombre").value;
        var pass = document.getElementById("nUpass").value;
        var email = document.getElementById("nUemail").value;
        var casillaError = document.getElementById("errorRegistro");
        //casillaError.innerHTML="";
        var validar=true;

        //comprobar nombre
        /*if(nombre ==""){
            validar = false;
            casillaError.insertAdjacentHTML("beforeend",
            "ERROR: El campo nombre no puede estar vacio<br/>");
    
    
        }else{
            
        }*/

        alert("funciona");
        //comprobar contraseña

        //comprobar email

        var expEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(expEmail.test(email)){
         }else{
             validar = false;
             casillaError.insertAdjacentHTML("beforeend",
             "ERROR: El email es incorrecto<br/>");
         }
        if(validar){
            //guardar usuario
            evento.preventDefault();
            returnToPreviousPage();
     
        }else{
            evento.preventDefault();
            returnToPreviousPage();
        }

    })
}
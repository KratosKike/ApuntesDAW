function initRegistro(){
    var l = localStorage;
    //evento guardar usuario


    document.getElementById("nUnombre").addEventListener("mouseout", validarNombre());
    document.getElementById("nUpass").addEventListener("mouseout", validarPass());
    document.getElementById("nUemail").addEventListener("mouseout", validarEmail());

    function validarNombre(){
        var nombre = document.getElementById("nUnombre").value;
        var casillaError = document.getElementById("errorRegistro");
        if(nombre ==""){
            casillaError.insertAdjacentHTML("beforeend",
            "ERROR: El campo nombre no puede estar vacio<br/>");
            return false;
        }else{
            return true;
        }
    }
    function validarPass(){
        var pass = document.getElementById("nUpass").value;
        var casillaError = document.getElementById("errorRegistro");
        if(pass ==""){
            casillaError.insertAdjacentHTML("beforeend",
            "ERROR: El campo contraseña no puede estar vacio<br/>");
            return false;
        }else{
            return true;
        }
    }
    function validarEmail(){
        var email = document.getElementById("nUemail").value;
        var casillaError = document.getElementById("errorRegistro");
        var expEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(expEmail.test(email)){
            return true;
         }else{
             casillaError.insertAdjacentHTML("beforeend",
             "ERROR: El email es incorrecto<br/>");
             return false;
         }
    }

    document.getElementById("bRegistro").addEventListener("click",function(evento){


        alert("funciona");

        
        if(validarNombre()&&validarEmail()&&validarPass()){
            //guardar usuario
     
        }else{
            evento.preventDefault();
            returnToPreviousPage();
        }

    })
}
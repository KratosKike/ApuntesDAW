//comprobar que haya sesion
//


function initRegistro(){

    function Usuario(id,user,pass,email){
        this.id=id;
        this.user = user;
        this.pass = pass;
        this.email = email;
    }

    var arrayUsuarios=[];

    var usuario = new Usuario(0,"kike","123","kratoskike@gmail.com");
    arrayUsuarios.push(usuario);

    localStorage.setItem(usuario.id, JSON.stringify(usuario));


    var l = localStorage;
 
    document.getElementById("bRegistro").addEventListener("click",function(evento){

        var validar = true;
        var nombre = document.getElementById("nUnombre").value;
        var pass = document.getElementById("nUpass").value;
        var email = document.getElementById("nUemail").value;
        var casillaError = document.getElementById("errorRegistro");
        casillaError.innerHTML="";
        //alert(casillaError);

        if(nombre ==""){
            casillaError.insertAdjacentHTML("beforeend",
            "ERROR: El campo nombre no puede estar vacio<br/>");
            validar = false;
            //alert("ERROR: El campo nombre no puede estar vacio");
        }else{
            //return true;
        }

        if(pass ==""){
            casillaError.insertAdjacentHTML("beforeend",
            "ERROR: El campo nombre no puede estar vacio<br/>");
            validar = false;
            //alert("ERROR: El campo nombre no puede estar vacio");
        }else{
            //return true;
        }
        var expEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(expEmail.test(email)){

         }else{
             casillaError.insertAdjacentHTML("beforeend",
             "ERROR: El email es incorrecto<br/>");
             //alert("ERROR: El email es incorrecto");
             validar = false;
         }



        //alert("funciona");

        
        if(validar){
            //guardar usuario
            //alert("hola");
            //obtener array usuarios
            
            var usuario={"id":arrayUsuarios.length,"user":nombre,"pass":pass,"email":email}
            localStorage.setItem(arrayUsuarios.length, JSON.stringify(usuario));
            
     
        }else{
            evento.preventDefault();
            returnToPreviousPage();
        }

    },false)
}


//iniciar sesion

function inicitIniciar(){
    alert("hola");
    document.getElementById("iniciarSes").addEventListener("click",function(){

        alert("hola");

        //obtener array de usuarios
        var arrayBusqueda=[];

        var lsLong= localStorage.length;
        alert(lsLong);


    
    
    },false);
}


function initRegistro(){

    
    arrayUsuarios=[];

    id=0;


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
            
            var usuario={"id":"0","user":nombre,"pass":pass,"email":email}
            localStorage.setItem("user0", JSON.stringify(usuario));
     
        }else{
            evento.preventDefault();
            returnToPreviousPage();
        }

    },false)
}
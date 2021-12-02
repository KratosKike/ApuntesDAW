//iniciar sesion

function inicitIniciar(){

    function Usuario(id,user,pass,email){
        this.id=id;
        this.user = user;
        this.pass = pass;
        this.email = email;
    }
    document.getElementById("iniciarSes").addEventListener("click",function(evento){
        debugger;

        var casillaError = document.getElementById("errorRegistro");
        casillaError.innerHTML="";

        //obtener array de usuarios
        var arrayBusqueda=[];

        var lsLong= localStorage.length;
        //alert(lsLong);

        for(var cont=0;cont<lsLong;cont++){
            var usuario = JSON.parse(localStorage.getItem(cont))
            arrayBusqueda.push(usuario);
        }
        
        //comparamos array de usuarios con los datos recibidos
        var usuarioIS=document.getElementById("iUnombre").value;
        var passIS=document.getElementById("iUpass").value;
        var valid = false;
        
        //comprobar con array de usuarios
        for(var cont=0;cont<lsLong;cont++){
            //comparar usuarios
            
            if(arrayBusqueda[cont].user == usuarioIS){
                
                //hay coincidencia
                if(arrayBusqueda[cont].pass == passIS){
                    //inicia sesion
                    valid=true;
                    var sesion = usuarioIS;
                }
            }
            //alert(arrayBusqueda[cont].user);
        }

        if(valid){
            //iniciar sesion
            alert("has iniciado sesion");
            sessionStorage.setItem("sesion",sesion);
        }else{
            casillaError.insertAdjacentHTML("beforeend",
            "Datos Incorrectos<br/>");
            evento.preventDefault();
            returnToPreviousPage();
        }

    
    
    },false);
}
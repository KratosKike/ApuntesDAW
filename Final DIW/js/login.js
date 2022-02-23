$(document).ready(function(){
    (function () {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }else{
                  debugger;
                   //comprobar ususario
                    var email = $("#InputEmail2").val();
                    var pass = $("#InputPassword2").val();
                    //obtener array de usuarios
                    var arrayBusqueda=[];
                    var lsLong= localStorage.length;
                    for(var cont=0;cont<lsLong;cont++){
                        var usuario = JSON.parse(localStorage.getItem(cont))
                        arrayBusqueda.push(usuario);
                    }
                    //comparamos array de usuarios con los datos recibidos
                    //alert("hola");
                    var valid = false;
                    //comprobar con array de usuarios
                    for(var cont=0;cont<lsLong;cont++){
                        //comparar usuarios
                        
                        if(arrayBusqueda[cont].email == email){
                            
                            //hay coincidencia
                            if(arrayBusqueda[cont].pass == pass){
                                //inicia sesion
                                valid=true;
                                var sesion = email;
                            }
                        }
                        //alert(arrayBusqueda[cont].user);
                    }
                    if(valid){
                        //iniciar sesion
                        alert("has iniciado sesion");
                        sessionStorage.setItem("sesion",sesion);
                    }else{
                        alert("datos incorrectos");
                        event.preventDefault();
                        event.stopPropagation()
                    }
                  
              }
      
              form.classList.add('was-validated')
            }, false)
          })
      })()

})
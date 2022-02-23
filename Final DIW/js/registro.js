 
 /*
 //funcion para registro usuarios
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
*/
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
                    //introducir guardar en bd
                    var nombre = $("#InputUser1").val();
                    var email = $("#InputEmail1").val();
                    var pass = $("#InputPassword1").val();
                    //Guardamos en sesion
                    var usuario={"id":localStorage.length,"user":nombre,"pass":pass,"email":email}
                    localStorage.setItem(localStorage.length, JSON.stringify(usuario));
                    alert("Usuario creado");
                    //$("#myToast").toast("show");
                  
              }
      
              form.classList.add('was-validated')
            }, false)
          })
      })()



    
   /* var arrayUsuarios=[];
    $("#registro").click(function(evento){

        var validar = true;
        var nombre = $("#InputUser1").val();
        var pass = $("InputPassword1").val();
        var email = $("InputEmail1").val();
        //alert(nombre);

        var expEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(expEmail.test(email)){

         }else{
             validar = false;
         }


        if(validar){
            var usuario={"id":arrayUsuarios.length,"user":nombre,"pass":pass,"email":email}
            localStorage.setItem(arrayUsuarios.length, JSON.stringify(usuario));
        
        }else{
            evento.preventDefault();
            returnToPreviousPage();
        }
    })*/
})


$(document).ready(function(){
    function Usuario(id,user,pass,email){
        this.id=id;
        this.user = user;
        this.pass = pass;
        this.email = email;
    }var arrayUsuarios=[];
    //creacion primer user
    var usuario = new Usuario(0,"kike","123","kratoskike@gmail.com");
    arrayUsuarios.push(usuario);

    localStorage.setItem(usuario.id, JSON.stringify(usuario));
    //funcion para generar tooltip de imagenes
    function generarTooltip(numero){
        $('[data-toggle='+numero+']').tooltip({
            placement: 'right',
            title: '<img src="/Final DIW/img/cartas/'+numero+'.png">',
            animation: true,
            delay:{show:300, hide:500},
            html:true
          });
    }


    for(var cont=1;cont<100;cont++){
        generarTooltip(cont);
    }

    //comprobar inicio de sesion
    var haySesion = sessionStorage.length;
    if(haySesion==2){
        //ocultar botones
        $("#botones").hide();
        //mostrar cerrar sesion
        $("#loginUser").show();
        //mostrar correo
        var nombre = sessionStorage.getItem("sesion")
        $("#usuario").append("Cuenta: "+nombre);

    }

    $("#cerrarsesion").click(function(){
        //borrar sesionstorage
        sessionStorage.removeItem("sesion");
        //actualizar pagina
        location.reload();
    })

 

})



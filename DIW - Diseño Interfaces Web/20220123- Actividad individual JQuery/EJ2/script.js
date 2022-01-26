$(document).ready(function(){

    var contadorGatos=0;



    $(".insertar").click(function(boton){
        //obtener timeStamp
        var timeSta = boton.timeStamp;
        //creamos elemento foto
        var foto = $("<td><img src='https://loremflickr.com/200/200?+"+timeSta+"'></td>" )
        //creamos numero de filas
        var filas = $("#fotos tr").length;
        //comprobamos los casos de filas para crear una nueva
        if(filas==0 || contadorGatos%7==0){
            $("#fotos").append("<tr></tr>");
        }
        //metemos el td con la foto
        $("#fotos tr").last().append(foto);
        //aplicamos display none para luego añadirse aplicando el fadein
        foto.css("display","none");
        $(foto).fadeIn(1000);
        //sumamos al contador de gatos
        contadorGatos++;
    });
    $(".eliminar").click(function(){
        
        $("#fotos tr td").last().fadeOut(1000,function(){
            $("#fotos tr td").last().remove();
            if($("fotos tr").last().children()==0){
                $("fotos tr").last().remove();
            }
            
        });
        contadorGatos--;
    });

});

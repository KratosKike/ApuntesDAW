$(document).ready(function(){
    //aplicar efecto cuando se pasa el raton por las lineas
    $(".linea").hover(function(){
        //cambiar texto a blanco
        //$(this).hide();
        //alert("hola");
        $(this).addClass("blanco");
    },
    function(){
        //quitar texto en blanco
        $(this).removeClass("blanco");
    });
});
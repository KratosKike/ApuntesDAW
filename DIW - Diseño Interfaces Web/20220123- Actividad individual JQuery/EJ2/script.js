$(document).ready(function(){

    $(".insertar").click(function(){
        insertarImagen()
    });
    $(".eliminar").click(function(){
        eliminarImagen()
    });

});

function insertarImagen(){
    $("#fotos").append("<img src='https://loremflickr.com/200/200' alt=''>");
}

function eliminarImagen(){
    alert("hola");
}

var segundos = prompt("Introduce numero de segundos que ha de contar");

var milisegundos = segundos*1000;
//alert(milisegundos);

var espera = document.getElementById("espera");
var agotado = document.getElementById("agotado");

setTimeout(function cambioVentana(){
    //alert("Boom");
    //cambiar fondo a rojo
    document.body.style.background = "red";

    //ocultar esperando
    
    //alert(espera);
    espera.style.display = "none";
    //mostrar tiempo agotado
    agotado.style.display= "block";

},milisegundos);




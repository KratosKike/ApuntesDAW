//alert("hola");
function init(){
    
    var haySesion = sessionStorage.length;
//alert(haySesion);

var divInit = document.getElementById("divregistro");

    if(haySesion==2){
        
        //cambiar el iniciar sesion/registro con bienvenido x

        
        //alert(divInit);
        divInit.style.visibility = "hidden";
        //mostrar el bienvenido
        var divSes = document.getElementById("divsesion");
        divSes.style.visibility="visible";
        //alert(divSes);
        var nombre = sessionStorage.getItem("sesion")
        //alert(nombre);
        divSes.insertAdjacentHTML("beforeend",
        "Bienvenido "+nombre);
        
    }else{
        divInit.style.visibility = "visible";
    }
    //.sessionStorage.getItem("sesion")

}

function cerrarSesion(){
    //borrar sesionstorage
    sessionStorage.removeItem("sesion");
    //actualizar pagina
    location.reload();
}

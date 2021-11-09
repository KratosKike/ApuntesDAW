function calculoSubasta(){
    var sSubasta = document.getElementById("subasta").value;
    var div = document.getElementById("solucion");

    //crear array de subastas

    var arraySubastas = sSubasta.split(";");

    //mostar tabla con cadena dada

    for (let i = 0; i <arraySubastas.length-1; i++) {
        div.insertAdjacentHTML("beforeend","</br>Subasta: "+arraySubastas[i]);

    }



}
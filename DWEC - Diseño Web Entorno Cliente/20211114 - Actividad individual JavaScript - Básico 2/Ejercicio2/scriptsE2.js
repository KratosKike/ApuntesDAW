function calculoReverso(){
    //obtenemos cadena
    var sCadena = document.getElementById("cadena").value;
    //declaramos la solucion
    var sCadenaSolucion = "";
    //realizamos un for inverso recorriendo la cadena al reves
    //añadiendola a la nueva solucion

    //alert(sCadena.length);

    for(i=sCadena.length-1;i>=0;i--){
        sCadenaSolucion=sCadenaSolucion+sCadena[i];
    }
    //obtenemos elemento de la solucion y la imprimimos

    var solucion = document.getElementById("sol");
    solucion.innerHTML = sCadenaSolucion;
    //solucion.insertAdjacentHTML("beforebegin",sCadenaSolucion);
}
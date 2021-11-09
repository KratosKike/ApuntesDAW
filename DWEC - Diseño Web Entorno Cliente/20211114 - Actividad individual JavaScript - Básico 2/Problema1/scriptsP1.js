function calculoSubasta(){
    var sSubasta = document.getElementById("subasta").value;
    var div = document.getElementById("solucion");

    //crear array de subastas

    var arraySubastas = sSubasta.split(";");

    //mostar tabla con cadena dada

    div.insertAdjacentHTML("beforeend","<div><table><tr><th>Pujador</th><th>Cantidad</th></tr>");

    for (let i = 0; i <arraySubastas.length; i++) {

        //partir array
        var tupla = arraySubastas[i].split(',');
        div.insertAdjacentHTML("beforeend","<tr><td>"+tupla[0]+"</td> <td>"+tupla[1]+"</td></tr>");
        //div.insertAdjacentHTML("beforeend","</br>Subasta: "+arraySubastas[i]);

    }

    div.insertAdjacentHTML("beforeend","</table></div>");


}
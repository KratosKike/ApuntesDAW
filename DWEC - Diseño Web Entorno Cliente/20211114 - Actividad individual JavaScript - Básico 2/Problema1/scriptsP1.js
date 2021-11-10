function calculoSubasta(){
    var sSubasta = document.getElementById("subasta").value;
    var div = document.getElementById("solucion");
    var divN = document.getElementById("solucionNombre");

    //crear array de subastas

    var arraySubastas = sSubasta.split(";");

    //mostar tabla con cadena dada

    var tabla = ""
    tabla = tabla+"<div><table><tr><th>Pujador</th><th>Cantidad</th></tr>"

    //div.insertAdjacentHTML("beforeend","<div><table><tr><th>Pujador</th><th>Cantidad</th></tr>");
    var linea = "";
    for (let i = 0; i <arraySubastas.length-1; i++) {

        //partir array
        var tupla = arraySubastas[i].split(',');
        tabla = tabla+"<tr><td>"+tupla[0]+"</td> <td>"+tupla[1]+"</td></tr>";
        
    }


    var arrayNombre = arraySubastas.sort();

    arrayNombre.forEach(function(element) {
        console.log(element);
      });

    var tabla2 = ""
    tabla2 = tabla2+"<div><table><tr><th>Pujador</th><th>Cantidad</th></tr>"
    for (let i2 = 1; i2 <arrayNombre.length; i2++) {

        //partir array
        //alert(tabla2);
        var tupla2 = arrayNombre[i2].split(',');
        tabla2 = tabla2+"<tr><td>"+tupla2[0]+"</td> <td>"+tupla2[1]+"</td></tr>";
        
    }



    div.innerHTML = tabla;

    divN.innerHTML = tabla2;

    //separar array

    

    var arrayNumerosInverso = arraySubastas.map(function(x){
        var z = x.split(",");
        return z[1]+","+z[0];
    })

    arrayNumeros = arrayNumerosInverso.sort();
    arrayNumerosBien = arrayNumerosInverso.sort(function(a,b){
        return a-b;
    });


    arrayNumerosBien.forEach(function(element) {
        console.log(element);
      });

    arrayNumerosInverso.forEach(function(element) {
        console.log(element);
      });

    


}
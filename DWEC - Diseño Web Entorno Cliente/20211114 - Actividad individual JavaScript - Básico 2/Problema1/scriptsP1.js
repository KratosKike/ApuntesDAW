function calculoSubasta(){
    var sSubasta = document.getElementById("subasta").value;
    var div = document.getElementById("solucion");
    var divN = document.getElementById("solucionNombre");
    var divNum = document.getElementById("solucionNumero");

    //crear array de subastas

    //var arraySubastas = sSubasta.split(";");


    var arraySubastasDoble = sSubasta.split(";");
    for (let cont=0;cont<arraySubastasDoble.length;cont++){
        arraySubastasDoble[cont]=arraySubastasDoble[cont].split(",");
    }

    //mostar tabla con cadena dada




    var tabla = ""
    tabla = tabla+"<div><table><tr><th>Pujador</th><th>Cantidad</th></tr>"


    for(let cont=0;cont < arraySubastasDoble.length-1;cont++){
        tabla = tabla+"<tr><td>"+arraySubastasDoble[cont][0]+"</td> <td>"+arraySubastasDoble[cont][1]+"</td></tr>";
    }


    //div.insertAdjacentHTML("beforeend","<div><table><tr><th>Pujador</th><th>Cantidad</th></tr>");
   /* var linea = "";
    for (let i = 0; i <arraySubastas.length-1; i++) {

        //partir array
        var tupla = arraySubastas[i].split(',');
        tabla = tabla+"<tr><td>"+tupla[0]+"</td> <td>"+tupla[1]+"</td></tr>";
        
    }*/



    var arrayNombreDoble = arraySubastasDoble.sort();

    var tabla2 = ""
    tabla2 = tabla2+"<div><table><tr><th>Pujador</th><th>Cantidad</th></tr>"
    
    for(let cont=1;cont < arrayNombreDoble.length;cont++){
        tabla2 = tabla2+"<tr><td>"+arrayNombreDoble[cont][0]+"</td> <td>"+arrayNombreDoble[cont][1]+"</td></tr>";
    }
/*
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
        
    }*/



    div.innerHTML = tabla;

    divN.innerHTML = tabla2;

    //separar array

    var arrayNumerosDoble = arraySubastasDoble.sort(function(a,b){
        //return (b.valor - a.valor)
        return a[1]-b[1];
    })

    var tabla3 = ""
    tabla3 = tabla3+"<div><table><tr><th>Cantidad</th><th>Pujador</th></tr>"
    for(let cont = arraySubastasDoble.length-1;cont>0;cont--){
        tabla3 = tabla3+"<tr><td>"+arrayNumerosDoble[cont][1]+"</td> <td>"+arrayNumerosDoble[cont][0]+"</td></tr>";
    }
    
/*
    var arrayNumerosInverso = arraySubastas.map(function(x){
        var z = x.split(",");
        return z[1]+","+z[0];
    })

    arrayNumeros = arrayNumerosInverso.sort();*/
    /*arrayNumerosBien = arrayNumerosBien.sort(function(a,b){
        return a-b;
    });*/

    /*var tabla3 = ""
    tabla3 = tabla3+"<div><table><tr><th>Cantidad</th><th>Pujador</th></tr>"
    for (let i3 = arrayNumerosInverso.length-2; i3 >-1; i3--) {

        //partir array
        //alert(tabla2);
        var tupla3 = arrayNumeros[i3].split(',');
        tabla3 = tabla3+"<tr><td>"+tupla3[0]+"</td> <td>"+tupla3[1]+"</td></tr>";
        
    }*/


    /*arrayNumerosBien.forEach(function(element) {
        console.log(element);
      });*/

    /*arrayNumerosInverso.forEach(function(element) {
        console.log(element);
      });*/


      divNum.innerHTML = tabla3;

    


}
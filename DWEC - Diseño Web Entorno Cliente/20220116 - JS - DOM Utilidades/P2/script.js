/*
fecha actual
var hoy = new Date();

dia de la semana
var diaUno = new Date();
diaUno.setDate(1);
var diaSem = diaUno.getDay();

var contenedor = document.createElement("div");
contenedor.setAttribute("id","calendario");
var tabla = document.createElement("table");
contenedor.appendChild(tabla);
tabla.setAttibute("border","1");
var fila = tabla.insertRow(0);

introducir cabecera
var cabecera = new Array("L","M","X","J","V","S","D");
for var(i in cabecera){
    var cabeceraTabla=document.createElement("th");
    var texto= document.createTextNode(cabecera[i]);
    cabeceraTabla.appendChild(texto);
    fila.appendChild(cabeceraTabla);
}

relleno inicial
fila = tabla.insertRow(1);
for(var i=0; i<diaSem; i++){
    fila.insertCell(i);
    ...
}

*/

function imprimeCalendario(ident){
//parte del div
var contenedor = document.createElement("div");
contenedor.setAttribute("id","calendario");
//parte de la tabla
var tabla = document.createElement("table");
tabla.setAttribute("border","1");
//metemos tabla dentro de div
contenedor.appendChild(tabla);

var fila = tabla.insertRow(0);
//primera linea
var cabecera = new Array("D","L","M","X","J","V","S");
for (var i in cabecera){
    var cabeceraTabla=document.createElement("th");
    var texto= document.createTextNode(cabecera[i]);
    cabeceraTabla.appendChild(texto);
    fila.appendChild(cabeceraTabla);
}

var hoy = new Date();
var diaUno = new Date();
diaUno.setDate(1);
var diaSem = diaUno.getDay();
//alert(diaSem);

fila = tabla.insertRow(1);
for(var i=0; i<diaSem; i++){
    fila.insertCell(i);
}

//fila.insertCell(6);

//calcular numero de dias del mes
var fecha = new Date();
var diasMes = new Date(fecha.getFullYear(), fecha.getMonth(), 0).getDate();

//realizar llenada de calendario dependiendo de los dias
for(var cont=0;cont<diasMes;cont++){

}




document.body.appendChild(contenedor);
}
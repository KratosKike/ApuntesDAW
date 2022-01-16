

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
var cont =1;
//primera fila
for(var conta= diaSem;conta<7;conta++){
    var x = fila.insertCell(i);
    x.innerHTML=cont;
    cont++;
}
//creamos fila2
var a = 2;
var fila = tabla.insertRow(a);
var semana= 1;
for(cont;cont<=diasMes;cont++){
    if(semana<8){
        var x = fila.insertCell(-1);
        x.innerHTML=cont;
        semana++;
    }else{
        cont--;
        semana=1;
        a++;
        fila = tabla.insertRow(a);
    }
    
}

document.body.appendChild(contenedor);
}
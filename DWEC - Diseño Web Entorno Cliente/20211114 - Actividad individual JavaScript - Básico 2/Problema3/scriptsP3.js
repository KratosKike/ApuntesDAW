//obtener datos pulgadas
function pulgadas(){
    var pulMin = document.getElementById("minimo").value;
    var pulMax = document.getElementById("maximo").value;

    var divTabla = document.getElementById("solucion");

    //comprobar pulgadas
    if(pulMin<0){
        divTabla.innerHTML= "El minimo no puede ser 0";
    }else if(pulMin>pulMax){
        divTabla.innerHTML= "El minimo no puede ser mayor que el maximo";
    }else{
        var tabla="<div><table><tr><th>Pulgadas</th><th>Ancho(cm)</th><th>Alto(cm)</th></tr>";
        for(var i =pulMin; i<=pulMax;i++){
            //añadir cada elemento de la tabla
            tabla = tabla+"<tr><td>"+i+"</td><td>"+(i*2.21375).toFixed(3)+"</td><td>"+(i*1.245).toFixed(3)+"</td></tr>";
        }


        divTabla.innerHTML = tabla;

    }
}

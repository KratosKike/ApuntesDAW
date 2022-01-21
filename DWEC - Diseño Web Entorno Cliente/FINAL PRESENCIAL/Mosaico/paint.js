window.onload=init;

    var estado="Pausa";
    var coloreo="";
    var arraycolores="";
    var colorito = 1

function init(){

    var tablacol = document.getElementById("paleta");
    var arraytr= tablacol.getElementsByTagName("tr");
    arraycolores = arraytr[0].getElementsByTagName("td");
    
    for(var a=0;a<6;a++){

        arraycolores[a].addEventListener("click",function(){
            //obtener clase color

            selectPincel(this,this.className);
            
        });
        colorito++;
    }




    //crear tabla
    var contenedor=document.getElementById("zonadibujo");
    var tabla = document.createElement("table");
    tabla.setAttribute("class","tablerodibujo");
    tabla.setAttribute("border","1");
   for(var cont=0;cont<30;cont++){
        var fila = tabla.insertRow(cont);
        for(var cont2=0;cont2<30;cont2++){
            var x = fila.insertCell(0);
            x.addEventListener("mouseover",function(){
                pintar(this);
            },false)
        }
    }

    contenedor.appendChild(tabla);

    //texto de arriba de la talba

    var texto = document.getElementById("zonadibujo").previousElementSibling;
    texto.innerHTML="Haga CLICK en cualquier celda para activar/desactivar el Pincel";

    //añadir funcion a los 5 botones de colores

    habilitarTabla();

}

function selectPincel(cuadro,color){
    debugger;
    var colorFinal=color.split(" ");
    //quitar seleccionado a los demas colores
    quitarseleccionado();
    //aplicar seleccionado al cuadro
    cuadro.className=color+" seleccionado";
    cambiarApuntado();
    coloreo=colorFinal[0];
    
}

function quitarseleccionado(){
    var coloriito=1;

    for(var a=0;a<6;a++){
        arraycolores[a].className="color"+coloriito;
        coloriito++;
    }
}

function cambiarApuntado(){
    estado="select";
    //seleccionar texto de la tabla y ponerlo en modo pintando
    var estadoPincel=document.getElementById("pincel");
    //alert(estadoPincel);
    estadoPincel.innerHTML="Has seleccionado un pincel";
    

}

function habilitarTabla(){
    var tabla = document.getElementsByClassName("tablerodibujo");
    tabla[0].addEventListener("click",function(){
        activarpincel();
    },false);
}

function activarpincel(){
    var estadoPincel=document.getElementById("pincel");
    if(estado=="select"){
        //activamos pintado
        estado="pintando";
        
        estadoPincel.innerHTML="Estas pintando";

    }else if (estado=="pintando"){
        //dejamos de pintar
        estadoPincel.innerHTML="Has dejado de pintar";
        estado="select";
    }
}

function pintar(yo){
    if(estado=="pintando"){
        yo.className=coloreo;
    }

}
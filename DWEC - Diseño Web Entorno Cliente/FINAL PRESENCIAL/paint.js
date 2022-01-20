window.onload=init;

    var estado="Pausa";
    var coloreo="";

    var c1 = document.getElementsByClassName("color1");
    var c2 = document.getElementsByClassName("color2");
    var c3 = document.getElementsByClassName("color3");
    var c4 = document.getElementsByClassName("color4");
    var c5 = document.getElementsByClassName("color5");
    var c6 = document.getElementsByClassName("color6");

function init(){
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
    
    
    //asignar listener a los 5 colores
    c1[0].addEventListener("click",function(){
        selectPincel(c1[0],"color1");
    },false)
    c2[0].addEventListener("click",function(){
        selectPincel(c2[0],"color2");
    },false)
    c3[0].addEventListener("click",function(){
        selectPincel(c3[0],"color3");
    },false)
    c4[0].addEventListener("click",function(){
        selectPincel(c4[0],"color4");
    },false)
    c5[0].addEventListener("click",function(){
        selectPincel(c5[0],"color5");
    },false)
    c6[0].addEventListener("click",function(){
        selectPincel(c6[0],"color6");
    },false)

    habilitarTabla();

}

function selectPincel(cuadro,color){
    debugger;
    //quitar seleccionado a los demas colores
    quitarseleccionado();
    //aplicar seleccionado al cuadro
    //cuadro.setAttribute("class","seleccionado");
    cuadro.className=color+" seleccionado";
    cambiarApuntado();
    coloreo=color;
    
}

function quitarseleccionado(){
    c1[0].className="color1";
    c2[0].className="color2";
    c3[0].className="color3";
    c4[0].className="color4";
    c5[0].className="color5";
    c6[0].className="color6";
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
function cambia(este){

    var ull= este.getElementsByTagName("ul");

    var estilo= ull[0].style;//guarrada
    
    //obtener estilo del UL
    if(estilo.display==""||estilo.display=="none"){
        estilo.display="block";
    }else{
        estilo.display="none";
    }   
}
function calculoPotencia(){
    var potenciaSeñal = document.getElementById("señal").value;
    var potenciaRuido = document.getElementById("ruido").value;

    var decibelios = Math.log10(potenciaSeñal/potenciaRuido);

    var solucion = document.getElementById("sol");
    solucion.innerHTML = decibelios.toFixed(2);


    //alert (decibelios.toFixed(2));


}
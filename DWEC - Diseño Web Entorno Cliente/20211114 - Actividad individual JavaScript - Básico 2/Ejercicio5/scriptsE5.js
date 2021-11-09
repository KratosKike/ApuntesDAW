function calculooperandos(){
    var sOperandos = document.getElementById("operandos").value;
    var div = document.getElementById("solucion");
    alert("hola");

    //buscar cantidad de operandos
    var operandos = /[+-*/]/g
    var cuentaOperandos = 0;
    for(var i=0;i<sOperandos.length;i++){
        if(sOperandos[i].match(operandos)){
            cuentaOperandos++;
            alert("hola");
        }
    }
    div.insertAdjacentHTML("beforeend","Numero de operandos: "+cuentaOperandos);
    div.insertAdjacentHTML("beforeend","hola");

}
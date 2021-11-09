function calc(){
    var sOperandos = document.getElementById("operandos").value;
    var div = document.getElementById("solucion");
    
    //limpiar div
    div.innerHTML = " ";

    //buscar cantidad de operandos
    var operandos = /[+-/*]/g
    var cuentaOperandos = 0;
    for(var i=0;i<sOperandos.length;i++){
        if(sOperandos[i].match(operandos)){
            cuentaOperandos++;
            
        }
    }
    div.insertAdjacentHTML("beforeend","Numero de operandos: "+cuentaOperandos);
    //bucle que se repetira las veces por cada operando

    var cuentaFinal = 0;
    var operando= "";

    for(var i2=0;i2<cuentaOperandos;i2++){

        
        

        //div.insertAdjacentHTML("beforeend",sOperandos[0]+" "+sOperandos[1]+" "+sOperandos[2]);

        //separar pimer caso de los demas
        if(i2==0){
            //toma el operando
            switch(sOperandos[1]){
                case "+":
                    operando="SUMA";
                    break;
                case "-":
                    operando="RESTA";
                    break;
                case "*":
                    operando="MULTIPLICACION";
                    break;
                case "/":
                    operando="DIVISION";
                    break;
            }
            div.insertAdjacentHTML("beforeend","</br>"+operando+" ");

            div.insertAdjacentHTML("beforeend",sOperandos[0]+" "+sOperandos[1]+" "+sOperandos[2]);
            cuentaFinal= eval(sOperandos[0]+" "+sOperandos[1]+" "+sOperandos[2]);
            sOperandos = sOperandos.slice(3);
        }else{
            //toma el operando
            switch(sOperandos[0]){
                case "+":
                    operando="SUMA";
                    break;
                case "-":
                    operando="RESTA";
                    break;
                case "*":
                    operando="MULTIPLICACION";
                    break;
                case "/":
                    operando="DIVISION";
                    break;
            }
            div.insertAdjacentHTML("beforeend","</br>"+operando+" ");

            div.insertAdjacentHTML("beforeend",cuentaFinal+" "+sOperandos[0]+" "+sOperandos[1]);

            cuentaFinal=eval(cuentaFinal+" "+sOperandos[0]+" "+sOperandos[1])
            sOperandos = sOperandos.slice(2);
        }
        
        div.insertAdjacentHTML("beforeend","</br>"+cuentaFinal);

        
        //eliminar cadena
        
        


    }

}
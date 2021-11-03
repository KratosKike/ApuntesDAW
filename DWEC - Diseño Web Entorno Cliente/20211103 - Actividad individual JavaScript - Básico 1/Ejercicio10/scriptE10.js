
function juego(){
    var iNumeroAdivinar = Math.floor(Math.random()*100);
    //document.write(iNumeroAdivinar);
    
    var iIntentos = parseInt(prompt("Dime el numero de intentos que quieres realizar"));
    
    var ganador=false;
    
    var numeroUsuario =0;
    
    var intentosMostrar=iIntentos;
    //bucle por numero de intentos
    for(var i=0;i<iIntentos;i++){
        //introducir numero por el usuario
        numeroUsuario = parseInt(prompt("Introduce un numero del 1 al 100"));
    
        //comparar
        if(numeroUsuario == iNumeroAdivinar){
            ganador=true;
            break;
        }else{
            //comprobar si se ha pasado por arriba o por abajo
            if(numeroUsuario<iNumeroAdivinar){
                //el numero es menor
                alert("El numero es mayor que "+numeroUsuario+
                " y te quedan "+intentosMostrar+" intentos");
                intentosMostrar--;
                //pintar en el p el numero
                //document.getElementsByClassName("mayor").innerHTML="Hola";
            }else{
                //el numero es mayor
                alert("El numero es menor que "+numeroUsuario+
                " y te quedan "+intentosMostrar+" intentos");
                intentosMostrar--;
                //pintar en el p el numero
            }
        }
    
    }
    
    if(ganador){
        var intentosFinal = iIntentos-intentosMostrar;
        document.write("Has ganado, has necesitado "+intentosFinal+" intentos");
    }else{
        document.write("Has perdido");
    }
}

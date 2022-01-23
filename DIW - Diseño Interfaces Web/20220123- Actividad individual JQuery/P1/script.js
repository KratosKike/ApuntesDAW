window.onload=init;

function init(){

    var letrero=document.getElementById("letrero");
    //alert(letrero);

    //setear botones
    $("#casilla1").click(function(){
        var casilla=document.getElementById("casilla1");
        //var casilla=$("#casilla1");
        jugar(casilla,0);
    });
    $("#casilla2").click(function(){
        var casilla=document.getElementById("casilla2");
        //var casilla=$("#casilla1");
        jugar(casilla,1);
    });
    $("#casilla3").click(function(){
        var casilla=document.getElementById("casilla3");
        //var casilla=$("#casilla1");
        jugar(casilla,2);
    });
    $("#casilla4").click(function(){
        var casilla=document.getElementById("casilla4");
        //var casilla=$("#casilla1");
        jugar(casilla,3);
    });
    $("#casilla5").click(function(){
        var casilla=document.getElementById("casilla5");
        //var casilla=$("#casilla1");
        jugar(casilla,4);
    });
    $("#casilla6").click(function(){
        var casilla=document.getElementById("casilla6");
        //var casilla=$("#casilla1");
        jugar(casilla,5);
    });
    $("#casilla7").click(function(){
        var casilla=document.getElementById("casilla7");
        //var casilla=$("#casilla1");
        jugar(casilla,6);
    });
    $("#casilla8").click(function(){
        var casilla=document.getElementById("casilla8");
        //var casilla=$("#casilla1");
        jugar(casilla,7);
    });
    $("#casilla9").click(function(){
        var casilla=document.getElementById("casilla9");
        //var casilla=$("#casilla1");
        jugar(casilla,8);
    });
  
    $("#partida").click(function(){
        comenzarJuego();
    })
    
}



var jugando = false;
function comenzarJuego(){
    letrero.innerHTML="Turno del Jugador 1";
    jugando = true;
    //alert("hola");
    //desabilitar boton
    $("#partida").disabled=true;
    //document.getElementById("partida").disabled = true;

}
var jugador=2;
var mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0,];
function jugar(casilla,pos){
debugger;
    if(jugando){
        if(jugador==1){//jugador 2
 
            if(mapa[pos]!=0){
                alert("No puedes pintar aqui");
            }else{
                //casilla.style.backgroundColor="#FF0000";
                casilla.style.background="url('img/circulo.png')";
                $(casilla).css("background-size","contain");
                
                
                jugador=2;
                mapa[pos]=jugador;
                console.log(mapa);
                letrero.innerHTML="Turno del Jugador 1";
                comprobar();
            }
    
        }else{//Jugador 1
            
            if(mapa[pos]!=0){
                alert("No puedes pintar aqui");
            }else{
                //casilla.style.backgroundColor="#00FF00";
                casilla.style.background="url('img/equis.jpg')";
                $(casilla).css("background-size","contain");
                jugador=1;
                mapa[pos]=jugador;
                console.log(mapa);
                letrero.innerHTML="Turno del Jugador 2";
                comprobar();
            }
     
        }
    }else{
        alert("No estas jugando");
    }

}

function comprobarRepe(pos,jugador){
    if(pos==1||pos==2){
        alert("No puedes colorear aqui");
        return true;
    }else{
        //mapa[pos]=jugador;
        return false;
        comprobar();
    }
}

var jugadas = 0
function comprobar(){
    jugadas++;
    if(jugadas==9){
        //alert("empate");
        letrero.innerHTML="¡EMPATE!";
        finPartida();
    }else{
        //comprobar mapa
        //horizontales
        if(mapa[0] == mapa[1] && mapa[1] == mapa[2] && mapa[0] !=0) ganador(mapa[0]);
        if(mapa[3] == mapa[4] && mapa[4] == mapa[5] && mapa[3] !=0) ganador(mapa[3]);
        if(mapa[6] == mapa[7] && mapa[7] == mapa[8] && mapa[6] !=0) ganador(mapa[6]);
        //verticales
        if(mapa[0] == mapa[3] && mapa[3] == mapa[6] && mapa[0] !=0) ganador(mapa[0]);
        if(mapa[1] == mapa[4] && mapa[4] == mapa[7] && mapa[1] !=0) ganador(mapa[1]);
        if(mapa[2] == mapa[5] && mapa[5] == mapa[8] && mapa[2] !=0) ganador(mapa[2]);
        //diagonales
        if(mapa[0] == mapa[4] && mapa[4] == mapa[8] && mapa[0] !=0) ganador(mapa[0]);
        if(mapa[2] == mapa[4] && mapa[4] == mapa[6] && mapa[2] !=0) ganador(mapa[2]);
    }
  
    
}

function ganador(gana){
    //alert("Gana el jugador: "+gana);
    letrero.innerHTML="Gana el jugador: "+gana;
    finPartida();

}

function finPartida(){
    //resetear colores
    //alert("Entrando en fin partida");
    //var casilla=document.getElementById("casilla1");
    //casilla.style.backgroundColor="grey";
    for(var cont=1;cont<10;cont++){
        var casilla=document.getElementById("casilla"+cont);
        casilla.style.backgroundColor="grey";
        casilla.style.backgroundImage="";
    }
    //alert(casilla);

    //resetear mapa;
    mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0,];
    document.getElementById("partida").disabled = false;
    jugando = false;
    jugadas = 0;
    jugador=2;
   
}
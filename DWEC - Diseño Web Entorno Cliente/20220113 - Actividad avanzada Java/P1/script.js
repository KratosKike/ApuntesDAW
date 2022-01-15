window.onload=init;

function init(){

    document.getElementById("partida").addEventListener("click",function(){

        comenzarJuego();
    })
}

function comenzarJuego(){

    //alert("hola");
    //desabilitar boton
    document.getElementById("partida").disabled = true;
    //habilitar el cuadrado
    /*for(var i=1;i<9;i++){
        document.getElementById("casilla"+i).addEventListener("click",function(){
        var casilla=document.getElementById("casilla"+i);
            jugar(casilla);
    
        })
    }*/
    document.getElementById("casilla1").addEventListener("click",function(){
        var casilla=document.getElementById("casilla1");
            jugar(casilla,0);
    
        })
    document.getElementById("casilla2").addEventListener("click",function(){
        var casilla=document.getElementById("casilla2");
            jugar(casilla,1);
        
        })
    document.getElementById("casilla3").addEventListener("click",function(){
        var casilla=document.getElementById("casilla3");
            jugar(casilla,2);
    
        })
    document.getElementById("casilla4").addEventListener("click",function(){
        var casilla=document.getElementById("casilla4");
            jugar(casilla,3);
        
        })
    document.getElementById("casilla5").addEventListener("click",function(){
        var casilla=document.getElementById("casilla5");
            jugar(casilla,4);
    
        })
    document.getElementById("casilla6").addEventListener("click",function(){
        var casilla=document.getElementById("casilla6");
            jugar(casilla,5);
        
        })
    document.getElementById("casilla7").addEventListener("click",function(){
        var casilla=document.getElementById("casilla7");
            jugar(casilla,6);
    
        })
    document.getElementById("casilla8").addEventListener("click",function(){
        var casilla=document.getElementById("casilla8");
            jugar(casilla,7);
        
        })
    document.getElementById("casilla9").addEventListener("click",function(){
        var casilla=document.getElementById("casilla9");
            jugar(casilla,8);
            
        })

    

}
var jugador=2;
var mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0,];
function jugar(casilla,pos){
    if(jugador==1){//jugador 2
 
        if(mapa[pos]!=0){
            alert("No puedes pintar aqui");
        }else{
            casilla.style.backgroundColor="#FF0000";
            jugador=2;
            mapa[pos]=jugador;
            console.log(mapa);
            comprobar();
        }

    }else{//Jugador 1
        
        if(mapa[pos]!=0){
            alert("No puedes pintar aqui");
        }else{
            casilla.style.backgroundColor="#00FF00";
            jugador=1;
            mapa[pos]=jugador;
            console.log(mapa);
            comprobar();
        }
 
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
        alert("empate");
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
    alert("Gana el jugador: "+gana);
    finPartida();

}

function finPartida(){
    //resetear colores
    //alert("Entrando en fin partida");
    //var casilla=document.getElementById("casilla1");
    //casilla.style.backgroundColor="grey";
    for(var cont=1;cont<9;cont++){
        var casilla=document.getElementById("casilla"+cont);
        casilla.style.backgroundColor="grey";
    }
    //alert(casilla);

    //resetear mapa;
    mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0,];
    document.getElementById("partida").disabled = false;
}
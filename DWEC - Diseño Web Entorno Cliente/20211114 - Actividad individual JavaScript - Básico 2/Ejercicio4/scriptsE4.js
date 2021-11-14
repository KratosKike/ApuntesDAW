function calculoContraseña(){
    var sContrasena = document.getElementById("contrasena").value;
    var div = document.getElementById("solucion");
    var lon = sContrasena.length;
    var tipo = typeof(sContrasena);
    var valido = true;

    //var stringContrasena = sContrasena.toString;
    //div.innerHTML= "La contraseña es: "+sContrasena;

    //limpiar div
    div.innerHTML = " ";

    //div.insertAdjacentHTML("beforeend",sContrasena+" ");
    //div.insertAdjacentHTML("beforeend",lon+" ");
    if(sContrasena.length<10){//comprobar longitud
        div.insertAdjacentHTML("beforeend",
        "</br>La contraseña debe de ser de al menos 10 caracteres");
        valido = false;
    }
    //combrobar que hay numeros, mayusculas y simbolos
    //creamos expresion regular para recoger las minusculas


    //codigo con charCodeAt()
    var contCharMinusculas = 0;
    var contCharMayusculas = 0;
    var contCharNumeros = 0;
    var contCharSimbolos = 0;


    //comprobar minusculas
    //bucle para ver si hay minusculas
    for(let cont=0;cont<sContrasena.length;cont++){
        debugger;
        if(sContrasena.charCodeAt(cont)<96||sContrasena.charCodeAt(cont)>122){
            //no hay minuscula
            
        }else{
            //hay minuscula
            contCharMinusculas++;
            
        }
    }
    if(contCharMinusculas<1){
        div.insertAdjacentHTML("beforeend","</br>Debe contener letras minusculas");
        valido = false;
    }

    //comprobar mayusculas


    for(let cont=0;cont<sContrasena.length;cont++){
        debugger;
        if(sContrasena.charCodeAt(cont)<64||sContrasena.charCodeAt(cont)>90){
            //no hay mayuscula
            
        }else{
            //hay mayucula
            contCharMayusculas++;
            
        }
    }
    if(contCharMayusculas<1){
        div.insertAdjacentHTML("beforeend","</br>Debe contener letras mayusculas");
        valido = false;
    }

    //comprobar numeros

    for(let cont=0;cont<sContrasena.length;cont++){
        debugger;
        if(sContrasena.charCodeAt(cont)<48||sContrasena.charCodeAt(cont)>57){
            //no hay numero
            
        }else{
            //hay numero
            contCharNumeros++;
            
        }
    }
    if(contCharNumeros<1){
        div.insertAdjacentHTML("beforeend","</br>Debe contener numeros");
        valido = false;
    }

    //comprobar simbolos

    for(let cont=0;cont<sContrasena.length;cont++){
        if(sContrasena.charCodeAt(cont)<96||sContrasena.charCodeAt(cont)>122){
            //no hay minuscula
                if(sContrasena.charCodeAt(cont)<64||sContrasena.charCodeAt(cont)>90){
                    //no hay mayuscula
                        debugger;
                        if(sContrasena.charCodeAt(cont)<48||sContrasena.charCodeAt(cont)>57){
                            //no hay numero
                            //es simbolo
                            contCharSimbolos++;
                        }else{
                            //hay numero
                            //contCharNumeros++;
                        }
                    
                }else{
                    //hay mayucula
                    //contCharMayusculas++; 
                }
            
        }else{
            //hay minuscula
            //contCharMinusculas++;
        }
    }

    if(contCharSimbolos<1){
        div.insertAdjacentHTML("beforeend","</br>Debe contener simbolos");
        valido = false;
    }



    //codigo expresiones regulares

   /* var minusculas=/[a-z]/g;
    var inumMinus = 0;
    if(!sContrasena.match(minusculas)){
        div.insertAdjacentHTML("beforeend","</br>Debe contener letras minusculas");
        valido = false;
    }else{
        //calular numero de minusculas
        for(var i =0;i<lon;i++){
            if(sContrasena[i].match(minusculas)){
                inumMinus++;
            }
            
        }
    }*/
    //comprobar que tiene mayusculas
    //creamos expresion regular para recoger las mayusculas
    /*var mayus =/[A-Z]/g;
    var inumMayus = 0
    if(!sContrasena.match(mayus)){
    div.insertAdjacentHTML("beforeend","</br>Debe contener letras mayusculas");
    valido = false;
    }else{
        //calular numero de mayusculas
        for(var i =0;i<lon;i++){
            if(sContrasena[i].match(mayus)){
                inumMayus++;
            }
            
        }
    }*/
    //comrpobar que tiene numeros
    //creamos expresion regular para recoger los numeros
    /*var nums =/[0-9]/g;
    var inums = 0;
    if(!sContrasena.match(nums)){
        div.insertAdjacentHTML("beforeend","</br>Debe contener numeros");
        valido = false;
    }else{
        //calular numero de numeros
        for(var i =0;i<lon;i++){
            if(sContrasena[i].match(nums)){
                inums++;
            }
        }
    }*/
    //comprobar que tiene simbolos
    //creamos expresion regular para recoger un numero determinado de simbolos
    /*var simbols = /[!"·$%&/()=?¿|@#~€¬]/g;
    var inumSimbolos = 0;
    if(!sContrasena.match(simbols)){
        div.insertAdjacentHTML("beforeend","</br>Debe contener simbolos especiales");
        valido = false;
    }else{
        //calular numero de simbolos
        for(var i =0;i<lon;i++){
            if(sContrasena[i].match(simbols)){
                inumSimbolos++;
            }
        }
    }*/

/*
    div.insertAdjacentHTML("beforeend","</br>Numero de minusculas "+contCharMinusculas);
    div.insertAdjacentHTML("beforeend","</br>Numero de minusculas "+inumMinus);
    
    
    div.insertAdjacentHTML("beforeend","</br>Numero de mayusculas "+inumMayus);
    div.insertAdjacentHTML("beforeend","</br>Numero de numeros "+inums);
    div.insertAdjacentHTML("beforeend","</br>Numero de simbolos "+inumSimbolos);
*/
    //calculos de porcentajes
    var porSimbolos = ((contCharSimbolos/lon)*100).toFixed(0);
    //div.insertAdjacentHTML("beforeend","</br>Porcentaje de simbolos "+porSimbolos);
    var porNumeros = ((contCharNumeros/lon)*100).toFixed(0);
    //div.insertAdjacentHTML("beforeend","</br>Porcentaje de numeros "+porNumeros);
    var porMinus = ((contCharMinusculas/lon)*100).toFixed(0);
    //div.insertAdjacentHTML("beforeend","</br>Porcentaje de minusculas "+porMinus);
    var porMayus = ((contCharMayusculas/lon)*100).toFixed(0);
    //div.insertAdjacentHTML("beforeend","</br>Porcentaje de minusculas "+porMayus);

    //calculo final
    if(porSimbolos<10){
        valido = false;
        div.insertAdjacentHTML("beforeend","</br>No contiene suficientes simbolos");
    }
    if(porNumeros<20){
        valido = false;
        div.insertAdjacentHTML("beforeend","</br>No contiene suficientes numeros");
    }
    if(porMayus<porMinus*0.33){
        valido = false;
        div.insertAdjacentHTML("beforeend","</br>No contiene suficientes mayusculas");
    }
    if(porMinus<porMinus*0.33){
        valido = false;
        div.insertAdjacentHTML("beforeend","</br>No contiene suficientes minusculas");
    }

    if(valido){
        div.insertAdjacentHTML("beforeend","</br></br>Contraseña valida");
    }else{
        div.insertAdjacentHTML("beforeend","</br></br>Contraseña no valida");
    }

            
        
    
}
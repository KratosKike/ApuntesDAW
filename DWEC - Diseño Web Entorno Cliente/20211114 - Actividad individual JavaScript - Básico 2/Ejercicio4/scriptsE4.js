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
    var minusculas=/[a-z]/g;
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
    }
    //comprobar que tiene mayusculas
    //creamos expresion regular para recoger las mayusculas
    var mayus =/[A-Z]/g;
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
    }
    //comrpobar que tiene numeros
    //creamos expresion regular para recoger los numeros
    var nums =/[0-9]/g;
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
    }
    //comprobar que tiene simbolos
    //creamos expresion regular para recoger un numero determinado de simbolos
    var simbols = /[!"·$%&/()=?¿|@#~€¬]/g;
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
    }

    /*
    div.insertAdjacentHTML("beforeend","</br>Numero de minusculas "+inumMinus);
    div.insertAdjacentHTML("beforeend","</br>Numero de mayusculas "+inumMayus);
    div.insertAdjacentHTML("beforeend","</br>Numero de numeros "+inums);
    div.insertAdjacentHTML("beforeend","</br>Numero de simbolos "+inumSimbolos);
*/
    //calculos de porcentajes
    var porSimbolos = ((inumSimbolos/lon)*100).toFixed(0);
    //div.insertAdjacentHTML("beforeend","</br>Porcentaje de simbolos "+porSimbolos);
    var porNumeros = ((inums/lon)*100).toFixed(0);
    //div.insertAdjacentHTML("beforeend","</br>Porcentaje de numeros "+porNumeros);
    var porMinus = ((inumMinus/lon)*100).toFixed(0);
    //div.insertAdjacentHTML("beforeend","</br>Porcentaje de minusculas "+porMinus);
    var porMayus = ((inumMayus/lon)*100).toFixed(0);
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
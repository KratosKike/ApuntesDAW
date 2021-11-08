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

    div.insertAdjacentHTML("beforeend",sContrasena+" ");
    div.insertAdjacentHTML("beforeend",lon+" ");
    if(sContrasena.length<10){//comprobar longitud
        div.insertAdjacentHTML("beforeend",
        "</br>La contraseña debe de ser de al menos 10 caracteres");
        valido = false;
    }
    //combrobar que hay numeros, mayusculas y simbolos
    var minusculas=/[a-z]/g;
    var inumMinus = 0;
    if(!sContrasena.match(minusculas)){
        div.insertAdjacentHTML("beforeend","</br>Debe contener letras minusculas");
        valido = false;
    }else{
        //calular numero de minusculas
        for(var i =0;i<lon;i++){
            
        }
    }
    //comprobar que tiene mayusculas
    var mayus =/[A-Z]/g;
    if(!sContrasena.match(mayus)){
    div.insertAdjacentHTML("beforeend","</br>Debe contener letras mayusculas");
    valido = false;
    }
    //comrpobar que tiene numeros
    var nums =/[0-9]/g;
    if(!sContrasena.match(nums)){
        div.insertAdjacentHTML("beforeend","</br>Debe contener numeros");
        valido = false;
    }
    //comprobar que tiene simbolos
    var simbols = /[!"·$%&/()=?¿|@#~€¬]/g;
    if(!sContrasena.match(simbols)){
        div.insertAdjacentHTML("beforeend","</br>Debe contener simbolos especiales");
        valido = false;
    }

            
        
    
}
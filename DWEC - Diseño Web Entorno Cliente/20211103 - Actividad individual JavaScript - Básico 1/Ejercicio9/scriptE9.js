var texto = prompt("Introduce una cadena o un numero");




function palindromo(texto){
    //calcular si la mitad es un numero par o impar para recorrer 
    //bien la cadena o numero
    var lon = Math.floor(texto.length)/2;
    //recorrer la cadena comparando primero con ultimo acercandose al medio
    for (var i = 0;i < length; i++){
        if(texto[i] !== texto[texto.length - i -1]){
            return false
        }
    }
    return true
}

if(palindromo(texto)){
    document.write("Hay palindromo o capicua");
}else{
    document.write("No hay palindromo o capicua");
}

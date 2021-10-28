var iNumero1 = prompt("Elija primer numero");
var iNumero2 = prompt("Elija segundo numero");

//primera comparativa

if(iNumero1>iNumero2){
    alert(iNumero1+" es mayor que "+iNumero2);
}else if(iNumero1==iNumero2){
    alert(iNumero1+" es Igual que "+iNumero2);
}else{
    alert(iNumero1+" es menor que "+iNumero2);
}

//comparativa con el numero 100
if(iNumero1<100){
    if(iNumero2<100){
        alert("ambos Numeros son menores que 100");
    }else{
        alert("uno de los numeros es menor que 100");
    }
}else if(iNumero2<100){
    alert("uno de los numeros es menor que 100");
}else{
    alert("los 2 numeros son menores que 100");
}
var iNumero = prompt("Introduce numero");

if(iNumero==1){
    document.write("El numero es primo");
}

for(var icont =iNumero-1;icont>0;icont--){
    //document.write(icont);
    
    if(icont==1){
        document.write("El numero es primo");
    }else if(iNumero%icont == 0){
        document.write("El numero no es primo");
        break;
    }
}
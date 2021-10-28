//Tabla de multiplicar del 7.
//Tabla de multiplicar del 8.
//Tabla de multiplicar del 9.

var itabla7 = 7;
var icont7 = 0;

var itabla8 = 8;
var icont8 = 0;

var itabla9 = 9;
var icont9 = 0;

while(icont7<=10){
    document.write(icont7+"*"+itabla7+"="+icont7*itabla7);
    document.write("</br>");
    icont7++;
}
document.write("</br>");
do{
    document.write(icont8+"*"+itabla8+"="+icont8*itabla8);
    document.write("</br>");
    icont8++;
}while(icont8<=10);
document.write("</br>");
for(icont9;icont9<=10;icont9++){
    document.write(icont9+"*"+itabla9+"="+icont9*itabla9);
    document.write("</br>");
}
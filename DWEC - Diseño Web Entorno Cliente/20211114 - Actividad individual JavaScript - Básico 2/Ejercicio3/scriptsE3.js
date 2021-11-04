function calculoFigura(){
    //obtenemos numero de iteraciones

    var iIteraciones = document.getElementById("figura").value;
    var div = document.getElementById("solucion");

    var iContador1 = iIteraciones;
    var iContador2 = 1;

    //limpiar div
    div.innerHTML = " ";
    

    for(var i2=1;i2<=iIteraciones;i2++){
        ;
        div.insertAdjacentHTML("beforeend","<p>");
        for(var i=1;i<=iContador1;i++){
        //for(var i=iContador1;i>0;i--){
            div.insertAdjacentHTML("beforeend",i2+" ");
        }
        div.insertAdjacentHTML("beforeend","</p>");
        iContador1--;
    }
    //for(var i2=1;i2<=iIteraciones;i2++){
        for(var i2=iIteraciones;i2>0;i2--){
        
        div.insertAdjacentHTML("beforeend","<p>");
        for(var i=1;i<=iContador2;i++){
        //for(var i=iContador2;i>0;i--){
            div.insertAdjacentHTML("beforeend",i2+" ");
        }
        div.insertAdjacentHTML("beforeend","</p>");
        iContador2++;
    }
    

}
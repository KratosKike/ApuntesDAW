
var i=0;

var log = document.getElementById("log");

function Edificio(id,calle,numero,CP,viviendas,){
    this.id=id;
    this.calle = calle;
    this.numero = numero;
    this.cp = CP;
    this.datos = function(){
        alert(this.calle+" "+this.numero+" "+this.cp+" ");
    }
    this.viviendas = viviendas;
}

var edificios=[];
    


function inicializar(){

    log = document.getElementById("log");
    //i=0;
    //edificios=[];

}




function crearEdificio(){
    //obtener elementos
    var calle = document.getElementById("calle").value;
    var numero = document.getElementById("num").value;
    var cp = document.getElementById("cp").value;

    //crear variable edificio
    var edificio = new Edificio(edificios.length+1,calle,numero,cp,viviendas);

    //agregar edificio a array de edificios
    edificios.push(edificio);

    
    debugger;
    //edificios.push(Edificio(calle,numero,cp));
    //i++;

    //mostrar edificio agregado
    debugger;
    log.insertAdjacentHTML("beforeend","<br/>Contruido nuevo edificio en la calle: "+calle+" no: "+numero+" CP: "+cp+"");

}

function muestraEdificios(){
    debugger;
    for(var cont=0;cont<edificios.length;cont++){
        edificios[cont].datos();
    }
}


function modificarCalle(){
    //obtener id
    let id=document.getElementById("cambioCid").value;
    //comprobar si esa id esta en los edificios
    if(id>edificios.length){
        log.insertAdjacentHTML("beforeend","<br/>Esa Id no esta en el sistema");
    }else{
        //obtener calle nueva
        let nuevaCalle = document.getElementById("cambioCcalle").value;
        //cambiar calle nueva
        edificios[id-1].calle= nuevaCalle;
        log.insertAdjacentHTML("beforeend","<br/>La calle de la id "+id+" se llama ahora "+nuevaCalle);

    }
}

function modificarNumero(){
    debugger;
    //obtener id
    let id=document.getElementById("cambioNid").value;
    //obtener numero nuevo
    //let nuevoNumero = document.getElementById("cambioNnumero").value;

    //comprobar si esa id esta en los edificios
    if(id>edificios.length){
        log.insertAdjacentHTML("beforeend","<br/>Esa Id no esta en el sistema");
    }else{
        
        var newNumber=document.getElementById("cambioNnumero").value;
        //cambiar numero nuevo
        edificios[id-1].numero= newNumber;
        log.insertAdjacentHTML("beforeend","<br/>El numero de la id "+id+" es ahora "+newNumber);

    }
}

function modificarCodigoPostal(){
    //obtener id
    let id=document.getElementById("cambioCPid").value;
    //comprobar si esa id esta en los edificios
    if(id>edificios.length){
        log.insertAdjacentHTML("beforeend","<br/>Esa Id no esta en el sistema");
    }else{
        var newCP=document.getElementById("cambioCPcp").value;
        edificios[id-1].cp= newCP;
        log.insertAdjacentHTML("beforeend","<br/>El CP de la id "+id+" es ahora "+newCP);

    }
}

function imprimeCalle(){
    //obtener id
    let id=document.getElementById("muestraId").value;
    //muestra calle
    log.insertAdjacentHTML("beforeend","<br/>La calle de la id "+id+" es "+edificios[id].calle);
}

function imprimeNumero(){
    //obtener id
    let id=document.getElementById("muestraId").value;
    //muestra numero
    log.insertAdjacentHTML("beforeend","<br/>El numero de la id "+id+" es "+edificios[id].numero);

}

function imprimeCodigoPostal(){
    //obtener id
    let id=document.getElementById("muestraId").value;
    //muestra cp
    log.insertAdjacentHTML("beforeend","<br/>El CP de la id "+id+" es "+edificios[id].cp);


}

function agregarPlantasYPuertas(){
    //obtener id
    let id=document.getElementById("pYpId").value;
    let plantas=document.getElementById("pYpPlantas").value;
    let puertas=document.getElementById("pYpPuertas").value;

}
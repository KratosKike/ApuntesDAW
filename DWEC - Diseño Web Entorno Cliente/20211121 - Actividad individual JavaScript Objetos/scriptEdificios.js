
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
    var viviendas = new Array(0);

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
    if(id>edificios.length){
        log.insertAdjacentHTML("beforeend","<br/>Esa Id no esta en el sistema");
    }else{
    log.insertAdjacentHTML("beforeend","<br/>La calle de la id "+id+" es "+edificios[id-1].calle);
    }
}

function imprimeNumero(){
    //obtener id
    let id=document.getElementById("muestraId").value;
    //muestra numero
    if(id>edificios.length){
        log.insertAdjacentHTML("beforeend","<br/>Esa Id no esta en el sistema");
    }else{
    log.insertAdjacentHTML("beforeend","<br/>El numero de la id "+id+" es "+edificios[id-1].numero);
    }
}

function imprimeCodigoPostal(){
    //obtener id
    let id=document.getElementById("muestraId").value;
    if(id>edificios.length){
        log.insertAdjacentHTML("beforeend","<br/>Esa Id no esta en el sistema");
    }else{
    //muestra cp
    log.insertAdjacentHTML("beforeend","<br/>El CP de la id "+id+" es "+edificios[id-1].cp);
    }

}

function agregarPlantasYPuertas(){
    //obtener id
    let id=document.getElementById("pYpId").value;
    //obtener plantas y puertas
    let plantas=document.getElementById("pYpPlantas").value;
    let puertas=document.getElementById("pYpPuertas").value;

    //realizar bucle de llenar plantas
    for(let cont=0;cont<plantas;cont++){
        edificios[i-1].viviendas.push(" ");
    }
    //realizar bucle para llenar puertas
    for(let cont1=0;cont1<plantas;cont1++){
        for(let cont2=0;con2<puertas;cont2++){
            edificios[i-1].viviendas[cont1].push(" ");
        }
    }
    log.insertAdjacentHTML("beforeend","<br/>Se han agregado "+plantas+" plantas y en cada planta se han agregado "+puertas+" puertas en el edificio con id "+id);

}

function agregarPropietario(){
    //obtener datos
    let id=document.getElementById("propId").value;
    let Nombre=document.getElementById("propNombre").value;
    let planta=document.getElementById("propPlanta").value;
    let puerta=document.getElementById("propPuerta").value;
    if(id>edificios.length){
        log.insertAdjacentHTML("beforeend","<br/>Esa Id no esta en el sistema");
    }else{
        if(planta>edificios[i-1].viviendas.length){
            log.insertAdjacentHTML("beforeend","<br/>Esa Planta no esta en el sistema");
        }else{
            if(puerta>edificios[i-1].viviendas[planta].length){
                log.insertAdjacentHTML("beforeend","<br/>Esa Puerta no esta en el sistema");

            }else{
                //insertar nombre
                edificios[i-1].viviendas[planta][puerta]=nombre;
                log.insertAdjacentHTML("beforeend","<br/>Se ha añadido a "+nombre+" en el numero "+puerta+" de la planta "+planta+" en el edificio con id "+id);

            }
        }
    }

}
function imprimePlantas(){
    //obtener datos
    let id=document.getElementById("propId").value;
    //recorrer edificio imprimiendo plantas
    for(let cont=0;cont<edificios[id-1].viviendas.length;cont++){
        for(let cont1=0;cont1<edificios[id-1].viviendas[cont].length;cont1++){
            log.insertAdjacentHTML("beforeend","<br/>Propietario de la puerta "+cont1+" de la planta "+cont+": "+edificios[id-1].viviendas[cont][cont1]);
        }

    }
}
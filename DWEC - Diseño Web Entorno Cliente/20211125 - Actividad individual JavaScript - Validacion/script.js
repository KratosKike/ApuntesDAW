

window.onload=init;


function init(){
    document.getElementById("nombre").addEventListener("focusout",function(){
        //obtener valor del campo nombre
        var nombre = document.getElementById("nombre").value;
        var elementoNombre = document.getElementById("nombre");
        //cambiar el valor del nombre por el mismo en mayusculas
        elementoNombre.value=nombre.toUpperCase();
        
        //alert(elementoNombre);
     },false);
     
     document.getElementById("apellidos").addEventListener("focusout",function(){
         //alert("funciona");
         //obtener valor del campo apellido
        var apellidos = document.getElementById("apellidos").value;
        var elementoApellido = document.getElementById("apellidos");
        //cambiar el valor del nombre por el mismo en mayusculas
        elementoApellido.value=apellidos.toUpperCase();
     },false);
     
     //Realizar una función que valide los campos de texto NOMBRE y 
     //APELLIDOS. Si se produce algún error, mostrar el mensaje en 
     //el contenedor "errores" y poner el foco en los campos correspondientes.
     
     document.getElementById("enviar").addEventListener("click",function(event){
         
         if(confirm("¿Estas seguro de que quieres enviar los datos?")){
         
     
             //obtener nombre
         var nombre = document.getElementById("nombre").value;
         //obtener apellidos
         var apellidos = document.getElementById("apellidos").value;
     
         var casillaError = document.getElementById("errores");
         casillaError.innerHTML="";
     
         var elementoNombre = document.getElementById("nombre");
     
         var elementoApellido = document.getElementById("apellidos");
     
     
         validar=true;
         //comprobar que el campo este vacio
         if(nombre ==""){
             validar = false;
             
             casillaError.insertAdjacentHTML("beforeend",
             "ERROR: El campo nombre no puede estar vacio<br/>");
     
             elementoNombre.style.borderColor="#FF0000";
     
         }else{
             elementoNombre.style.borderColor="#00FF00";
         }
     
         if(apellidos ==""){
             validar = false;
     
             casillaError.insertAdjacentHTML("beforeend",
             "ERROR: El campo apellidos no puede estar vacio<br/>");
     
             elementoApellido.style.borderColor="#FF0000";
         }else{
             elementoApellido.style.borderColor="#00FF00";
         }
     
         //Validar la EDAD, de manera que contenga tan solo valores numéricos 
         //y que esté en el rango de 0 a 105. Si se produce algún error, mostrar 
         //el mensaje en el contenedor "errores" y poner el foco en el campo EDAD.
     
         //obtener edad
     
         var iEdad = document.getElementById("edad").value;
         var elementoEdad = document.getElementById("edad");
     
         var numEdad = parseInt(iEdad);
     
         if(iEdad == ""){
             casillaError.insertAdjacentHTML("beforeend",
             "ERROR: El campo edad no puede estar vacio<br/>");
             elementoEdad.style.borderColor="#FF0000";
         }else{
             if(Number.isInteger(numEdad)){
                 if(numEdad<0 || numEdad>105){
                     validar = false;
                     casillaError.insertAdjacentHTML("beforeend",
                 "ERROR: Edad debe estar comprendido entre 0 y 105<br/>");
                 elementoEdad.style.borderColor="#FF0000";
                 }else{
                     elementoEdad.style.borderColor="#00FF00";
                 }
         
             }else{
                 validar = false;
                 casillaError.insertAdjacentHTML("beforeend",
                 "ERROR: Edad debe de ser un numero<br/>");
                 elementoEdad.style.borderColor="#FF0000";
             }
         }
     
         //Validar el NIF. Utilizar una expresión regular que permita 
         //solamente 8 números, un guión y una letra. Si se produce algún 
         //error mostrar el mensaje en el contenedor "errores" y poner el 
         //foco en el campo NIF. No es necesario validar que la letra sea 
         //correcta. Explicar las partes de la expresión regular mediante 
         //comentarios.
     
         //obtener nif
         var sNif= document.getElementById("nif").value;
         var elementoNIF = document.getElementById("nif");
         var expresionNIF= /^\d{8}-[A-Z]$/;
         //^Comienzo de la linea,
         //\d{8}indica que han de ser 8 digitos,
         //[A-Z]indica que se debe colocar una letra mayuscula
         //$ indica el fin de la linea
     
         if(expresionNIF.test(sNif)){
             //dni correcto
             //alert("DNI correcto");
             elementoNIF.style.borderColor="#00FF00";
     
         }else{
             //dni erroneo
             //alert("DNI incorrecto");
             validar = false;
             casillaError.insertAdjacentHTML("beforeend",
             "ERROR: El DNI es incorrecto<br/>");
             elementoNIF.style.borderColor="#FF0000";
         }
     
         //Validar el E-MAIL. Utilizar una expresión regular que nos 
         //permita comprobar que el email sigue un formato correcto. 
         //Si se produce algún error mostrar el mensaje en el contenedor 
         //"errores" y poner el foco en el campo E-MAIL. Explicar las partes 
         //de la expresión regular mediante comentarios.
     
         //obtener email
         var sEmail = document.getElementById("email").value;
         var elementoEmail = document.getElementById("email");
         //var expresionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+ $/
         var expEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         //\w+ Busca 1 o mas palabras alfanumricas
         //\-. indica que el siguiente caracter es especial y no interpretado
         //asi, permite podr usarse guiones y puntos
         //* permite 0 o mas veces la expresion anterior
         //\. permite un punto
         // \w{2,3} permite 2 o 3 caracteres alfanumericos
         //+ especifica que debe ocurrir 1 o mas veces
     
         if(expEmail.test(sEmail)){
             elementoEmail.style.borderColor="#00FF00";
         }else{
             validar = false;
             casillaError.insertAdjacentHTML("beforeend",
             "ERROR: El email es incorrecto<br/>");
             elementoEmail.style.borderColor="#FF0000";
         }
     
         //Validar que se haya seleccionado alguna de las PROVINCIAS. 
         //Si se produce algún error, mostrar el mensaje en el contenedor 
         //"errores" y poner el foco en el campo PROVINCIA.
     
         //obtener provincias
         var sProvincias = document.getElementById("provincia").value;
         elementoProvincia = document.getElementById("provincia");
         //alert(sProvincias);
     
         if(sProvincias == 0){
             validar = false;
             casillaError.insertAdjacentHTML("beforeend",
             "ERROR: El campo provincia no puede estar vacio<br/>");
             elementoProvincia.style.borderColor="#FF0000";
         }else{
             elementoProvincia.style.borderColor="##00FF00";
         }
     
         //Validar el campo FECHA utilizando una expresión regular. 
         //Debe cumplir alguno de los siguientes formatos: dd/mm/aaaa 
         //o dd-mm-aaaa. No se pide validar que sea una fecha de calendario 
         //correcta. Si se produce algún error mostrar el mensaje en el 
         //contenedor "errores" y poner el foco en el campo FECHA. Explicar 
         //las partes de la expresión regular mediante comentarios.
     
     
         //obtener fecha
     
         var sFecha= document.getElementById("fecha").value;
         var elementoFecha = document.getElementById("fecha");
         var expresionFecha= /^(?:3[01]|[12][0-9]|0?[1-9])([\-/])(0?[1-9]|1[1-2])\1\d{4}$/;
         // 0o 1 ocurrencias de 3 seguido de 0 o 1 o 1 y 2 seguido de un numero 
         //del 0 al 9
         // \ permite -/
         //0?1-9 permite que haya 0 o 1 ocurrencias de un numero entre 1-9
         //o un numero que sea 1 seguido de 1 o 2
     
     
     
     
         if(expresionFecha.test(sFecha)){
             elementoFecha.style.borderColor="#00FF00";
         }else{
             validar = false;
             casillaError.insertAdjacentHTML("beforeend",
             "ERROR: La hora es incorrecta<br/>");
             elementoFecha.style.borderColor="#FF0000";
         }
     
     
     
     
         //Validar el campo TELEFONO utilizando una expresión regular. 
         //Debe permitir 9 dígitos obligatorios. Si se produce algún error 
         //mostrar el mensaje en el contenedor "errores" y poner el foco en 
         //el campo TELEFONO. Explicar las partes de la expresión regular 
         //mediante comentarios.
     
         //obtener telefono
     
         var sTel= document.getElementById("telefono").value;
         var elementoTel = document.getElementById("telefono");
         var expresionTel= /^\d{9}$/;
         //\d{9} 9 digitos obligatorios
     
         if(expresionTel.test(sTel)){
             elementoTel.style.borderColor="#00FF00";
         }else{
             validar = false;
             casillaError.insertAdjacentHTML("beforeend",
             "ERROR: El telefono es incorrecto<br/>");
             elementoTel.style.borderColor="#FF0000";
         }
     
     
     
     
         //Validar el campo HORA utilizando una expresión regular. Debe 
         //seguir el patrón de hh:mm. No es necesario validar que sea una 
         //hora correcta. Si se produce algún error mostrar el mensaje en 
         //el contenedor "errores" y poner el foco en el campo HORA. 
         //Explicar las partes de la expresión regular mediante comentarios.
     
         //obtener hora
         var sHora= document.getElementById("hora").value;
         var elementoHora = document.getElementById("hora");
         var expresionHora= /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
         //[01] un digito 0 o 1
         //? que haya 0 o 1 de la expresion anterior
         //[0-9] un digito entre 0 y 9
         //|2[0-3] 
     
         if(expresionHora.test(sHora)){
             elementoHora.style.borderColor="#00FF00";
         }else{
             validar = false;
             casillaError.insertAdjacentHTML("beforeend",
             "ERROR: La hora es incorrecta<br/>");
             elementoHora.style.borderColor="#FF0000";
         }
     
     
     
         //Pedir confirmación de envío del formulario. Si se confirma el 
         //envío, realizará el envío de los datos; en otro caso, cancelará 
         //el envío.
     
     
         if(validar){
     
         }else{
             event.preventDefault();
             returnToPreviousPage();
         }
     
         }else{
     
         }
         
         
     
     },false);
}

//Cada vez que los campos NOMBRE y APELLIDOS pierdan el foco, 
//el contenido que se haya escrito en esos campos se convertirá 
//a mayúsculas.

var validar = true;

document.getElementById("nombre").addEventListener("focusout",function(){
   //obtener valor del campo nombre
   var nombre = document.getElementById("nombre").value;
   var elementoNombre = document.getElementById("nombre");
   //cambiar el valor del nombre por el mismo en mayusculas
   elementoNombre.value=nombre.toUpperCase();
   
   //alert(elementoNombre);
},false);

document.getElementById("apellidos").addEventListener("focusout",function(){
    //alert("funciona");
    //obtener valor del campo apellido
   var apellidos = document.getElementById("apellidos").value;
   var elementoApellido = document.getElementById("apellidos");
   //cambiar el valor del nombre por el mismo en mayusculas
   elementoApellido.value=apellidos.toUpperCase();
},false);

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

//Realizar una función que valide los campos de texto NOMBRE y 
//APELLIDOS. Si se produce algún error, mostrar el mensaje en 
//el contenedor "errores" y poner el foco en los campos correspondientes.

document.getElementById("enviar").addEventListener("click",function(event){
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














    if(validar){

    }else{
        event.preventDefault();
        returnToPreviousPage();
    }

},false);
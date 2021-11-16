<?php
//recibir los datos

$tipo = $_POST['tipo'];
$zona = $_POST['zona'];
$dir = $_POST['dir'];
$dormi = $_POST['dormit'];
$precio = $_POST['precio'];
$metros = $_POST['metros'];
$foto = $_POST['foto'];
$obs = $_POST['obs'];

if(isset($_POST['extra']) && !empty($_POST['extra'])){
    $extras = $_POST['extra'];
}

$errores = "";

$validar = true;

//validar direccion

if(isset($_POST['dir']) && !empty($_POST['dir'])){
     
}else{
    //echo("Debe introducir una direccion</br>");
    $errores = $errores."Debe introducir una direccion</br>";
    $validar = false;
}

//validar numero de dormitorios

if(isset($_POST['dormit']) && !empty($_POST['dormit'])){
    
}else{
//echo("Debe introducir un numero de dormitorios</br>");
$errores = $errores."Debe introducir un numero de dormitorios</br>";
$validar = false;
}

//validar precio

if(isset($_POST['precio']) && !empty($_POST['precio'])){
    
}else{
    $errores = $errores."Debe introducir precio</br>";
    //echo("Debe introducir precio</br>");
    $validar = false;
}

//validar metros cuadrados

if(isset($_POST['metros']) && !empty($_POST['metros'])){
    
}else{
    $errores = $errores."Debe introducir un numero de metros cuadrados</br>";
    //echo("Debe introducir un numero de metros cuadrados</br>");
    $validar = false;
}

//final de validaciones
if($validar){

    echo("Estos son los datos introducidos:</br>");

    echo("<ul>Tipo: ".ucfirst($tipo)."</ul>");
    echo("<ul>Zona: ".ucfirst($zona)."</ul>");

    echo("Vivienda insertada en la base de datos</br>");
}else{
    echo("No se ha podido realizar la inserción debido a los siguientes errores:</br>");
    echo($errores);
    echo("Vivienda no insertada en la base de datos</br>");
}



echo($dir);
echo("</br>");
echo($dormi);
echo("</br>");
echo($precio);
echo("</br>");
echo($metros);
echo("</br>");

if(isset($_POST['extra']) && !empty($_POST['extra'])){
    foreach($extras as $seleccionado){
        echo($seleccionado." ");
    }
}

echo($foto);
echo("</br>");
echo($obs);
echo("</br>");



?>
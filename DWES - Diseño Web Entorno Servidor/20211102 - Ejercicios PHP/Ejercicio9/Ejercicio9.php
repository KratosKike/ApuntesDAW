<?php

$nombre = $_GET['nombre'];
$apellidos = $_GET['apellidos'];
$fecha = $_GET['fecha'];

//fecha usuario
echo $fecha;
echo "</br>";
//año usuario
$anoActual = date('Y-h-d');
echo $anoActual;
echo "</br>";
$edad = date_diff(date_create($anoActual),date_create($fecha));
echo "Tu edad es de " .$edad->format('%y');
echo "</br>";
echo "Tu edad es de ".$edad->days . " dias";




?>
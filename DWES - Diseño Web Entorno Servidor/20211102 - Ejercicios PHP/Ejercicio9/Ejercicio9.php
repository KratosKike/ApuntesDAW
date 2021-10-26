<?php

$nombre = $_GET['nombre'];
$apellidos = $_GET['apellidos'];
$fecha = $_GET['fecha'];

echo $fecha;
$ano = date('Y',strtotime($fecha));
echo "</br>";
echo $ano;


?>
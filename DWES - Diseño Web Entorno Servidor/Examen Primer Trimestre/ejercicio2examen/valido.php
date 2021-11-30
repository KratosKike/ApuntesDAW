<?php
session_start();
echo("Hola,
bienvenido de nuevo a nuestra aplicación ".$_SESSION['user']);
?>
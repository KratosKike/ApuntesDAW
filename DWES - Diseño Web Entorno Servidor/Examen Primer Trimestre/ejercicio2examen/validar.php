<?php
//Obtener datos
$user = $_POST['usuario'];
$pass = $_POST['pass'];


if($user == $pass){//comprobar si coincien

    //coinciden
    //redirigir a pagina valida
    session_start();
    $_SESSION=array();
    //unset($_SESSION['user']);
    $_SESSION['user']= $user;
    
    header("Location: valido.php");
}else{
    //no coinciden
    //redirigir a pagina no valida
    header("Location: novalido.php");

}
if($user==""||!isset($user)||empty($user)){
    header("Location: novalido.php");
}
if(empty($pass)){
    header("Location: novalido.php");
}



?>
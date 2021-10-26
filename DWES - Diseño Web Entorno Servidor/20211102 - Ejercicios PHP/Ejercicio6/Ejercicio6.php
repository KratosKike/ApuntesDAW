<?php

$tabla = $_GET['tabla'];

if(isset($tabla) && empty($tabla)){
    echo "Debe introducir algo";
}else{
    //echo "hay valor</br>";
    //comprobar que es un numero
    if(is_numeric($tabla)){
    //echo "es un numero";
    echo "<h1>TABLA DEL ".$tabla."</h1>";
    
    for($i=1;$i<=10;$i++){
        echo $tabla."*".$i." es ".$tabla*$i."</br>";
    }


    }else{
        echo "Debe introducir un numero";
    }

}

?>
<?php

$euro = $_GET['euro'];

//comrpobar que se ha introducido valor
if(isset($euro) && empty($euro)){
    echo "Debe introducir algo";
}else{
    //echo "hay valor</br>";
    //comprobar que es un numero
    if(is_numeric($euro)){
    //echo "es un numero";
    //Realizar el calculo de pesetas
        $peseta = 166.386;
        echo $euro."€ = ".$peseta*$euro."pts";
    }else{
        echo "Debe introducir un numero";
    }

}

echo "</br><a href=".$_SERVER["HTTP_REFERER"].">Volver</a>"

?>
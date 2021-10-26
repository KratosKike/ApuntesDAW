<?php

$euro = $_GET['euro'];
//variables monedas
$peseta = 166.386;
$dolar = 1.325;
$libras = 0.927;
$yenes = 118.232;
$francos = 1.515;

//comrpobar que se ha introducido valor
if(isset($euro) && empty($euro)){
    echo "Debe introducir algo";
}else{
    //echo "hay valor</br>";
    //comprobar que es un numero
    if(is_numeric($euro)){
    //echo "es un numero";
    //Obtener el tipo de moneda seleccionada
        $moneda = $_GET['moneda'];
        //switch para el tipo de moneda
        switch($moneda){
            case "dolar":
                echo $euro."€ = ".$dolar*$euro." dolares";
                break;
            case "libras":
                echo $euro."€ = ".$libras*$euro." libras";
                break;
            case "yenes":
                echo $euro."€ = ".$yenes*$euro." yenes";
                break;
            case "francos":
                echo $euro."€ = ".$francos*$euro." francos";
                break;
        }

        //echo $euro."€ = ".$peseta*$euro."pts";
    }else{
        echo "Debe introducir un numero";
    }

}

echo "</br><a href=".$_SERVER["HTTP_REFERER"].">Volver</a>"

?>
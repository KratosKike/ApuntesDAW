<?php
    $cadena = $_GET["Texto"];
    $caracter = $_GET["caracter"];

    //comprobar que solo sea un caracter

    $longitud = strlen($caracter);

    $cuenta = substr_count($cadena,$caracter);

    if($longitud == 1){
        echo "Hay un caracter, seguimos con el codigo</br>";
        echo "La palabra ".$caracter." se repite ".$cuenta."veces</br>";
    }else{
        echo "Ha petao</br>";
    }

    

    echo "Resultado cadena</br>" .$cadena;
    echo "</br>";
    echo "Resultado caracter</br>" .$caracter;
    echo "</br>";

    ?>
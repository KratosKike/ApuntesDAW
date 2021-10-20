<?php
    $cadena = $_GET["Texto"];

    $cadenaInv = strrev($cadena);

    if($cadena == $cadenaInv){
        echo "Es un palindromo";
    }else{
        echo "No es un palindromo";
    }


   echo "</br>";
    echo "Resultado cadena</br>" .$cadena;
    echo "Resultado cadena Inv</br>" .$cadenaInv;
    echo "</br>";


    ?>
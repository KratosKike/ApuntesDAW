<?php
    $cadena = $_GET["Texto"];

    $cuenta = substr_count($cadena," ");
    $cuenta++;

    $cadenaInv=strrev($cadena);

    echo $cadenaInv."</br>";

    
    echo "Resultado cadena</br>" .$cadena;
    echo "</br>";


    ?>
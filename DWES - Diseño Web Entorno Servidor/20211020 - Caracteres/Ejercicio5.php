<?php
    $cadena = $_GET["Texto"];

    $cuenta = substr_count($cadena," ");
    $cuenta++;

    $cadenaMayus=ucwords($cadena);

    echo $cadenaMayus."</br>";

    
    echo "Resultado cadena</br>" .$cadena;
    echo "</br>";


    ?>
<?php
    $cadena = $_GET["Texto"];

    $cuenta = substr_count($cadena," ");
    $cuenta++;

    echo "hay ".$cuenta." palabas</br>";

    
    echo "Resultado cadena</br>" .$cadena;
    echo "</br>";


    ?>
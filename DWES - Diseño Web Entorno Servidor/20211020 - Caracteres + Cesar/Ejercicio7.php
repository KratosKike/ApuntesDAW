<?php
    $cadena = $_GET["Texto"];
    $c1 = $_GET["caracter1"];
    $c2 = $_GET["caracter2"];

    
    $cadenaRep=str_replace($c1,$c2,$cadena);

    echo $cadenaRep."</br>";

    
    echo "Resultado cadena</br>" .$cadena;
    echo "</br>";


    ?>
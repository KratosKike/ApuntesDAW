<?php
    $cadena = $_GET["Texto"];

    $arrayCaracteres = str_split($cadena);

    echo "Resultado</br>" .$cadena;

    print_r($arrayCaracteres);
    echo "</br>";

    foreach ($arrayCaracteres as $letra){
        echo $letra."</br>";
    }

    

?>
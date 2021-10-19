<?php
    $cadena = $_GET["Texto"];
    $subCadena = $_GET["SubTexto"];
    $encuentra = strpos($cadena, $subCadena);

    echo "Resultado cadena</br>" .$cadena;
    echo "</br>";
    echo "Resultado subcadena</br>" .$subCadena;
    echo "</br>";

    if ($encuentra === false){
        echo "No se ha encontrado la subcadena en la cadena";
    }else{
        echo "Se ha encontrado la subcadena en la cadena";
    }

    ?>
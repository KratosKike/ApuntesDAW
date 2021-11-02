<?php
    $dato = $_GET['dato'];
    $numero = $_GET['numero'];

    //comprobar si queremos pasar de romano a decimal o viceversa
    if($dato == "romano"){
        echo "dato romano</br>";
        echo $numero;
        echo "</br>";

        $letrasRomanas = array(
            'M' => 1000,
            'CM' => 900,
            'D' => 500,
            'CD' => 400,
            'C' => 100,
            'XC' => 90,
            'L' => 50,
            'XL' => 40,
            'X' => 10,
            'IX' => 9,
            'V' => 5,
            'IV' => 4,
            'I' => 1,
        );

        $valor = 0;

        foreach ($letrasRomanas as $key => $value) {
            while (strpos($numero, $key) === 0) {
                $valor += $value;
                $numero = substr($numero, strlen($key));
            }
        }

        echo $valor;

    }else{
        echo "dato decimal</br>";

        $letrasRomanas = array(
            'M' => 1000,
            'CM' => 900,
            'D' => 500,
            'CD' => 400,
            'C' => 100,
            'XC' => 90,
            'L' => 50,
            'XL' => 40,
            'X' => 10,
            'IX' => 9,
            'V' => 5,
            'IV' => 4,
            'I' => 1,
        );

        $valor = '';
        while ($numero > 0) {
            foreach ($letrasRomanas as $letras => $int) {
                if($numero >= $int) {
                    $numero -= $int;
                    $valor .= $letras;
                    break;
                }
            }
        }

        echo $valor;


    }
?>
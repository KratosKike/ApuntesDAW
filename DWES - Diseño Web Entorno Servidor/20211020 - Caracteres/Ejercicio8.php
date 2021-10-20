<?php
    $cadena = $_GET["Texto"];

    $arrayCaracteres = str_split($cadena);
    //$cadenaMayus=strtoupper($cadena);

    echo "Resultado</br>";
   foreach($arrayCaracteres as $caracter){
       if(ctype_lower($caracter))//¿es minuscula?

        $cadenaN=mb_strtoupper($caracter);

        else{
            $cadenaN=mb_strtolower($caracter);
        }

       echo($cadenaN);
   }

   echo "</br>";
    //echo "Resultado cadena</br>" .$cadenaMayus;
    echo "</br>";
   echo "</br>";
    echo "Resultado cadena</br>" .$cadena;
    echo "</br>";


    ?>
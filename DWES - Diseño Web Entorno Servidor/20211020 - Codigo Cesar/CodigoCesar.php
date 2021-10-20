<?php

header('Content-Type: text/html; charset=UTF-8');

$cadena = $_GET["Texto"];
$permitidos = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

$bruto1="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
$bruto2="DEFGHIJKLMNÑOPQRSTUVWXYZABC";

echo "Cadena: </br>".$cadena;
echo "</br>";


$arraycaracteres = str_split($cadena);
$brutoarray1 = str_split($bruto1);
$brutoarray2 = str_split($bruto2);

/*foreach($arraycaracteres as $caracter){

    if(strpos($permitidos,$caracter)){//¿Esta en el abecedario?

        $ncaracter= ord($caracter);
    $caractercodificado = chr($ncaracter+3);

    //echo $ncaracter;
    echo $caractercodificado;
    }else{
        echo $caracter;
    }

    
}*/
echo "</br>";

/*foreach($arraycaracteres as $caracter){
    if(strpos($permitidos,$caracter)){//¿Esta en el abecedario?
        //detectar posicion del caracter
        $posC=strpos($bruto1,$caracter);
        echo $posC;
        $nuevoCaract=$brutoarray1[$posC];
        echo $nuevoCaract;
    }else{
        echo $caracter;
    }
}*/
foreach($arraycaracteres as $caracter){

    if(strpos($permitidos,$caracter)){//¿Esta en el abecedario?

        //pasar a mayuscula
        $caracterMayus=strtoupper($caracter);
        //echo $caracterMayus;

        if($caracter =="a"){
            echo "D";
        }else{
            //detectar posicion del caracter
            
            //echo $caracter;
            //$posC=strpos($bruto1,$caracterMayus);
            $posC=stripos($bruto1,$caracterMayus);
            //echo $posC;
            $utf = utf8_encode($bruto2[$posC]);
            //echo $bruto2[$posC];
            echo $utf;
        }

    
    
    
    }else{
        echo $caracter;
    }
        
    
}









?>
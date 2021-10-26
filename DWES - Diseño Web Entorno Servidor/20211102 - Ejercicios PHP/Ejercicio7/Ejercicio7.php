<?php

$numero = rand(1,20);

echo "Ha tocado el ".$numero."</br>";
$suma = 0;
for($i=0;$i<=$numero;$i++){
    $suma = $suma + $i;
}

echo "Resultado = ".$suma;

?>
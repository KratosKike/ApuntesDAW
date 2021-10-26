<?php


//Obtenemos la hora del dia
$tiempo = date("H");

echo "<h1>Pagina de bienvenida</h1></br>";

//condicionales para cada franja del dia
if($tiempo > 8 && $tiempo < 13){
    echo "Buenos dias";
}elseif($tiempo>=13 && $tiempo<20){
    echo "Buenas tardes";
}else{
    echo "Buenas noches";
}

//echo de prueba
echo "</br>".$tiempo;

?>
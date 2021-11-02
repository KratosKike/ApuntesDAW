<?php
$nombrecookie="color";
$color = $_POST['color'];
//echo $color;
setcookie("color",$color,0);

if (isset($_COOKIE['color'])){
    $colorCookie = $_COOKIE['color'];
    echo $colorCookie;

    switch($colorCookie){
        case "rojo":
            echo '<body style="background-color:red">';

        break;
        case "azul":
            echo '<body style="background-color:blue">';

        break;
        case "verde":
            echo '<body style="background-color:green">';

        break;
        case "ninguno":
            echo '<body style="background-color:white">';

        break;
    }


}else{
    echo "cookie no creada";
}

echo "<a href='Ejercicio11.html'>Volver</a>"

?>
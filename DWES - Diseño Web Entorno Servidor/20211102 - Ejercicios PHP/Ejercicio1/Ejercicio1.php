<!--Crear una página que muestre una tabla
de conversión de euros a pesetas como
la que aparece en la figura 1. La
equivalencia es 1€ = 166,386 pts.-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    echo "<h1>Conversion euros/pesetas</h1>";
    $peseta = 166.386;
    for($i=1;$i<=10;$i++){
        echo $i."€ = ".$peseta*$i."pts";
        echo "</br>";
    }
    ?>
</body>
</html>

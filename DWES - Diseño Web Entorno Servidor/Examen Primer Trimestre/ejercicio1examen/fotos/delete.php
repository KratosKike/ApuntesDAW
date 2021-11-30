<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/botonera.css">
    <title>Document</title>
</head>
<body>

<?php include_once "databaseManagement.inc.php";

    //obtenemos id del gato
    $id = $_GET['varid'];

    eliminarGato($id);

    echo("<h1>El elemento con ID: ".$id." se ha borrado correctamente</h1>");
    echo("<a href='list.php'>Volver</a>");
?>


    <nav>
        <ul>
            <li><a href="index.php">Página principal</a></li>
            <li><a href="create.php">Nuevo elemento</a></li>
            <li><a class="active" href="list.php">Lista elementos</a></li>
            <li><a href="import.php">Importar elementos</a></li>
        </ul>
    </nav>
</body>
</html>
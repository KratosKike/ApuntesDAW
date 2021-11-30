<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/botonera.css">
    <link rel="stylesheet" href="css/table.css">
    <link rel="stylesheet" href="fontawesome-free-5.15.4-web/css/all.min.css">
    <title>Lista elementos</title>
</head>
<body>

<?php include_once "databaseManagement.inc.php";

//obtener array de gatos

$arraygatos=obtenerTodos();

?>
    <nav>
        <ul>
            <li><a href="index.php">Página principal</a></li>
            <li><a href="create.php">Nuevo elemento</a></li>
            <li><a class="active" href="list.php">Lista elementos</a></li>
            <li><a href="import.php">Importar elementos</a></li>
        </ul>
    </nav>
    <table class="styled-table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Raza</th>
                <th>DNI</th>
                <th>Fecha</th>
                <th>Detalle</th>
                <th>Editar</th>
                <th>Borrar</th>
            </tr>
        </thead>
        <tbody>
           <!-- Aquí tendrás que mostrar las filas de la tabla-->
            <?php
            foreach($arraygatos as $gato){
                echo("<tr>");
                echo("<td>".$gato['nombre']."</td>");
                echo("<td>".$gato['raza']."</td>");
                echo("<td>".$gato['dni']."</td>");
                echo("<td>".$gato['fechaAlta']."</td>");
                echo("<td><a href='view.php?varid=".$gato['id']."'><i class='fas fa-eye'></i></a></td>");
                //echo("<td><a href='view.php?varid=".$gato['id']."'>Ver</a></td>");
                echo("<td><a href='edit.php?varid=".$gato['id']."'><i class='fas fa-edit'></i></a></td>");
                echo("<td><a href='delete.php?varid=".$gato['id']."'><i class='far fa-trash-alt'></i></a></td>");
                echo("</tr>");
            }
            ?>
        </tbody>
    </table>
</body>
</html>
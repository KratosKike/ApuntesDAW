<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/botonera.css">
        <link rel="stylesheet" href="css/form.css">
        <title>Edita elemento</title>
    </head>
    <body>

    <?php include_once "databaseManagement.inc.php";

    //obtenemos id del gato
    $id = $_GET['varid'];

    $gato = obtenerGato($id);

    ?>
        <nav>
            <ul>
                <li><a href="index.php">Página principal</a></li>
                <li><a href="create.php">Nuevo elemento</a></li>
                <li><a class="active" href="list.php">Lista elementos</a></li>
                <li><a href="import.php">Importar elementos</a></li>
            </ul>
        </nav>
        <form class="form-register">
            <h2 class="form-titulo">Características:</h2>
            <div class="contenedor-inputs">
                <input type="hidden" name="id"><!--aquí va el id, es hidden por lo tanto no es visible en la web, pero si accesible desde PHP -->
                <input type="text" name="texto1" value="<?php echo($gato['nombre'])?>" class="input-100" required>
                <input type="text" name="text2" value="<?php echo($gato['raza'])?>" class="input-100" required>
                <input type="text" name="texto3" value="<?php echo($gato['sexo'])?>" class="input-100" required>
                <input type="number" name="numero1" value="<?php echo($gato['edad'])?>" class="input-48" required>
                <input type="number" name="numero2" value="<?php echo($gato['dni'])?>" class="input-48"required >
                <input type="date" name="fecha" value="<?php echo($gato['fechaAlta'])?>" class="input-100" required>
                <img name="avatarActual" width=200px src="<?php echo("images/".$gato['foto'])?>"><!-- Aquí tienes que cargar la imagen actual -->
                <input type="file" name="avatar" accept="image/png, image/jpeg" class="input-100" >
                <input type="submit" value="Editar" class="btn-enviar">
                <div id="errores"></div>
            </div>
        </form>
    </body>
</html>
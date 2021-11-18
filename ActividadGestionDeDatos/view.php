<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/botonera.css">
        <link rel="stylesheet" href="css/view.css">
        <title>Vista detalle</title>
    </head>
    <body>

        <?php include_once "databaseManagement.inc.php";

        //obtenemos id del gato
        $id = $_GET['varid'];
        //echo ($id);
        //conectar a la BD y buscar gato con la id dada
        $gato = obtenerGato($id);

        //comprobar que existe la foto


        $ficherofoto="images/".$gato['foto'];

        if(file_exists($ficherofoto)){
            $foto="images/".$gato['foto'];

        }else{
            $foto="images/NO.png";
        }



        ?>


        <nav>
            <ul>
                <li><a href="index.php">Página principal</a></li>
                <li><a href="create.php">Nuevo elemento</a></li>
                <li><a class="active" href="list.php">Lista elementos</a></li>
                <li><a href="import.php">Importar elementos</a></li>
            </ul>
        </nav>  

        <div class="container">
            <header>
                <div class="bio">
                    <img src="<?php echo($foto)?>" alt="background" class="bg"><!--aquí va el link a la imagen-->
                    <div>
                        <h3><?php echo($gato['nombre'])?></h3><!--aquí va el valor del texto 1-->
                        <p><?php echo($gato['raza'])?></p><!-- aquí va el valor del texto 2--> 
                        <p><?php echo($gato['sexo'])?></p><!-- aquí va el valor del texto 3-->
                    </div>
                </div>
            </header>

            <div class="content">
                <div class="data">
                    <ul>
                        <li>
                        <?php echo($gato['dni'])?> <!-- aquí va el valor del número 1-->
                            <span>DNI</span><!-- pon aquí el nombre de tu número 1-->
                        </li>
                        <li>
                        <?php echo($gato['edad'])?> <!-- aquí va el valor del número 2-->
                            <span>Edad</span><!-- pon aquí el nombre de tu número 2-->
                        </li>
                        <li>
                        <?php echo($gato['fechaAlta'])?> <!-- aquí va el valor de la fecha-->
                            <span>Fecha</span><!-- pon aquí el nombre de tu fecha-->
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </body>
</html>
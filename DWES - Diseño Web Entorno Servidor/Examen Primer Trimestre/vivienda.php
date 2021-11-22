<?php
//recibir los datos

$tipo = $_POST['tipo'];
$zona = $_POST['zona'];
$dir = $_POST['dir'];
if(isset($_POST['dormit']) && !empty($_POST['dormit'])){
    $dormi = $_POST['dormit'];
}
$precio = $_POST['precio'];
$metros = $_POST['metros'];
//$foto = $_POST['file'];
$obs = $_POST['obs'];
$extrasString="";

if(isset($_POST['extra']) && !empty($_POST['extra'])){
    $extras = $_POST['extra'];
}

$errores = "";

$validar = true;
$validarFoto = true;

//fichero foto

if(isset($_POST['submit'])){
    $dominio = dirname(__DIR__);
    $name       = $_FILES['file']['name'];  
    $temp_name  = $_FILES['file']['tmp_name'];  
    $ext       = $_FILES['file']['type'];
    //echo($ext);
    if(isset($name) and !empty($name)){
        if($ext == "image/jpeg" || $ext == "image/png"){
            $direccion = $dominio.'\Examen Primer Trimestre\fotos\\';      
            if(move_uploaded_file($temp_name, $direccion.$name)){
                echo 'File uploaded successfully';
            }
        }else{
            $validarFoto = false;
            $errores = $errores."Archivo no valido, se subira sin la foto</br>";
            $name="";
        }
        
    } else {
        //echo 'You should select a file to upload !!';
    }
}



//validar direccion

if(isset($_POST['dir']) && !empty($_POST['dir'])){
     
}else{
    //echo("Debe introducir una direccion</br>");
    $errores = $errores."Debe introducir una direccion</br>";
    $validar = false;
}

//validar numero de dormitorios

if(isset($_POST['dormit']) && !empty($_POST['dormit'])){
    
}else{
//echo("Debe introducir un numero de dormitorios</br>");
$errores = $errores."Debe introducir un numero de dormitorios</br>";
$validar = false;
}

//validar precio

if(isset($_POST['precio']) && !empty($_POST['precio'])){
    
    if(!is_numeric($_POST['precio'])){
        $errores = $errores."Precio debe de ser un numerico</br>";
        $validar = false;
    }

}else{
    $errores = $errores."Debe introducir precio</br>";
    //echo("Debe introducir precio</br>");
    $validar = false;
}

//validar metros cuadrados

if(isset($_POST['metros']) && !empty($_POST['metros'])){

    if(!is_numeric($_POST['metros'])){
        $errores = $errores."Metros debe de ser un numerico</br>";
        $validar = false;
    }
    
}else{
    $errores = $errores."Debe introducir un numero de metros cuadrados</br>";
    //echo("Debe introducir un numero de metros cuadrados</br>");
    $validar = false;
}

//final de validaciones
if($validar){

    echo("Estos son los datos introducidos:</br>");

    echo("<ul>Tipo: ".ucfirst($tipo)."</ul>");
    echo("<ul>Zona: ".ucfirst($zona)."</ul>");
    echo("<ul>Direccion: ".ucfirst($dir)."</ul>");
    echo("<ul>Numero de dormitorios: ".$dormi."</ul>");
    echo("<ul>Precio: ".$precio." euros</ul>");
    echo("<ul>Tamaño: ".$metros." metros cuadrados</ul>");
    echo("<ul>Extras: ");
    if(isset($_POST['extra']) && !empty($_POST['extra'])){
        foreach($extras as $seleccionado){
            echo(ucfirst($seleccionado)." ");
            $extrasString=$extrasString.ucfirst($seleccionado)." ";
        }
    }
    echo("</ul>");
    //echo("<ul>Foto:<img src='fotos/".$name."'></ul>");
    if($validarFoto){
        echo("<ul>Foto: <a href='fotos/".$name."'>$name</a></ul>");
    }else{
        echo("<ul>Foto: </ul>");
    }
    
    
    echo("<ul>Observaciones: ".$obs."</ul>");

    //echo($extrasString);

    //bloque de base de datos

    //datos base de datos
    $usuario ="root";
    $password="root";
    $servidor="localhost";
    $bd="lindavista";
    //conexion bd
    $conexion = mysqli_connect( $servidor, $usuario, $password ) or die ("No se ha podido conectar al servidor de Base de datos");
    $db = mysqli_select_db( $conexion, $bd ) or die ( "No se ha podido conectar a la base de datos" );

    if($conexion){
        //echo("Conexion a la base de datos realizada</br>");

        //comprobar si existe la talba viviendas
        $val = mysqli_query($conexion,'select * from `viviendas` LIMIT 1');

        if($val !== FALSE){
            //Existe, se procede a insertar el dato a la bd
            //echo("Existe tabla viviendas");
            $sql="INSERT INTO `viviendas`(`id`, `tipo`, `zona`, `direccion`, `ndormitorios`, `precio`, `tamano`, `extras`, `foto`, `observaciones`) VALUES ('','".$tipo."','".$zona."','".$dir."','".$dormi."','".$precio."','".$metros."','".$extrasString."','".$name."','".$obs."')";
            //echo($sql);
            $resultado = mysqli_query($conexion,$sql) or die ( "Algo ha ido mal en la consulta a la base de datos");


        }else{
            //No existe la tabla viviendas, se procede a crear la tabla
            echo("No existe la tabla viviendas, creando tabla viviendas...</br>");
            //CREATE TABLE `lindavista`.`viviendas` ( `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT , `tipo` ENUM('Piso','Adosado','Chalet','Casa') NOT NULL , `zona` ENUM('Centro','Nervion','Triana','Aljarafe','Macarena') NOT NULL , `direccion` VARCHAR(100) NOT NULL , `ndormitorios` ENUM('1','2','3','4','5') NOT NULL , `precio` INT NOT NULL , `tamano` INT NOT NULL , `extras` SET('Piscina','Jardin','Garaje','') NOT NULL , `foto` VARCHAR(50) NULL , `observaciones` TEXT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
        }

    }


    //comentarios finales
    echo($errores);
    echo("Vivienda insertada en la base de datos</br>");

    echo("[<a href='ejercicio1.html'>Insertar otra vivienda</a>]");
}else{
    echo("No se ha podido realizar la inserción debido a los siguientes errores:</br>");
    echo($errores);
    echo("Vivienda no insertada en la base de datos</br>");
    echo("[<a href='ejercicio1.html'>Volver</a>]");
}

?>

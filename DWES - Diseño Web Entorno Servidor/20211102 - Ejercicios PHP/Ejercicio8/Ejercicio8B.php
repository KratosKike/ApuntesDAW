<?php

//Obetener datos insertar
$busqueda = $_POST['busqueda'];
$opcion = $_POST['opcion'];


//datos de la DB
$usuario = "root";
$password = "";
$servidor = "localhost";
$bd = "DIRECTORIO";

// creación de la conexión a la base de datos con mysql_connect()
$conexion = mysqli_connect( $servidor, $usuario, "" ) or die ("No se ha podido conectar al servidor de Base de datos");
$db = mysqli_select_db( $conexion, $bd ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );
if($conexion){
    echo "Ha conectado</br>";
}

//separacion para cada opcion
switch($opcion){
    case "apellido":


        //sentencia sql
        $sql = "SELECT `id_cliente`, `nombre`, `apellidos`, 
        `direccion`, `poblacion`, `codigoPostal`, `telefono`, 
        `email` 
        FROM `clientes` 
        WHERE `apellidos`='".$busqueda."'";

        $resultado = mysqli_query($conexion,$sql)or die ( "Algo ha ido mal en la consulta a la base de datos");


        //comprobar numero de filas
        if($resultado = mysqli_query($conexion,$sql)){
            echo "Filas de datos: ".mysqli_num_rows($resultado);
        
        }else{
            echo "no va";
        }
        echo "</br>";

        //imprimir las filas
        while ($columna = mysqli_fetch_array( $resultado )){
            echo $columna['id_cliente']." ".$columna['nombre']." ".$columna['apellidos'];
            echo "</br>";
        }
	


        //comprobar que tiene espacios 
        //coger el primer apellido
        /*$apellidoPrimero  =stristr($busqueda, ' ', true);
        $apellidoFinal = rtrim($apellidoPrimero, " ");
        echo "Busqueda = ".$apellidoFinal;*/
        break;
    case "telefono":
        //sentencia sql
        $sql = "SELECT `id_cliente`, `nombre`, `apellidos`, 
        `direccion`, `poblacion`, `codigoPostal`, `telefono`, 
        `email` 
        FROM `clientes` 
        WHERE `telefono`='".$busqueda."'";

        $resultado = mysqli_query($conexion,$sql)or die ( "Algo ha ido mal en la consulta a la base de datos");

        //comprobar numero de filas
        if($resultado = mysqli_query($conexion,$sql)){
            echo "Filas de datos: ".mysqli_num_rows($resultado);
        
        }else{
            echo "no va";
        }
        echo "</br>";

        //imprimir las filas
        while ($columna = mysqli_fetch_array( $resultado )){
            echo $columna['id_cliente']." ".$columna['nombre']." ".$columna['apellidos'];
            echo "</br>";
        }

        break;

}


?>
<?php

//datos base de datos
$usuario ="root";
$password="";
$servidor="localhost";
$bd="lindavista";
//conexion bd
$conexion = mysqli_connect( $servidor, $usuario, "" ) or die ("No se ha podido conectar al servidor de Base de datos");
$db = mysqli_select_db( $conexion, $bd ) or die ( "No se ha podido conectar a la base de datos" );


echo("Mostras viviendas de tipo:");


echo("</br>");


if($conexion){
    //echo("Conexion a la base de datos realizada</br>");

    //realizamos busqueda de viviendas
    $sql="SELECT * FROM viviendas";
    $resultado = mysqli_query( $conexion, $sql ) or die ( "Algo ha ido mal en la consulta a la base de datos");

    //montamos la tabla para guardar los datos

    echo("<table>");
    echo("<tr>");
    echo("<th>Tipo</th><th>Zona</th><th>Dormitorios</th><th>Precio</th><th>Tamaño</th><th>Extras</th><th>Foto</th>");
    echo("</tr>");

    //bucle que recorre la array de respuestas dada por la tabla
    while($fila = mysqli_fetch_array($resultado)){

        echo("<tr>");
        //echo("<td>".$fila['tipo']."</td><td>".$fila['zona']."</td><td>".$fila['ndormitorios']."</td><td>".$fila['precio']."</td><td>".$fila['tamano']."</td><td>".$fila['extras']."</td><td>".$fila['foto']."</td>");
        echo("<td>".$fila['tipo']."</td><td>".$fila['zona']."</td><td>".$fila['ndormitorios']."</td><td>".$fila['precio']."</td><td>".$fila['tamano']."</td><td>".$fila['extras']."</td><td><a href='fotos/".$fila['foto']."'>".$fila['foto']."</a></td>");

        echo("</tr>");
    }
    
    
}else{

}
echo("[<a href='ejercicio1.html'>Insertar una nueva vivienda</a>]</br>");



?>

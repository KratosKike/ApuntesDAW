<?php

//datos base de datos
$usuario ="root";
$password="root";
$servidor="localhost";
$bd="lindavista";
//conexion bd
$conexion = mysqli_connect( $servidor, $usuario, $password ) or die ("No se ha podido conectar al servidor de Base de datos");
$db = mysqli_select_db( $conexion, $bd ) or die ( "No se ha podido conectar a la base de datos" );

?>
<form action="muestras.php" method="get">
    <p>Mostras viviendas de tipo:
        <select name="tipo" id="">
            <option value="todos">Todos</option>
            <option value="piso">Piso</option>
            <option value="adosado">Adosado</option>
            <option value="chalet">Chalet</option>
            <option value="casa">Casa</option>
        </select>
        <input type="submit" value="Actualizar">
    </p>
</form>


<?php
echo("</br>");


//obtener tipo

if(isset($_GET['tipo'])){
    $tipo=$_GET['tipo'];
}else{
    $tipo=" ";
}



switch($tipo){

    case "todos":
        $sql="SELECT * FROM viviendas";
        break;

    case "piso":
        $sql="SELECT * FROM `viviendas` WHERE `tipo`= 'piso';";
        break;

    case "adosado":
        $sql="SELECT * FROM `viviendas` WHERE `tipo`= 'adosado';";
        break;

    case "chalet":
        $sql="SELECT * FROM `viviendas` WHERE `tipo`= 'chalet';";
        break;
   
    case "casa":
        $sql="SELECT * FROM `viviendas` WHERE `tipo`= 'casa';";
        break;

    default:
        $sql="SELECT * FROM viviendas";
    break;

}


if($conexion){
    //echo("Conexion a la base de datos realizada</br>");

    //realizamos busqueda de viviendas
    //$sql="SELECT * FROM viviendas";
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

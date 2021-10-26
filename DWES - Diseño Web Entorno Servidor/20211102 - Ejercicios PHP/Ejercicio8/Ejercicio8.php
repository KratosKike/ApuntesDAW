<?php

//Obetener datos insertar
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$direccion = $_POST['direccion'];
$poblacion = $_POST['poblacion'];
$cp = $_POST['cp'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];

//datos de la DB
$usuario = "root";
$password = "";
$servidor = "localhost";
$bd = "DIRECTORIO";

// creación de la conexión a la base de datos con mysql_connect()
$conexion = mysqli_connect( $servidor, $usuario, "" ) or die ("No se ha podido conectar al servidor de Base de datos");
$db = mysqli_select_db( $conexion, $bd ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );


/*$conexion = mysqli_connect("localhost","root","","DIRECTORIO");

//comprobar conexion
if(myslq_errno($conexion)){
    echo "Failed to connect to MySQL: ".mysqli_connect_error();
    exit();
}*/

if($conexion){
    echo "Ha conectado";
}

//creamos sentencia sql para la insercion
$sql= "INSERT INTO `clientes`(`id_cliente`, 
`nombre`, `apellidos`, `direccion`, `poblacion`, 
`codigoPostal`, `telefono`, `email`) 
VALUES ('','".$nombre."','".$apellidos."','".$direccion."',
'".$poblacion."','".$cp."','".$telefono."','".$email."')";

$resultado = mysqli_query($conexion,$sql)or die ( "Algo ha ido mal en la consulta a la base de datos");

if($resultado){
    echo "Se ha realizado la insercion correctamente";
}else{
    echo "pues va a ser que no";
}



/* Consulta de ejemplo
$consulta = "SELECT * FROM clientes";
$resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");

echo "<table borde='2'>";
	echo "<tr>";
	echo "<th>Dato</th>";
	echo "<th>Dato</th>";
    echo "<th>Dato</th>";
    echo "<th>Dato</th>";
    echo "<th>Dato</th>";
    echo "<th>Dato</th>";
    echo "<th>Dato</th>";
	echo "</tr>";

    // Bucle while que recorre cada registro y muestra cada campo en la tabla.
	while ($columna = mysqli_fetch_array( $resultado ))
	{
		echo "<tr>";
		echo "<td>" . $columna['id_cliente'] . "</td><td>" . $columna['nombre'] . "</td>";
		echo "</tr>";
	}

    echo "</table>"; // Fin de la tabla

*/
//query
/*if($result = mysqli_query($conexion,$consulta)){
    echo "Filas de datos: ".mysqli_num_rows($result);

}else{
    echo "no va";
}*/

mysqli_close($conexion);


?>
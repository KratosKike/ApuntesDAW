<?php

/*Se pretende obtener información de un fichero a partir de 
su nombre.
Para ello se van a definir las siguientes funciones:
a) string calcula_extension (string)
Recibe una cadena de caracteres que representa el nombre de 
un fichero y devuelve una cadena con la extensión del fichero.
Ejemplo: la llamada
$extension = calcula_extension (“curriculum.pdf”);
devuelve en la variable $extension el valor “PDF”.
b) string tipo_fichero (string)
Recibe una cadena de caracteres que representa una extensión 
de fichero y devuelve una cadena con el tipo de fichero que 
corresponde a dicha extensión (véase Tabla I).
Ejemplo: la llamada
$tipo = tipo_fichero (“PDF”);
devuelve en la variable $tipo el valor “Documento Adobe PDF”.
*/

$archivo = $_GET['archivo'];
echo $archivo."<br>";
//comprobar si tiene punto
$punto = strpos($archivo, ".");
if($punto === false){
    echo "Ha petao";
}else{
    echo "Hay punto</br>";
    $extension = calcula_extension($archivo);
    echo $extension."</br>";
    //una vez obtenido la extension, definir su funcion
    $solucion =tipo_fichero($extension);
    echo $solucion;


}

function calcula_extension($cadena){
    //obtener extension
    $extension =stristr($cadena, '.');
    //retirar punto
    $extensionFinal = ltrim($extension, '.');
    return $extensionFinal;
}

function tipo_fichero($extension){
    //pasar a mayusculas
    $extensionMayus = strtoupper($extension);
    switch($extensionMayus){
        case "EXE":
            return "Archivo Ejecutable";
            break;
        case "PDF":
            return "Documento Adobe PDF";
            break;
        case "TXT":
            return "Documento de texto";
            break;
        case "HTML": case "HTM":
            return "Documento HTML";
            break;
        case "PPT":
            return "Presentacion Microsoft Powerpoint";
            break;
        case "DOC":
            return "Documento Microsoft Word";
            break;
        case "GIF":
            return "Imagen GIF";
            break;
        case "JPG":
            return "Imagen JPG";
            break;
        case "ZIP":
            return "Archivo comprimido ZIP";
            break;
        default:
            return "Archivo ".$extensionMayus;
    }


}


?>

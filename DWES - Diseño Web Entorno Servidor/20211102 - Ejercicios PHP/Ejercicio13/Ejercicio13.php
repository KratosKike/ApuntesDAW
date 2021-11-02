<?php

if(isset($_COOKIE['visitas'])){
    setcookie( 'visitas', $_COOKIE[ 'visitas' ] + 1, time() + 3600 * 24 );
    echo "Has entrado ".$_COOKIE['visitas']." veces";
}else{
    setcookie( 'visitas', 1, time() + 3600 * 24 );
    echo "Has entrado por primera vez a la pagina";

}
//borrar cookie
//setcookie("visitas",0,time()-60);

?>

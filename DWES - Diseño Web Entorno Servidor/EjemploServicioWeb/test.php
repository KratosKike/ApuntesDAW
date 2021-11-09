<?php
include('../apache/lib/nusoap.php');
$client = new nusoap_client('http://www.lapolitecnica.net/webservices/servicio.php?wsdl','wsdl');

print($client);

$err = $client->getError();
if($err){
    echo "Error de comando".$err;
}

?>
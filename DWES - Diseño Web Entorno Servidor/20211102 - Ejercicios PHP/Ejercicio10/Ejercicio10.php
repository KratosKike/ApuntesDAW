<?php
$array=array();
echo "Array: </br>";
for($i=0;$i<10;$i++){
    $array[$i]=rand(0,1);
    echo $array[$i]." ";
}
echo "</br>Array Complementaria: </br>";
$arrayComp=array();

for($i=0;$i<10;$i++){
    //comprobar array principal
    $num=$array[$i];
    //if con el numero para poner el opuesto
    if($num==1){
        $arrayComp[$i]=0;
    }else{
        $arrayComp[$i]=1;
    }
    
    echo $arrayComp[$i]." ";
}

$array2=array();
echo "</br>Array: </br>";
for($i=0;$i<10;$i++){
    $array2[$i]=rand(0,1);
    echo $array2[$i]." ";
}
echo "</br>Array cambio de bit: </br>";
$arrayCamb=array();

for($i=0;$i<9;$i++){
    //comparar array anterior
    if($array2[$i] == $array2[$i+1]){
        $arrayCamb[$i]=0;
    }else{
        $arrayCamb[$i]=1;
    }
}

for($i=0;$i<9;$i++){

    echo $arrayCamb[$i]." ";
}

$array3=array();
echo "</br>Array: </br>";
for($i=0;$i<10;$i++){
    $array3[$i]=rand(0,1);
    echo $array3[$i]." ";
}
echo "</br>Array de Grey: </br>";
$arrayGrey=array();
for($i=0;$i<9;$i++){
    //comparar array anterior
    if($array3[$i] == $array3[$i+1]){
        $arrayGrey[$i]=0;
    }else{
        $arrayGrey[$i]=1;
    }
}
//echo $arrayGrey[9];

for($i=0;$i<9;$i++){

    echo $arrayGrey[$i]." ";
}
echo $array3[9];
//echo $arrayGrey[9];

$array4=array();
echo "</br>Array Logico1: </br>";
for($i=0;$i<10;$i++){
    $array4[$i]=rand(0,1);
    echo $array4[$i]." ";
}
$array5=array();
echo "</br>Array Logico2: </br>";
for($i=0;$i<10;$i++){
    $array5[$i]=rand(0,1);
    echo $array5[$i]." ";
}
$array6=array();
echo "</br>Array Logico Y: </br>";
for($i=0;$i<10;$i++){

    if($array4[$i]==1 && $array5[$i]==1){
        $array6[$i]=1;
    }else{
        $array6[$i]=0;
    }


    echo $array6[$i]." ";
}

?>
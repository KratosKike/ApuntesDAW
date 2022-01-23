window.onload=init;

function init(){
$("#img1").click(function(){
    cargarfoto("img1","Boruto");
});
$("#img2").click(function(){
    cargarfoto("img2","Attack on Titan");
});
$("#img3").click(function(){
    cargarfoto("img3","One Piece");
});
$("#img4").click(function(){
    cargarfoto("img4","Demon Slayer");
});


}

function cargarfoto(imagen,nombre){
    //alert("Funciona");
    //$("#principal").src="img/"+imagen+".webp";
    document.getElementById("principal").src="img/"+imagen+".webp";
    document.getElementById("nombreAnime").innerHTML=nombre;
}
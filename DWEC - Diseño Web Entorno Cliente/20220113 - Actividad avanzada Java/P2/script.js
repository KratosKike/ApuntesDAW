window.onload=init;

function init(){
document.getElementById("img1").addEventListener("click",function(){
    cargarfoto("img1","Boruto");
})
document.getElementById("img2").addEventListener("click",function(){
    cargarfoto("img2","Attack on Titan");
})
document.getElementById("img3").addEventListener("click",function(){
    cargarfoto("img3","One Piece");
})
document.getElementById("img4").addEventListener("click",function(){
    cargarfoto("img4","Demon Slayer");
})

}

function cargarfoto(imagen,nombre){
    //alert("Funciona");
    document.getElementById("principal").src="img/"+imagen+".webp";
    document.getElementById("nombreAnime").innerHTML=nombre;
}
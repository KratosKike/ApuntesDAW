window.onload=init;

function init(){
document.getElementById("img1").addEventListener("click",function(){
    cargarfoto("img1");
})
document.getElementById("img2").addEventListener("click",function(){
    cargarfoto("img2");
})
document.getElementById("img3").addEventListener("click",function(){
    cargarfoto("img3");
})
document.getElementById("img4").addEventListener("click",function(){
    cargarfoto("img4");
})

}

function cargarfoto(imagen){
    //alert("Funciona");
    document.getElementById("principal").src="img/"+imagen+".webp";
}
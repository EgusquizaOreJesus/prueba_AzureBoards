'use strict'

// BOM - Browser Object Model
// Como puedo yo trabajar con los elementos que me da el navegador web

// que tamaño tiene la ventana del navegador
function getBom(){
    console.log(window.innerHeight); // altura de la ventana
    console.log(window.innerWidth); // ancho de la ventana
    console.log(screen.width); // ancho de la pantalla
    console.log(screen.height); // altura de la pantalla
    console.log(window.location); // url de la pagina
}

// redirigir a otra pagina
function redirect(url){
    window.location.href = url;
}

// abrir una ventana nueva
function abrirVentana(url){
    window.open(url, "", "width=400, height=300");  // abre una ventana nueva con el tamaño especificado
}
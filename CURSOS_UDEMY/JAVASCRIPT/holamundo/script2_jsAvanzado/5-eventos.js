'use strict'

// Eventos

// Focus
// se ejecuta cuando se hace focus en un input, osea cuando se selecciona el input
var input = document.querySelector("#campo_nombre"); // selecciona el elemento html con el id campo_nombre

input.addEventListener('focus', function(){
    console.log("[focus] Estas dentro del input");
});

// Blur
// se ejecuta cuando se hace blur en un input, osea cuando se deselecciona el input

input.addEventListener('blur', function(){
    console.log("[blur] Estas fuera del input");
});

// Keydown
// se ejecuta cuando se presiona una tecla, osea cuando se mantiene presionada una tecla (PULSANDO UNA TECLA)
// incluso se puede imprimir el valor de la tecla presionada

input.addEventListener('keydown', function(event){
    // fromCharCode convierte el valor de la tecla presionada a su valor en string, por ejemplo si presiono la tecla "a" me imprime "a"
    // para ello le pasamos el evento que se esta ejecutando y accedemos a la propiedad keyCode que es el valor de la tecla presionada
    console.log("[keydown] Pulsando esta tecla", String.fromCharCode(event.keyCode));   
});

// Keypress
// se ejecuta cuando se presiona una tecla, osea cuando se mantiene presionada una tecla (PULSANDO UNA TECLA)

input.addEventListener('keypress', function(event){
    console.log("[keypress] Tecla presionada", String.fromCharCode(event.keyCode));   
});

// Keyup
// se ejecuta cuando se suelta una tecla, osea cuando se deja de presionar una tecla (SOLTANDO UNA TECLA)

input.addEventListener('keyup', function(event){
    console.log("[keyup] Tecla soltada", String.fromCharCode(event.keyCode));   
});
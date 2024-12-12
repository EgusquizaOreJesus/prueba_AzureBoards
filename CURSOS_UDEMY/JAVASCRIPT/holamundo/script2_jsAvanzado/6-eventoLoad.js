'use strict'

//EVENTO LOAD
// se ejecuta cuando la pagina se ha cargado completamente, osea todos los elementos y etiquetas html se han cargado

window.addEventListener('load', function(){
    var boton = document.querySelector("#boton"); // selecciona el elemento html con el id boton

    function cambiarColor(){
        var bg = boton.style.background; // obtiene el color del boton, es recomendable hacerlo asi, para no acceder varias veces al DOM
        if(bg == "green"){
            boton.style.background = "red"; // cambia el color del boton
        }else{
            boton.style.background = "green"; // cambia el color del boton
        }
        boton.style.padding = "10px"; // cambia el padding del boton
        boton.style.border = "1px solid #ccc"; // cambia el borde del boton
    }
    
    boton.addEventListener('click', function(){
        cambiarColor(); // ejecuta la funcion cambiarColor
        console.log(this); // imprime el boton
        this.style.border = "10px solid black"; // cambia el borde del boton
    });
    
    // Evento mouse over
    // se ejecuta cuando el mouse pasa por encima del boton
    
    boton.addEventListener('mouseover', function(){
        boton.style.background = "#ccc"; // cambia el color del boton
    });
    
    // Evento mouse out
    // se ejecuta cuando el mouse sale del boton
    
    boton.addEventListener('mouseout', function(){
        boton.style.background = "yellow"; // cambia el color del boton
    });

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

}); // finaliza el evento load


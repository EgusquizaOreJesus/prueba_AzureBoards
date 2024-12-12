'use strict'

// Eventos
/*
Eventos:
Son funciones que se ejecutan cada vez que sucede algo, por ejemplo:
 - cuando el usuario mueve el raton
 - cuando da click a algo 
 - cuando escribes algo en un input
 - cuando borras algo
 - cuando redimensionas la ventana

todo estos son eventos que se pueden dar, y podemos hacer que si sucede dicho evento pase algo
*/

// Eventos del raton
var boton = document.querySelector("#boton"); // selecciona el elemento html con el id boton

// cambiar el color del boton al darle click este es un evento
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

// otra forma de hacerlo, sin tener que combinar codigo html con js

// es una buena practica separar el codigo html del js y css
// para esto se puede hacer lo siguiente usar el addEventListener
// addEventListener es algo similar al jquery, puedes ejecutar un evento dentro del codigo js

// Evento click
// el metodo addEventListener recibe dos parametros, 
// el primero es el evento que se va a ejecutar, 
// y el segundo es la funcion de callback que se va a ejecutar
// no puedes poner boton.addEventListener('click', cambiarColor()); porque solo acepta funciones callback
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
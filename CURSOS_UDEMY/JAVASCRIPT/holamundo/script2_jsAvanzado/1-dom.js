'use strict'

// DOM - Document Object Model
// podemos modificar el html de una pagina desde javascript 
// y podemos seleccionar los diferentes elementos que tenemos en la pagina y manipularlos 

// Conseguir elementos con un ID concreto

// funcion para modificar el color de la caja
function cambiaColor(color){
    caja.style.background = color;  // modifica el estilo del elemento html
}

// Conseguir elementos con un ID concreto
// var caja = document.getElementById("caja");   // selecciona el elemento html con el id caja

// otra forma de seleccionar un elemento html
var caja = document.querySelector("#caja");   // selecciona el elemento html con el id caja para id es con "#" y para clases es con "."

// OBS: si el id no existe devuelve null, el script debe estar al final del body para que funcione correctamente
console.log(caja);


// quisiera obtener lo que hay dentro de la caja
var contenido = caja.innerHTML;  // obtiene el contenido del elemento html
console.log(contenido);

// cambiar el contenido de la caja
caja.innerHTML = "Texto en la caja desde JS"; // cambia el contenido del elemento html

console.log(caja);

// modificar el estilo de la caja con reglas de css
caja.style.background = "red";  // modifica el estilo del elemento html
caja.style.padding = "20px";    // modifica el estilo del elemento html
caja.style.color = "white";     // modifica el estilo del elemento html


// ponerle una clase a la caja
caja.className = "hola";         // le asigna una clase al elemento html
'use strict'

// DOM - Document Object Model

// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div'); // obtiene todos los elementos html con la etiqueta div
console.log(todosLosDivs);

var contenidoEnTexto = todosLosDivs[1]; // obtiene el contenido del elemento html
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento"; // cambia el contenido del elemento html

// Como meter contenido en otro elemento
var seccion = document.querySelector("#miseccion"); // selecciona el elemento html con el id miSeccion
var hr = document.createElement("hr"); // crea un elemento html
seccion.prepend(document.createElement("hr")); // añade el elemento html al principio del elemento html, antes de su primer hijo

for(var valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p"); // crea un elemento html
        var texto = document.createTextNode(todosLosDivs[valor].textContent); // crea un nodo de texto, con el contenido del elemento html
        parrafo.append(texto); // añade el nodo de texto al elemento html de tipo "p"
        seccion.append(parrafo); // añade el elemento html al elemento html con el id miSeccion 
    }
}   
seccion.append(hr); // añade el elemento html al final, despues de su ultimo hijo


// Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo'); // obtiene todos los elementos html con la clase rojo
var divsAmarillos = document.getElementsByClassName('amarillo'); // obtiene todos los elementos html con la clase amarillo
console.log(divsRojos);
console.log(divsAmarillos);

// modificar el estilo de los elementos
divsAmarillos[0].style.background = "yellow"; // modifica el estilo del elemento html


for(var div in divsRojos){
    // pongo para que no agarre los elementos que no tengan la clase rojo
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red"; // modifica el estilo del elemento html
    }
}


// Query Selector
// selecciona un elemento html con el query selector

var id = document.querySelector("#encabezado"); // selecciona el elemento html con el id encabezado

console.log(id);

var claseRojo = document.querySelector(".rojo"); // selecciona el primer elemento html con la clase rojo
console.log(claseRojo);

// selecciona todos los elementos html con la clase rojo
var claseRojo = document.querySelectorAll(".rojo"); 
console.log(claseRojo);
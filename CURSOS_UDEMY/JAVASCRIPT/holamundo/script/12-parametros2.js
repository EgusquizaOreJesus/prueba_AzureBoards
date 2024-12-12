'use strict'

// PARAMETROS REST Y SPREAD

// Rest se utiliza para recibir un numero indeterminado de parametros

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas);   // lo encapsula en un array
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

// Spread se utiliza para enviar un numero indeterminado de parametros

var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");  // el spread descompone el array
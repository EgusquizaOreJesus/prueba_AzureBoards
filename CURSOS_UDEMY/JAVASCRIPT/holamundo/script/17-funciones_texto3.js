'use strict'
var numero = 444;
var texto1 = "Bienvenido al curso de curso JavaScript";
var texto2 = "Es muy buen curso";

// Remplazar texto
// replace
var remplazar = texto1.replace("curso", "cursos me"); // con replace se reemplaza el primer texto por el segundo texto

console.log(remplazar);

// Slice
// recortar texto
var cortar = texto1.slice(14, 22); // con slice me recorta el texto desde la posicion 14 hasta la posicion 22
console.log(cortar);

// Split
// separar texto
var separar = texto1.split(" "); // con split se separa el texto en un array, el parametro es el separador
console.log(separar);

// FUNDAMENTAL
// Trim
// Elimina los espacios por delante y por detras de la cadena de texto
var cadena = "    hola   ";
console.log(cadena);
console.log(cadena.trim()); // con trim se eliminan los espacios por delante y por detras de la cadena de texto
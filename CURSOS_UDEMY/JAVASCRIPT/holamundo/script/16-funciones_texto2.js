'use strict'
var numero = 444;
var texto1 = "Bienvenido al curso de curso JavaScript";
var texto2 = "Es muy buen curso";

// BUSQUEDA DE TEXTO

var busqueda = texto1.indexOf("curso"); // con indexOf se busca la primera coincidencia, esto devuelve la posicion de la primera coincidencia

console.log(busqueda);

busqueda = texto1.lastIndexOf("curso"); // con lastIndexOf se busca la ultima coincidencia, esto devuelve la posicion de la ultima coincidencia

// Search es igual que indexOf
busqueda = texto1.search("curso");

// Match 
busqueda = texto1.match("curso"); // con match se busca la primera coincidencia, esto devuelve un array con la coincidencia
// Match con expresion regular
busqueda = texto1.match(/curso/g); // con match se busca todas las coincidencias, esto devuelve un array con todas las coincidencias

// Substring
// Extrae una parte de la cadena de texto
busqueda = texto1.substr(14, 5); // con substr se extrae una parte de la cadena de texto, 
                                 //el primer parametro es la posicion de inicio y el segundo parametro es la cantidad de caracteres a extraer

// CharAt
// Devuelve el caracter que se encuentra en la posicion indicada

busqueda = texto1.charAt(44); // con charAt se obtiene el caracter que se encuentra en la posicion indicada

// StartsWith
// Devuelve true si la cadena de texto comienza con el texto indicado
busqueda = texto1.startsWith("Bienvenido"); // con startsWith se verifica si la cadena de texto comienza con el texto indicado

// EndsWith
// Devuelve true si la cadena de texto termina con el texto indicado
busqueda = texto1.endsWith("JavaScript"); // con endsWith se verifica si la cadena de texto termina con el texto indicado

// IMPORTANTE
// Includes 
// Devuelve true si la cadena de texto contiene el texto indicado
busqueda = texto1.includes("JavaScript"); // con includes se verifica si la cadena de texto contiene el texto indicado

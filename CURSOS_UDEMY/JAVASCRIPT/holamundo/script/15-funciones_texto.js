'use strict'

// METODOS QUE NOS VAN A PERMITIR TRANSFORMAR UNA CADENA DE TEXTO

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript";
var texto2 = "Es muy buen curso";

// Convertir numero a texto
var dato = numero.toString();
console.log(dato);

// Convertir a mayusculas
dato = texto1.toUpperCase();
console.log(dato);

// Convertir a minusculas
dato = texto1.toLowerCase();
console.log(dato);


// Calcular longitud
var nombre = "Hola";        // con length se obtiene la longitud de la cadena
nombre = ["hola", "hola"];  // con length se obtiene la cantidad de elementos del array
console.log(nombre.length);

// Concatenar texto
var textoTotal = texto1 + " " + texto2;
console.log(textoTotal);

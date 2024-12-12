'use strict'

// Plantillas de texto

var nombre = prompt("Introduce tu nombre");
var apellido = prompt("Introduce tu apellido");

// Esto es una forma de concatenar texto pero no es la mas recomendada
// var texto = "Mi nombre es: " + nombre + "<br/> Mi apellido es: " + apellido; 

// Esta es la forma recomendada de concatenar texto
// PLANTILLA DE TEXTO DE JAVA SCRIPT CON COMILLAS INVERTIDAS Y TODAVIA CON HTML
// ${variable} aqui se pone la variable que se quiere concatenar
var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellido es: ${apellido}</h3>
`;

document.write(texto);
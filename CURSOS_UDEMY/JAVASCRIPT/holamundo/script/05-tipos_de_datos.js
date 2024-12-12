'use strict'

// Operadores
// podemos hacer operaciones con los datos 
var numero1 = 7;   
var numero2 = 12;
var operacion = numero1 + numero2;
console.log("El resultado de la operacion es: " + operacion);

// tipos de datos
// numero_entero
var numero_entero = 44;
// cadena de texto
var cadena_texto = "Hola 'que' tal";
// booleano
var verdadero_o_falso = true;


// convertir un texto a numero
var numero_falso = "33";
console.log(Number(numero_falso)+7);

// parseInt convierte un texto a numero entero (lo redondea si es decimal)
// parseFloat convierte un texto a numero decimal
// Number convierte un texto a numero decimal

// convertir un numero a texto
var numero_entero = 55;
console.log(String(numero_entero)+7);


// SI QUISIERA SABER EL TIPO DE DATO DE UNA VARIABLE
// typeof nos devuelve el tipo de dato de una variable
console.log(typeof verdadero_o_falso); // boolean
console.log(typeof numero_entero); // number
console.log(typeof cadena_texto); // string
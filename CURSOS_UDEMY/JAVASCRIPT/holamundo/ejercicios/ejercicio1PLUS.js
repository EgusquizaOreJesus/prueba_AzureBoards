'use strict'

/*
    Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
    PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos los vuelva a pedir
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

// isNaN() es una funcion que devuelve true si el parametro no es un numero
while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Introduce el primer numero", 0));
    numero2 = parseInt(prompt("Introduce el segundo numero", 0));
}
if (numero1 == numero2) {
    console.log("Los numeros son iguales");
} 
else if (numero1 > numero2) {
    console.log("El numero mayor es: " + numero1);
    console.log("El numero menor es: " + numero2);
} else {
    console.log("El numero mayor es: " + numero2);
    console.log("El numero menor es: " + numero1);
}

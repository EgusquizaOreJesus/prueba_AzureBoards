'use strict'

/*
    Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

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

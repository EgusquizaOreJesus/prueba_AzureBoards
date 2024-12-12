'use strict'

/*
    Haz un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

// recordar que document.write escribe en el documento html
document.write("<h1>De " + numero1 + " a " + numero2 + " estan estos numeros:</h1>");
for (var i = numero1; i <= numero2; i++) {
    document.write(i + "<br/>");
}
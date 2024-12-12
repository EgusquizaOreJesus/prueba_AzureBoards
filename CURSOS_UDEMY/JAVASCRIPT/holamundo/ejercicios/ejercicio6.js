'use strict'

/*
    Que nos diga si un numero es par o impar
    1. Ventana prompt
    2. Si no es valido que nos pida de nuevo el numero
    3. Mostrar resultado
*/

var numero = parseInt(prompt("Introduce un numero", 0));

while (isNaN(numero)) {
    numero = parseInt(prompt("Introduce un numero", 0));
}

if (numero%2 == 0) {
    console.log("El numero " + numero + " es par");
}
else {
    console.log("El numero " + numero + " es impar");
}
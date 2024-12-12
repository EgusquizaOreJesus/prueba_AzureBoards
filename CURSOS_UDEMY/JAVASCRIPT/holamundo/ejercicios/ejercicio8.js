'use strict'

/*
    VAMOS A HACER UNA CALCULADORA
    QUE PIDA DOS NUMEROS POR PANTALLA
    SI METEMOS UNO MAL QUE NOS VUELVA A PEDIR
    EN EL CUERPO DE LA PAGINA, EN UNA ALERTA Y POR LA CONSOLA EL RESULTADO DE SUMAR, RESTAR, MULTIPLICAR Y DIVIDIR ESOS DOS NUMEROS
*/

var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero", 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Introduce el primer numero", 0));
    numero2 = parseInt(prompt("Introduce el segundo numero", 0));
}

var resultado = "La suma es: " + (numero1 + numero2) + "<br/>" +
    "La resta es: " + (numero1 - numero2) + "<br/>" +
    "La multiplicacion es: " + (numero1 * numero2) + "<br/>" +
    "La division es: " + (numero1 / numero2) + "<br/>";

// este resultado es para mostrarlo en la pagina
var resultadoCMD = "La suma es: " + (numero1 + numero2) + "\n" +
    "La resta es: " + (numero1 - numero2) + "\n" +
    "La multiplicacion es: " + (numero1 * numero2) + "\n" +
    "La division es: " + (numero1 / numero2) + "\n";
document.write(resultado);
alert(resultadoCMD);
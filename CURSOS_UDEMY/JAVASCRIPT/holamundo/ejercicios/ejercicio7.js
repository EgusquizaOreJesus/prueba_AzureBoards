'use strict'

/*
 Tabla de multiplicar de un numero introducido por pantalla
*/

var numero = parseInt(prompt("Introduce un numero", 1));

document.write("<h1>Tabla del " + numero + "</h1>");
for (var i = 1; i <= 12; i++) {
    document.write(i + " x " + numero + " = " + (i*numero) + "<br/>");
}

// TODAS LAS TABLAS DE MULTIPLICAR
for (var c = 1; c <= 12; c++) {
    document.write("<h1>Tabla del " + c + "</h1>");
    for (var i = 1; i <= 12; i++) {
        document.write(i + " x " + c + " = " + (i*c) + "<br/>");
    }
}
'use strict'

// FUNCIONES ANONIMAS
// Es una funcion que no tiene nombre

var pelicula = function(nombre) {
    return "La pelicula es: " + nombre;
}

// CALLBACKS
// Es una funcion que se ejecuta dentro de otra funcion


// sumaYmuestra y sumaPorDos son funciones anonimas
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

// Se pasan dos funciones anonimas como parametros que son llamadas dentro de la funcion sumame estas son los callbacks 
sumame(5, 7, function(dato) {
    console.log("La suma es: ", dato);
}, function(dato) {
    console.log("La suma por dos es: ", (dato * 2));
});

// Funciones Flecha
// Se utilizan para simplificar la sintaxis de las funciones anonimas
// Son una forma de definir funciones de callback de manera mas sencilla
sumame(2, 7, (dato) => {
    console.log("La suma es: ", dato);
}, (dato) => {
    console.log("La suma por dos es: ", (dato * 2));
});

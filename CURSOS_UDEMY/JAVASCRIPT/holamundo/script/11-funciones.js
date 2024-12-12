'use strict'

// FUNCIONES
function porConsola(numero1, numero2) {
    console.log("suma: " + (numero1 + numero2));    
    console.log("resta: " + (numero1 - numero2));
    console.log("multiplicacion: " + (numero1 * numero2));
    console.log("division: " + (numero1 / numero2));    
}

function porPantalla(numero1, numero2) {
    document.write("suma: " + (numero1 + numero2) + "<br/>");
    document.write("resta: " + (numero1 - numero2) + "<br/>");
    document.write("multiplicacion: " + (numero1 * numero2) + "<br/>");
    document.write("division: " + (numero1 / numero2) + "<br/>");
}


// Defino la funcion
function calculadora(numero1, numero2, mostrar = false) {
    // Conjnunto de instrucciones a ejecutar
    if(mostrar == false) {
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }
    return true;
}

// Invocar o llamar a la funcion
calculadora(12, 8);
calculadora(98, 2);
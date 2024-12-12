'use strict'

// Bucle while
// es menos estricto que el bucle for
// se ejecuta mientras una condicion sea verdadera

var year = 2018;
while(year <= 2051){
    // ejecuta esto
    console.log("Estamos en el año: " + year);
    year++;     // incrementa el valor de year en 1 en cada iteracion
}

// do while
// ejecuta el bloque de instrucciones y luego evalua la condicion

var years = 30;
do{
    //alert("Solo cuando sea diferente a 20");
    years = 20;
}
while(years != 20);

// BREAK 
// sirve para salir de un bucle

var years = 30;
while(years != 20){
    console.log("Solo cuando sea diferente a 20");
    years--;
    if(years == 25){
        console.log("25 es un buen numero");
        break;
    }
}
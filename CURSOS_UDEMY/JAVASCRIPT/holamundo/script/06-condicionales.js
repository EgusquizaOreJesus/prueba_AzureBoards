'use strict'

// Una condicional es una estructura de control que nos permite comparar algo
// Condicional IF
/*
    operadores de comparacion
    == igual
    === estrictamente igual
    != distinto
    !== estrictamente distinto
    > mayor que
    < menor que
    >= mayor o igual que
    <= menor o igual que
*/


// si pasa esto
var edad1 = 18;
var edad2 = 12;
if(edad1 > edad2){
    // ejecuta esto
    console.log("Edad1 es mayor que edad2");
}
else{
    console.log("La edad1 es inferior");
}


// ejemplo con el uso de else if
var edad = 18;
var nombre = "David Suarez";
if(edad >= 18){
    // es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");
    if(edad <= 33){
        console.log("Todavia eres millenial");
    }
    else if(edad >= 70){
        console.log("Eres anciano");
    }
    else{
        console.log("Ya no eres millenial");
    }
}
else{
    // es menor de edad
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}

// Operadores logicos
// AND (Y): && -> si se cumple la condicion 1 Y la condicion 2
// OR (O): || -> si se cumple la condicion 1 O la condicion 2
// NOT (NO): ! -> niega la condicion


// negacion
var year = 2018;
if(year != 2016){
    console.log("El año no es 2016, realmente es: " + year);
}

// AND
if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}
else{
    console.log("Estamos en la era post moderna");
}


// OR
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");
}
else{
    console.log("Año no registrado");
}
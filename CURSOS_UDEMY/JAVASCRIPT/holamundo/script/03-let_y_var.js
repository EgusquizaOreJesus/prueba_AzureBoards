'use strict'
// DIFERENCIA AL DEFINIR CON LET Y VAR
// let permite difinir variables limitando su alcance al bloque, declaracion o expresion donde se usa
var texto = "CURSO JS"
console.log(texto); // "CURSO JS"
// Se actualiza pero solo en el bloque
if(true){
    let texto = "Curso Laravel 5";
    console.log(texto); // "Curso Laravel 5"
}
// Se mantiene el valor original
console.log(texto); // "CURSO JS"

// var es la forma antigua de definir variables, es global y puede ser reasignada
var numero = 40;    
console.log(numero); // 40
if(true){
    var numero = 50;
    console.log(numero); // lo reasigna a 50
}

console.log(numero); // 50
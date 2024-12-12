function suma( a , b)   // Error: Falta el tipo de los parámetros
{
    return a + b;
}

// en typescript se debe tipar los parámetro

function suma2(a: number, b: number): number    // Se tipan los parámetros y el tipo de retorno
{
    return a + b;
}

// TYPESCRIPT FUNCIONA A NIVEL DE TIEMPO DE COMPILACIÓN
// JAVASCRIPT FUNCIONA A NIVEL DE TIEMPO DE EJECUCIÓN


let persona = 'Miguel'

persona = 23; // Error: No se puede asignar un número a una variable de tipo string

const persona2 ={
    nombre: 'Miguel',
    edad: 23
}

// typescript puede inferir el tipo de dato de una variable sin necesidad de especificarlo

// que pasa cuando typescript no sabe inferir el tipo de dato de una variable

let a; // typescript no puede inferir el tipo de dato de la variable

// lo pondra como any

// any es un tipo de dato que puede ser cualquier cosa
// ESTO IGNORA EL TIPADO ESTÁTICO DE TYPESCRIPT

a = 23; // number
a = 'Hola'; // string

// evitar el uso de any

// RESUMEN INFERIR ES QUE SIN NECEIDAD DE ESPECIFICAR EL TIPO DE DATO DE UNA VARIABLE, TYPESCRIPT PUEDE DETERMINARLO
// SI NO PUEDE DETERMINARLO, PONDRA EL TIPO DE DATO COMO ANY

const persona3 = {
    nombre: 'Miguel',
    edad: 23
}

// funciones

// En funciones si es necesario especificar el tipo de dato de los parámetros y el tipo de retorno
// para que typescript pueda inferir el tipo de dato de la función

// ENTONCES POR DEFECTO LAS FUNCIONES NO TIENEN INFERENCIA DE TIPOS, SI ES QUE NO TIENEN CONTEXTO
function saludar(name){
    console.log('Hola ' + name);
}

function saludar2(name: string): string{
    return 'Hola ' + name;
}

// funciones con parametros objetos

function saludar3( {nombre, edad} ){
    console.log('Hola ' + nombre + ' tienes ' + edad + ' años');
}

// tipar 1° forma
function saludar4( {nombre, edad}: {nombre: string, edad: number} ){
    console.log('Hola ' + nombre + ' tienes ' + edad + ' años');
}

// tipar 2° forma

interface Persona{
    nombre: string,
    edad: number
}

function saludar5( {nombre, edad}: Persona ){
    console.log('Hola ' + nombre + ' tienes ' + edad + ' años');
}

// poner funciones como parametros

// Esto es un callback, una función que se pasa como parámetro a otra función
// este callback se ejecutará dentro de la función sayHiFromFunction
const sayHiFromFunction = (fn) => { // recibe una función como parámetro "fn"
    return fn('Miguel');        // esta funciona fn('Miguel') se ejecutará dentro de sayHiFromFunction
}

/*
(name) => {
    console.log('Hola ' + name);
}
esta función se ejecutará dentro de sayHiFromFunction, esto es mi "fn"
esto es un callback
*/
sayHiFromFunction((name) => {
    console.log('Hola ' + name);
})

// esto estara mal, porque no se especifico el tipo de dato de los parametros

const sayHiFromFunction2 = (fn: Function) => {      // tipar esto como Function no es recomendable,
                                                    // ya que Function es un tipo de dato muy general, acepta cualquier tipo de función 
    return fn('Miguel');     
}

sayHiFromFunction2((name) => {
    console.log('Hola ' + name);
})

// tambien aceptaria

sayHiFromFunction2(() => {
    Math.random();  
})
// ESTO ES EL ANY DE LAS FUNCIONES, NO ES RECOMENDABLE USARLO

// tipar funciones correctamente

// necesitamos decirle cual es el tipo de esta función
// Le vamos a decir que la funcion que yo espero, es una funcion que tiene un parametro de tipo string y no retorna nada (void) 
// (name: string) => void
const sayHiFromFunction3 = (fn: (name: string) => void ) => {
return fn('Miguel');     
}


// funcion que entrara como parametro
const sayHi = (name: string) => {
    console.log('Hola ' + name);
}

sayHiFromFunction3(sayHi);

// tipar arrow functions

// 1° forma (recomendada)
const sumar = (a: number, b: number): number => {
    return a + b;
}

// 2° forma
const sumar2: (a: number, b: number) => number = (a, b) => {
    return a + b;
}


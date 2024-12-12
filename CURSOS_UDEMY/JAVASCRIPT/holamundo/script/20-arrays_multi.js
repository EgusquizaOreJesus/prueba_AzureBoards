'use strict'

// Arrays multidimensionales
// Un array dentro de otro array

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

// Crear un array multidimensional 
// este array tiene dos elementos, el primero es un array de categorias y el segundo es un array de peliculas
var cine = [categorias, peliculas];

// si quiero acceder a una categoria
// console.log(cine[0]);

// OPERACIONES CON ARRAYS

// OBS: en php se puede añadir un elemento de esta manera:
// peliculas[] = "Batman";

// Añadir un elemento a un array
//var elemento = prompt("Introduce tu pelicula: ");
// while(elemento != "ACABAR"){
//   peliculas.push(elemento);
//   elemento = prompt("Introduce tu pelicula: ");
// }

// Eliminar el ultimo elemento de un array
peliculas.pop();

// poner un elemento en undefined
// peliculas[0] = undefined;

// Eliminar un elemento de un array
var indice = peliculas.indexOf('Gran torino'); // busca el indice del elemento
// si el elemento no existe devuelve -1
if (indice > -1){
    peliculas.splice(indice, 1); // elimina el elemento
    // el splice me permite eliminar un elemento a partir de un indice y la cantidad de elementos a eliminar a partir de ese indice
}

// Convertir un array a un string
var peliculas_string = peliculas.join();     // convierte el array en un string separado por comas
console.log(peliculas_string);

// Convertir un string a un array

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");       // convierte el string en un array separado por comas
console.log(cadena_array);

// Ordenar un array
peliculas.sort(); // ordena el array alfabeticamente
peliculas.reverse(); // ordena el array alfabeticamente pero al reves
'use strict'


// Busquedas en un array
var lenguajes = new Array("PHP", "JS", "Go", "Java");

// Buscar un elemento en un array
// le paso una funcion callback que recibe el elemento y el indice
lenguajes.find(function(lenguaje){
    if(lenguaje == "PHP"){
        console.log("Lenguaje encontrado");
    }
});

// reduciendo la funcion callback
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");   
console.log(busqueda);
// FindIndex devuelve el indice del elemento encontrado
var busquedaI = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
console.log(busquedaI);

// puedo hacer un filtro
var precios = [10, 20, 50, 80, 12];
// some me ayuda a buscar si algun elemento cumple la condicion
var busquedaP = precios.some(precio => precio > 80); // devuelve true si algun elemento cumple la condicion
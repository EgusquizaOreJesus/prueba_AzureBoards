'use strict'
// Ejercicio Arrays

/*
1. Pida 6 números por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuántos elementos tiene el array
6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice
*/

// creo un array vacio
var numeros = new Array(6);         // creo un array con tamaño 6

// pido los numeros
for (let i = 0; i < 6; i++){
    numeros[i] = parseInt(prompt("Introduce un numero: ", 0));
}

// muestro el array en la consola
console.log(numeros);

// muestro el array en el cuerpo de la pagina
// creo una funcion que recibe un array y devuelve una plantilla
function mostrarArray(elementos, titulo = ""){
    var plantilla = `
        <h1>Contenido del array ${titulo}</h1>
        <ul>
        ${elementos.map(numero => `<li>${numero}</li>`).join('')}
        </ul>
    `;
    return plantilla;
}
// otra forma
function mostrarArray2(elementos,textoCustom = ""){
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");

}

document.write(mostrarArray(numeros));

// ordeno el array
numeros.sort();
console.log(numeros);
document.write(mostrarArray(numeros,"ordenado alfabeticamente"));

// SI QUIERO ORDENAR NUMEROS DE FORMA CORRECTA TENGO QUE PASARLE UNA FUNCION DE COMPARACION
numeros.sort(function(a,b){return a-b});    // ordena de forma ascendente
console.log(numeros);
document.write(mostrarArray(numeros,"ordenado de forma ascendente"));

// invierto el array
numeros.reverse();
console.log(numeros);
document.write(mostrarArray(numeros,"invertido"));

// muestro la longitud del array
console.log(numeros.length);
document.write("<h1>El array tiene: "+numeros.length+" elementos</h1>");

// busqueda de un valor
var busqueda = parseInt(prompt("Introduce el numero a buscar: ", 0));
var indice = numeros.findIndex(numero => numero == busqueda);   // busco el indice del numero
if(indice > -1){
    document.write("<h1>Encontrado</h1>");
    document.write("<h1>Posicion de la busqueda: "+indice+"</h1>");
}else{
    document.write("<h1>No encontrado</h1>");
}

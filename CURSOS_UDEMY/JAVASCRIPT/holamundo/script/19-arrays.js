'use strict'

// Arrays, Arreglos, Matrices
// Con un array se pueden guardar varios valores en una sola variable

var nombre = "Victor Robles";
var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", "Jose Martin", 52, true];    
// Se puede guardar cualquier tipo de dato en un array
// Se puede guardar un array dentro de otro array

// puedo definir un array en forma de objeto
var lenguajes = new Array("PHP", "JS", "Go", "Java");

// Longitud de un array
console.log(nombres.length);


// Acceder a un elemento del array
// var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
// if(elemento >= nombres.length){
//    alert("Introduce el numero correcto menor que: " + nombres.length);
// }else{
//    alert("El usuario seleccionado es: " + nombres[elemento]);
// }

// Recorrer un array
// con map se recorre el array y se puede hacer una operacion con cada elemento
var plantilla = `
    <h1>Lenguajes de programación del 2018</h1>
    <ul>
    ${lenguajes.map(lenguaje => `<li>${lenguaje}</li>`).join('')}
    </ul>
`;

// tambien puedo recorrer con forEach
// en la funcion callback los parametros son el elemento y el indice del elemento
lenguajes.forEach((elemento, index) => {
    console.log(index + " - " + elemento);
});

// tambien puedo recorrer con for in
for(let lenguaje in lenguajes){
    console.log(lenguajes[lenguaje]);
}

document.write(plantilla);
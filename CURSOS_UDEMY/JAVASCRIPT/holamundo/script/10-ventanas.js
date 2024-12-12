'use strict'

// ALERTA
// alert("Esta es una alerta");
// UNA ALERTA ES UNA VENTANA EMERGENTE QUE SE MUESTRA EN EL NAVEGADOR
alert("Esta es una alerta");

// CONFIRMACION
// "CONFIRM" ES UNA VENTANA EMERGENTE QUE NOS PIDE CONFIRMAR O CANCELAR
//confirm("¿Estas seguro de querer continuar?");
// lo que devuelve confirm es un booleano, lo puedo poner en una variable
var mi_resultado = confirm("¿Estas seguro de querer continuar?");
console.log(mi_resultado);


// INGRESO DE DATOS
// "PROMPT" ES UNA VENTANA EMERGENTE QUE NOS PERMITE INGRESAR UN DATO
// el primer parametro es el mensaje que se muestra, el segundo es el valor por defecto en caso de que no se ingrese nada
//prompt("¿Que edad tienes?", 18);
// lo que devuelve prompt es un string, lo puedo poner en una variable
var edad = prompt("¿Que edad tienes?", 18);
console.log(edad);
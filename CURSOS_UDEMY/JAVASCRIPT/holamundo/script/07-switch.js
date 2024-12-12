'use strict'

// Switch
// Estructura de control de flujo, nos ayuda a tomar decisiones con el codigo
var edad = 18;
var imprime = "";

// entre parentesis va la variable a evaluar
switch(edad){
    // case es el valor que puede tomar la variable
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
        // se pone break para que no siga evaluando
    break;
    case 25:
        imprime = "Ya eres un adulto";
    break;
    case 40:
        imprime = "Crisis de los 40";
    break;
    case 75:
        imprime = "Eres un anciano";
    break;
    default:
        imprime = "Tu edad es neutra";
    break;
}
console.log(imprime);
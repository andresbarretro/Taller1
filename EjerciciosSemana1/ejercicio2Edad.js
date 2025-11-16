//Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años

const prompt = require("prompt-sync")();

let nombre = prompt("Por favor ingresa tu nombre: ");
let edad =  Number(prompt("Por favor ingresa tu año de nacimiento en numeros: "));


let edadCumplida = 2020 - edad;

console.log("Hola " + nombre + ", grandioso! " + "tienes " + edadCumplida + " años" )


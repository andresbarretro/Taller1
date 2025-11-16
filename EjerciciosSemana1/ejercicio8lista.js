// Crea un programa a partir de las siguientes instrucciones:

// Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
// Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
// Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
// Recorre el arreglo e imprímelo.
// Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:

const prompt = require("prompt-sync")();

let nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"];

let nombre1 = prompt("agregar nombre:");

nombres.push(nombre1)
    console.log(`${nombres}`);

let nombre2 = prompt("agregar un segundo nombre:");

nombres.splice(2,0,nombre2)
    console.log(`${nombres}`)


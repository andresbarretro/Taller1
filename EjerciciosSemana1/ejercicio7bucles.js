// Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:


const prompt = require("prompt-sync")();

let numero1 = Number(prompt("ingresa el primer numero:"));
let numero2 = Number(prompt("ingresa el segundo numero:"));


let i = numero1

while( i < numero2 + 1 ){
    console.log(`${i}`)

    i++
}

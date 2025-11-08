// Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.

// instale prompt-sync para poder usar prompt(), ya que Node.js no reconoce prompt(), porque esa funcion solo existe en los navegadores y no en el entorno de node
const prompt = require("prompt-sync")();

// con prompt() le permito al usuario ingresar datos
let a = Number(prompt("Ingresa un numero: "));
let b = Number(prompt("Ahora ingresa el segundo numero: "));

// con esto sumo los datos ingresados por el usuario 

let resultado = a + b

console.log("El resultado de la suma es: " + resultado)





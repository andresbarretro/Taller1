// Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces:

const prompt = require("prompt-sync")();
let frase = prompt("ingresa una frase: ")
let numero = Number(prompt("Ahora ingresa un numero: "))

 if(frase && numero){
  for(let i = 1; i<= numero; i++ ){
    console.log(`${i} ${frase}`);
  }  
} 
// Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces. NOTA: utiliza un ciclo para imprimir la frase las 10 veces.


const prompt = require("prompt-sync")();

let frase = prompt("dime tu frase:") 

for(let i = 1; i <= 10; i++ ){
    console.log(frase);
};


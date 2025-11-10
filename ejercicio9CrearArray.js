// Escribe un programa que:

// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.

const prompt = require("prompt-sync")();
const lista = []
let numero = Number(prompt("ingrese un numero: "))


//con este for creo los datos o elementos dentro de mi array lista 
for(let i = 1; i <= numero; i++){
    lista.push(i)
    };

    // con el .plice busco y borro el elemento que quiero en este caso el numero 2

      lista.splice(1,1)
      // imprimo la lista  
    console.log(` ${lista}`)

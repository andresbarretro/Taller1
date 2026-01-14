// Función buscarElemento(array, 
// elemento) que devuelva true si el 
// elemento existe.
//  ○ Ejemplo: buscarElemento(["rojo", 
// "azul"], "azul") → true.






const prompt = require("prompt-sync")();

const color= ["rojo","azul","negro","rosado","blanco","verde"];

function buscarColor(colores){
let buscar = prompt("que color estas buscando: ");
let encontrado = false;

    for(let i = 0; i< colores.length; i++){
        if(colores[i] === buscar) {
      encontrado = true;
      break; 
    }
}
 if(encontrado) {
    console.log("Sí, el color que buscas está disponible");
  } else {
    console.log("Lo sentimos, el color que buscas no está disponible");
  }
}

buscarColor(color);

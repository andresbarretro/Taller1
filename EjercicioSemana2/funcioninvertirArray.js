// Invertir un array:
//  ○ Función invertirArray(array) que 
// retorne un nuevo array invertido.
//  ○ Ejemplo: invertirArray(["a", "b", 
// "c"]) → ["c", "b", "a"].

const numeros = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

function invertirArray(lista){
    let invertidos = [];  // creo un uevo arreglo donde guardare los valores al reves

    // Empiezo desde el ultimo indice del arreglo hasta llegar a cero
    for(let i = lista.length - 1 ; i >= 0 ;i--){
        invertidos.push(lista[i]);      // con esto guardo cada elemento al nuevo arreglo pero empezando desde el el ultimo numero 
    }
    return invertidos; // con esto devuelvo el numero arreglo invertido 
}

console.log(invertirArray(numeros))   // con esto muestro lo que retorna la funcion 
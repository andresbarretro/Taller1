//  Contar elementos pares:
//  ○ Función contarPares(array) que cuente 
// cuántos números pares hay.
//  ○ Ejemplo: contarPares([3, 8, 2, 10]) → 

const numeros = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

function contarPares(numeros){

    let contador = 0;

    for(let i = 0; i <numeros.length; i++ ){
        if(numeros[i]  % 2 === 0){
            contador++;
        }
    }

        
        return contador;  
}

console.log(contarPares(numeros))
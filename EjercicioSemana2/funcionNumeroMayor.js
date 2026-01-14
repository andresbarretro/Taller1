


const numeros = [15, 6, 4, 12, 14, 67, 12, 4, 2];

function numeroMayor(numeros) {

    let mayor = numeros[0]
    
    for (let numero of numeros) {

        if (numero > mayor) {
            mayor = numero
        }
    }
    console.log(`el numero mayor de la lista es ${mayor}`)
}

numeroMayor(numeros)
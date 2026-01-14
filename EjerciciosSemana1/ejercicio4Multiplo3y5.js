// Escribe un programa que le pida al usuario ingresar un número.

// Si el número es múltiplo de 3 debe imprimir en la consola bing.
// Si el número es múltiplo de 5 debe imprimir en la consola bong.
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
// Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.


const prompt = require("prompt-sync")();

let number = Number(prompt("Ingresa tu numero:"))


if (number % 5 === 0){
    console.log("jeje bong");
}
else if(number % 3 === 0){
    console.log("jaja bing")
}
else if (number % 3 === 0 && number % 5 === 0 ) {
    console.log("bingbong")
}
else {
    console.log(number)
}




// aca lo intende hacer con un switch pero no se porque no me funciono y preferi usar else if 

// switch(number){
//     case number % 3 === 0:
//         console.log("jaja bing");
//         break;

//     case number % 5 === 0:
//         console.log("jeje bong");
//         break;
    
//     case number % 3 === 0 && number % 5 === 0:
//         console.log("bingbong");
//         break;

//     default:
//         console.log(number)
// }
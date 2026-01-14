// Completa el siguiente programa para imprimir los números que sean mayores a 10.

const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]

// manera de hacerlo con while
let i = 0;
while(i < nums.length ){
   if(nums [i] > 10){
        console.log( nums [i] )
    }
    
    i++
}
// *manera de hacerlo con bucle for 

// for(let i = 0; i < nums.length; i++){
//     if(nums [i] > 10){
//         console.log( nums [i] )
//     }
// }

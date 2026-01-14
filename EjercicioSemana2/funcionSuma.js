const numeros = [15,6,4,12,14,67,12,4,2];


function sumarArray(sumar){

    let suma= 0;

    for(let i = 0; i < sumar.length;i++ ){    
         suma = suma + sumar[i]; 
      
    }
  return suma
}

console.log(sumarArray(numeros))
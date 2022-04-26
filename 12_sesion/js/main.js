//? map

const numeros = [2, 5, 6];

const numerosConCalculo = numeros.map((item, index, arr) =>{
    return item + 3;
})

console.log(numeros);
console.log(numerosConCalculo);
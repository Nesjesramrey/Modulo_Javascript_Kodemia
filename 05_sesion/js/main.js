/*
Ejercicio 1:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
//         por la palabra "Koder", 
//     - y mostrar el mensaje de nuevo al usuario
// */

// // enter the sentence
// let sentence = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado";

// console.log(sentence.match(/estudiante/gi));
// let totalWords = sentence.match(/estudiante/gi);
// alert("El total de la palabra estudiante aparece " + totalWords.length)

// console.log(sentence.replace("estudiante", "koder"))

// /*
// Ejercicio 2:
//     Comparar 2 string, y determinar cual de los dos es el más largo
//     input: "string 1", "Some large string"
//     Output: "el string {string 1} es el más largo"*/


// let input1 = prompt("Ingresa una oracion")
// let input2 = prompt("Ingresa otra oracion")

// function compareStrings(string1,string2){
//     if (string1.length>string2.length)
//     console.log("La primera es mas larga");
//     else{
//         console.log("La segunda es mas larga")
//     }

// }

// compareStrings(input1,input2)

// 
// Ejercicio 3:
//     Dado un string de dos palabras realizar una función que devuelva la palabra más larga
//     input: 'Programación Javascript'
//     Output: 'Programación'
// 

// let twoWords = prompt("Ingresa una oracion")
// const myArray = twoWords.split(" ");
// let firstWord = myArray[0]
// let secondWord = myArray[1]

// function compareWords(word1,word2){
//     if (word1.length>word2.length)
//     console.log(firstWord+ " es mas larga");
//     else{
//         console.log(secondWord+ " es mas larga")
//     }

// }

// compareWords(firstWord, secondWord)


// 
// Ejercicio 4
//     Crear una funcion o funciones que permitan elegir al usuario
//     una operacion basica, indicar dos valores y ejecutar la operacion 
//     seleccionada. imprimir el resultado
//     output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
//     "suma", 20,10 -> La suma de 20 y 10 es 30
// 

// let numberOne = prompt("Ingresa un numero")
// let numberTwo = prompt("Ingresa un numero")


// function calculadora(number1, number2){
//     console.log("Ingresa una opcion",
//     "1. Suma",
//     "2.Resta",
//     "3.Multiplicacion",
//     "4.Division",
//     "5.Potencia"
//     )
//         const input = prompt();
//     if (input == 1){
//       console.log(number1 + number2)}
//       else if (input == 2){
//         console.log(number1 - number2)
//       }
//       else if (input == 3){
//         console.log(number1 * number2)
//       }
//       else if (input == 4){
//         console.log(number1 / number2)
//       }
//       else if (input == 5){
//         console.log(number1 ** 1, number2 ** 2)
//       }
//       else {console.log("Ingresa una opcion correcta")}
//     };

// calculadora(numberOne, numberTwo)


let sum = function sum (number_1, number_2){
    return number_1 + number_2
}
function rest (number_1, number_2){
    return number_1 - number_2
}

function calculadora(number_1, number_2, callback){
        console.log("El resultado de "+ number_1 + number_2 +" es: "+callback)    
    };

calculadora(2, 2, sum)

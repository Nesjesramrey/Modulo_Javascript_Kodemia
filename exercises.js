//**Excercise1 */

// Find the smallest integer in the array

// Given an array of integers your solution should find the smallest integer.

// For example:

//     Given [34, 15, 88, 2] your solution will return 2
//     Given [34, -345, -1, 100] your solution will return -345

// You can assume, for the purpose of this kata, that the supplied array will not be empty

let arrayNumber = [-15,1,2,3,4,5,2]

function numberMin(array){
  
let minimo = 0;
for(let i=0, len = array.length; i > len; i--){
    if(minimo > array[i]){
        minimo = array[i];
    }
}console.log(minimo)
}

numberMin(arrayNumber)

//**Exercise2 */

//find sintax error in
//  function multi (a,b) {
//      a*b}
// console.log(multi(3,2))

//** */

//  You probably know the "like" system from Facebook and other pages.
// People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

//  Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

//  []                                -->  "no one likes this"
//  ["Peter"]                         -->  "Peter likes this"
//  ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//  ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//  ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
//  Note: For 4 or more names, the number in "and 2 others" simply increases.

let array1 = [];
let array2 = ["Peter"];
let array3 = ["Jacob", "Alex"];
let array4 = ["Max", "John", "Mark"];
let array5 = ["Alex", "Jacob", "Mark", "Max"];
const likes = (array) => {
  if (array.length === 0) return console.log("'no one likes this'");
  else if (array.length <= 1) return console.log(`'${array[0]} likes this'`);
  else if (array.length <= 2)
    return console.log(`'${array[0]} and ${array[1]} likes this'`);
  else if (array.length <= 3)
    return console.log(`'${array[0]}, ${array[1]} and ${array[2]} likes this'`);
else{
    return console.log(`'${array[0]}, ${array[1]} and ${array.length-2} others likes this'`);
}

};
likes(array5);

//** excercise 3 */

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// alphabetPosition("The sunset sets at twelve o' clock.")

//** exercise 4 Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//** Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test" //

// tit pseudocodigo
// 1. para analizar cada palabra por separado seria hacer una array con las palabras para analizarlas una por una, esta primera opcion con ciclo for,
// aplica con forEach
//2. Revisar cada elemento del array si es menor a 5 pasa directo al nuevo array
//3. si es mayor le aplicamos lo pasamos de nuevo a un split para despues aplicar el metodo for

//"Hey fellow warriors"
//"This is a test"

const sentence = "Stop Spinning My Words";
const arraySentence = sentence.split(" ");
//console.log(arraySentence)

const fiveLetters = (sentence) => {
  let newArraySentence = [];
  let newSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].length < 5) {
      newArraySentence.push(sentence[i]);
    } else {
      newArraySentence.push(sentence[i].split("").reverse().join(""));
    }
    //console.log(newArraySentence)
    //console.log(newArraySentence.join(' '))
    newSentence = newArraySentence.join(" ");
    //console.log(sentence[i])
  }
  return newSentence;
};
console.log(fiveLetters(arraySentence));

//* exercise 5 In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
//* Example

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

let mixArray = [1, 2, "aasf", "1", "123", 123];

function filter_list(array) {
  let numberArray = [];
  array.forEach((item, index) => {
    if (typeof item == "number") numberArray.push(item);
  });
  return numberArray;
}

console.log(filter_list(mixArray));

//otras respuestas

let mixArray2 = [1, 2, "aasf", "1", "123", 123];
function filter_list2(array) {
  return array.filter(function (v) {
    return typeof v == "number";
  });
}
console.log(filter_list2(mixArray2));

//** */
let mixArray3 = [1, 2, "aasf", "1", "123", 123];
function filter_list3(l) {
  return l.filter((e) => Number.isInteger(e));
}
console.log(filter_list3(mixArray3));

//** exercise 6 Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer.
// Examples

//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

let numberRandom = 54367989999999;

function sumNumbers(randomNumber) {
  let numberToString = randomNumber.toString();
  let arrayNumber = numberToString.split("");
  let sumItems = 0;
  arrayNumber.forEach((item) => {
    //console.log(parseInt(item))
    sumItems += parseInt(item);
  });
  
  if(sumItems <=10){
    console.log(sumItems);
  }else{
    sumNumbers(sumItems);
  }
}

sumNumbers(numberRandom);


//**7 exercise */

// En este desafío tienes un array de números, usando la función map debes retornar todos los números del array multiplicados por dos.

// La solución debería tener un input y output como los siguientes:

// Input

// solution([2, 4, 5, 6]);

// Output

// [4,8,10,12]

//* Primera solucion
let arrayMap = [2,4,5,6];
const mult = arrayMap.map(function(value) {
  return value *2
})
console.log(mult)


//* Segunda solucion

let arrayMap2 = [2,4,5,6];
function solution(array) {
  let newArray = [];
  array.map((item) => {
    newArray.push(item*2)
  })
  return newArray
}
console.log(solution(arrayMap2))


//** exercise 8 */
// En este desafío tienes un array de objetos que representan datos de personas con los siguientes atributos:

// name
// lastName
// age
// El reto aquí es retornar un array de strings con los nombres, la solución debería tener un input y output como los siguientes:

// Input

// solution([
//   {
//     name: 'Nicolas',
//     lastName: 'Molina',
//     age: 28
//   },
//   {
//     name: 'Valentina',
//     lastName: 'Molina',
//     age: 19
//   },
//   ...
// ]);

// Output

// ['Nicolas', 'Valentina']


const solution = [
    {
      name: 'Nicolas',
      lastName: 'Molina',
      age: 28
    },
    {
      name: 'Valentina',
      lastName: 'Molina',
      age: 19
    },
  ];


function filterName(array) {
  let arrayNames =[]
  array.map((product, index, array) => {  
  // Cómo solo queremos los nombres, retornamos "name".
  arrayNames.push(product.name);
})
return arrayNames;
}

console.log(filterName(solution))


//*exercise 9
//* Tienes un array de productos con los siguientes atributos:

// name
// price
// stock
// Debes agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base.

// Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190.

// La solución debería tener un input y output como los siguientes:

// solution([
//   {
//     name: "Product 1",
//     price: 1000,
//     stock: 10
//   },
//   {
//     name: "Product 2",
//     price: 2000,
//     stock: 20
//   },
//   ...
// ]);

// Output

// [
//   {
//     name: "Product 1",
//     price: 1000,
//     stock: 10,
//     taxes: 190
//   },
//   {
//     name: "Product 2",
//     price: 2000,
//     stock: 20,
//     taxes: 380
//   },
//   ...
// ]


arrayArticles = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
]

function solution(array) { 
  let newArrayArticles = [];
  array.forEach((item) => {
  
  let taxes = item.price*0.19

  const newDataArticles = {
    name: item.name,
    price: item.price,
    stock: item.stock,
    taxes: taxes
}
newArrayArticles.push(newDataArticles)
})
return newArrayArticles
}

console.log(solution(arrayArticles))

//** Otra solucion  */
function solution(array){
 	return array.map(item => ({
    ...item,
    taxes: Math.trunc(item.price * .19)
  }))
}; 

//**exercise 10 */


// 
// Tienes un array con palabras, tu desafío es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

// La solución debería tener un input y output como los siguientes:

// solution(['amor', 'sol', 'piedra', 'día']);

// Output

// [ 'amor', 'piedra' ]

const arrayWords = ['amor', 'sol', 'piedra', 'día'];


function countWords(words) {
  let newArray = [];
  words.forEach((item) => {
    if(item.length>= 4) {
      newArray.push(item)
    }
  });return newArray;
}

console.log(countWords(arrayWords))



//** exercise 11 */

// Tienes un array de ordenes de compra con los siguientes atributos:

// customerName: string
// total: number
// delivered: boolean
// Debes filtrar todas las órdenes de compra que cumplan con la condición de tener un total mayor o igual a 100 y además que el estado delivered sea "true".

// La solución debería tener un input y output como los siguientes:

// solution([
//   {
//     customerName: "Nicolas",
//     total: 100,
//     delivered: true,
//   },
//   {
//     customerName: "Zulema",
//     total: 120,
//     delivered: false,
//   },
//   ...
// ]);

// Output

// [
//   {
//     customerName: "Nicolas",
//     total: 100,
//     delivered: true,
//   },
// ]


const arrayCustomers = [
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  }
];

function filterCustomers (array) {
  let newArray = [];
  array.forEach((item) => {
  if(item.total >= 100 && item.delivered === true){
    newArray.push(item)
  } 
}); return newArray;
}

// console.log(filterCustomers(arrayCustomers))


// //**exercise 12 */

// En este desafío vas a tener un string y debes buscar si ese string tiene un término de búsqueda, por ejemplo verificar si dentro de la frase "Ana lava la tina" está el término "ana" y si lo tiene retornar un true de lo contrario retornar un false, debes tener en cuenta que debe encontrar coincidencias, así la el término de búsqueda sea mayúscula o minúscula.

// La solución debería tener un input y output como los siguientes:

// solution("Ana lava la tina", "ana");
// solution("Santiago", "tiago");
// solution("Nicolas", "ana");

// Output

// true
// true
// false

function solution(sentence, query){
  return sentence.toLowerCase()
  .includes(query.toLowerCase());
}; 

console.log(solution('Ana lava la tina', 'ana'))

// ** exercise 13

// Tu desafío es crear un buscador usando funciones como filter y includes, vas a tener array con palabras e tienes que retornar un array con sola las que cumplan con la condición de tener el parámetro de búsqueda.

// La solución debería tener un input y output como los siguientes:

// solution(["ana", "santi", "nico", "anastasia"], "an");
// solution(["ana", "santi", "nico", "anastasia"], "xyz");

// Output

// ["ana", "santi", "anastasia"]
// []


let arrayNames = ["ana", "santi", "nico", "anastasia"]
let word = 'an'

function filterNames (array, names) {
  return array.filter(words => words.includes(names))

}
console.log(filterNames(arrayNames, word))


//* exercise 14

// Tienes un array de números y debes retornar la suma de todos los valores en él.

// La solución debería tener un input y output como los siguientes:

// solution([1, 1, 1]);
// solution([2, 4, 8]);

// Output

// 3
// 14

const arrayNumbers1 = [1,2,3]

function acumNum (array) {
  return array.reduce((count, item) => count + item, 0);
  
}

console.log(acumNum(arrayNumbers1))


//**exercise 15 */

// Tienes un array de órdenes de compra con los siguientes atributos:

// customerName: string
// total: number
// delivered: boolean
// Debes retornar la suma total de todas las órdenes de compra.

// La solución debería tener un input y output como los siguientes:

// solution([
//   {
//     customerName: "Nicolas",
//     total: 100,
//     delivered: true,
//   },
//   {
//     customerName: "Zulema",
//     total: 120,
//     delivered: false,
//   },
//   ...
// ]);

// Output

// 220


const arrayOrders = [
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  
];

function solution(orders) {
  let totalOrders = 0;
 orders.forEach((item) => {
  totalOrders += item.total
 })
 return totalOrders
}; 

console.log(solution(arrayOrders))


//**exrcise 16 */

// En este desafío tienes un array de números y debes retornar true si dentro de los números de ese array al menos uno es un número par.

// La solución debería tener un input y output como los siguientes:

// solution([1, 3, 5, 7, 10, 11]);
// solution([1, 3, 5]);

// Output

// true
// false


const arrayParImpar = [1, 3, 5, 7, 11]
function solution(numbers) {
  const newArray = numbers.map((item) => {
    return item%2
  })
     if(newArray.includes(0)){
       return true
     }else{ 
      return false}
}; 

console.log(solution(arrayParImpar))


//** exercise 17

// En este desafío tienes un array de números y debes retornar true si dentro de los números de ese array todos los números son pares.

// La solución debería tener un input y output como los siguientes:

// solution([2, 4, 6, 8, 10]);
// solution([1, 3, 5, 7, 10, 11]);
// solution([1, 3, 5]);

// Output

// true
// false
// false

const arrayOnlyPar = [2, 4, 6, 8, 10]

function solution(numbers) {
  const newArray = numbers.map((item) => {
    return item%2
  })
  function compare (item){
    return item == 0;
  }
     if(newArray.every(compare)){
       return true
     }else{ 
      return false} 
}; 

console.log(solution(arrayOnlyPar))


//**exercise 18 */

// Dado un array de string que son nombres de cartas de poker debes retornar la palabra "AS" si dentro de tu baraja tienes un "AS" y un false si no lo tienes.

// La solución debería tener un input y output como los siguientes:

// solution(['diamonds', 'hearts', 'spades', 'AS']);
// solution(['diamonds', 'hearts', 'spades']);

// Output

// "AS"
// false

const arrayPoker = ['diamonds', 'hearts', 'spades', 'AS']
function solution(cards) {
     if(cards.includes("AS")){
       return "AS"
     }else{ 
      return false}
}; 

console.log(solution(arrayPoker))


// **exercise 19

// Dado un array de strings existe la palabra clave "myKey" y debes retornar la posición dentro del array en donde se encuentra este string y si no está debes retornan un false.

// La solución debería tener un input y output como los siguientes:

// solution(["diamonds", "myKey", "spades", "AS"]);
// solution(["diamonds", "hearts", "spades"]);
// solution(["myKey", "hearts", "spades"]);

// Output

// 1
// false
// 0


const arrayWords2 = ["diamonds", "hearts", "spades"]
function solution(words) {
  const newArray = words.map((item, index) => {
    return item
  })
  if(newArray.includes("myKey")){
    return newArray.indexOf('myKey')
  }else{ 
   return false} 
}; 

console.log(solution(arrayWords2))


// ** exercise 20

// En este desafío vas a recibir un array de string y debes retornar un string en donde cada elemento del array esté separado por comas.

// La solución debería tener un input y output como los siguientes:

// solution(["amor", "sol", "piedra", "día"]);
// solution(["diamonds", "hearts", "spades"]);

// Output

// "amor,sol,piedra,día"
// "diamonds,hearts,spades"

const arraytoString = ["amor", "sol", "piedra", "día"];

function solution(words) {
  return words.toString() 
}; 

console.log(solution(arraytoString))


//**exercise 21 */

// En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-), por ejemplo: Curso de arrays => curso-de-arrays

// La solución debería tener un input y output como los siguientes:

// solution("La forma de correr Python");
// solution("La API para nunca parar de aprender");
// solution("Curso de arrays");

// Output

// "la-forma-de-correr-python"
// "la-api-para-nunca-parar-de-aprender"
// "curso-de-arrays"

function solution(title){
  return title.split(' ').join('-').toLowerCase();
}; 

//**exercise 22 */

// En este desafío recibirás dos arrays de números como parámetros de entrada y debes retornar un array que tenga los dos arrays unidos.

// La solución debería tener un input y output como los siguientes:

// Input

// solution([1, 2, 3], [4, 5, 6]);
// solution(["A", "B", "C"], ["D", "E", "H"]);

// Output

// [1, 2, 3, 4, 5 , 6]
// ["A", "B", "C", "D", "E", "H"]

array1 = [1, 2, 3];
array2 = [4, 5, 6];
function concatArray(array1, array2) {
  const newArray = array1.concat(array2);
  return newArray;
}


console.log(concatArray(array1, array2))

//**exercise 23 */

// En este desafío tienes un array que contiene otros arrays internos, debes retornar un array que tenga los elementos de los otros arrays eliminando los arrays internos y dejando solo los valores, normalmente a esto le llamamos aplanar el array o "Flattening Algorithm".

// La solución debería tener un input y output como los siguientes:

// Input

// solution([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);

// Output

// [1, 2, 3, 4, 5, 6, 7, 8, 9]

let joinArray1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

const newArray = joinArray1.map((item) => {
    const newArray = joinArray1[0].concat(joinArray1[1], joinArray1[2])
    return newArray;
  })

console.log(newArray);

//solucion correcta
let joinArray2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
function solution(array){
  return array.flat();
}; 

console.log(solution(joinArray2))

//** exercise 24 */

// En este desafío tienes array de strings y cada línea es un fragmento, el Zen de Python, tu reto es hacer un método que retorne el número de palabras totales que tiene el array.

// La solución debería tener un input y output como los siguientes:

// Input

// solution([
//   "Beautiful is better than ugly",
//   "Explicit is better than implicit",
//   "Simple is better than complex",
//   "Complex is better than complicated",
// ]);

// Output

// 20

arrayWords = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
];

const countWords = arrayWords.map((item) => { 
  newArray= [];
  newArray += item.split(" ");
  return newArray
})

console.log(countWords)

//solucion correcta
let arrayWords3 = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
];
function solution(lines){
  return lines.flatMap(line => line.split(' ')).length;
}; 

console.log(solution(arrayWords3))

//** exercise 25 */

// En este desafío tienes un array de números el cual va a tener tanto números negativos como positivos y el reto es usando la función sort de JavaScript ordenarlos de mayor a menor.

// La solución debería tener un input y output como los siguientes:

// Input

// solution([3, 1, 11, 5, 2, 7, 8]);

// Output

// [ 11, 8, 7, 5, 3, 2, 1 ]

let arrayNumber1 = [3, 1, 11, 5, 2, 7, 8]

function sortArray (arrayNumber){
  let newArray = arrayNumber.sort(function (a,b){return a-b})
  return newArray;
}

console.log(sortArray(arrayNumber1))


//**exercise 26 */

// Tienes un array con palabras y tienes que retornar un array ordenado de la palabra con menos caracteres a la palabra con más caracteres.

// La solución debería funcionar algo similar:

// solution([
//   "Hola",
//   "Viajar",
//   "Sol",
//   "Aprender"
// ]);

// Output

// [
//   "Sol",
//   "Hola",
//   "Viajar",
//   "Aprender"
// ]

const arrayWords1 = [
    "Hola",
    "Viajar",
    "Sol",
    "Aprender"
  ]

function orderArray (arrayWords) {
  let newArray = arrayWords.sort(function (a,b){return a.length-b.length})
  return newArray;
}

console.log(orderArray(arrayWords1))
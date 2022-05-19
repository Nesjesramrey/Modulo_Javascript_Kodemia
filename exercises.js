//**Excercise1 */



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

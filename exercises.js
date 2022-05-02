//**Excercise1 */

//Vengo aquí porque realmente ya aplique todo lo básico que se sobre javascript, ya que estoy aprendiendo. Hace poco encontré un portal llamado CodeWars, en dicho portal uno va completando ejercicios y avanzando de nivel y un sin fin de cosas. Bueno el hecho es que me asignaron resolver este ejercicio:

//Complete el método/función para que convierta las palabras delimitadas por guiones/guiones bajos a mayúsculas y minúsculas. //La primera palabra dentro de la salida debe estar en mayúsculas solo si la palabra original estaba en mayúsculas //(conocido como Upper Camel Case, también conocido como Pascal case). //Ejemplo:

//"the-stealth-warrior" gets converted to "theStealthWarrior"

//"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

//Comencé aplicando lo poco que se porque como comente, estoy aprendiendo este hermoso lenguaje.

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

// let array1 = [];
// let array2 = ["Peter"];
// let array3 = ["Jacob", "Alex"];
// let array4 = ["Max", "John", "Mark"];
// let array5 = ["Alex", "Jacob", "Mark", "Max"];
// const likes = (array) => {
//   if (array.length === 0) return console.log("'no one likes this'");
//   else if (array.length <= 1) return console.log(`'${array[0]} likes this'`);
//   else if (array.length <= 2)
//     return console.log(`'${array[0]} and ${array[1]} likes this'`);
//   else if (array.length <= 3)
//     return console.log(`'${array[0]}, ${array[1]} and ${array[2]} likes this'`);
// else{
//     return console.log(`'${array[0]}, ${array[1]} and ${array.length-2} others likes this'`);
// }

// };
// likes(array5);


//** excercise 3 */

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// alphabetPosition("The sunset sets at twelve o' clock.")



/* Operadores de asignacion "=" */

const z = 5;

c = 7 /*Operador de asignacion*/
c += 5 /*Asignacion de adicion*/
c -= 5 /*Asignacion de resta*/
c *= 5 /*Asignacion de multiplicacion*/
c /= 5 /*Asignacion de division*/
c %= 5 /*Asignacion restante*/
c ** 5 /*Asignacion de exponente*/

//TODO:Operadores aritmeticos*/

let x = 5;
let y = 3;

//? addition
console.log('x + y = ', x + y);  // 8

//? subtraction
console.log('x - y = ', x - y);  // 2

//? multiplication
console.log('x * y = ', x * y);  // 15

//? division
console.log('x / y = ', x / y);  // 1.6666666666666667

//? remainder
console.log('x % y = ', x % y);   // 2

//? increment 
console.log('++x = ', ++x); // x ahora es 6
console.log('x++ = ', x++); // 6 fue incrementado a 7
console.log('x = ', x);     // 7

//? decrement
console.log('--x = ', --x); // x ahora es 6
console.log('x-- = ', x--); // 6 fue decrementado a 5
console.log('x = ', x);     // 5

//?exponentiation
console.log('x ** y =', x ** y);

//todo: Operadores de decremento incremento

let numero1 = 7;
numero1++;

console.log(numero1); //8

//!let: the variable can't to declare with the same name and let 
numero1 = 7;
numero1--;

console.log(numero1) //6

//todo: operadores de comparacion

const a = 3, b = 2;
console.log(a > b); // true

// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true (same operator and type)
console.log(2 === '2'); // false (same operator and type)

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false

//todo operadores logicos

const w = 5, u = 3;
console.log((w < 6) && (u < 5)); // true

// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false

//todo concatenation operator

// concatenation operator
console.log('hello ' + 'koders'); // hello koders

let d = 'modulo';

d += ' de JavaScript';  // a = a + ' de JavaScript';
console.log(d); // modulo de Javascript


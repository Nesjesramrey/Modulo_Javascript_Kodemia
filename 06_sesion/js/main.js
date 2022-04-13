// let personas =[
//     'peter',
//     'jose',
//     'alan',
//     'peter',
//     'jose',
//     'alan',
//     'peter',
//     'jose',
//     'alan'
// ]

// console.log(personas[0]) //La idea es que cada que vez que quisieramos imprimir un valor del array no tengamos que hacerlo uno por unos

//Funcion while (primero pregunta la condicion y despues el cuerpo)

// function cicloWhile(num){

//     let index = 3; //creo una variable index para determinar las vueltas del ciclo

//     while(index < num){   //while index is smaller than five
//         index++;   // retunn index plus 1

//                 console.log(index)  //personas[print] console.log(index)  //print
//         console.log('ciclo activado')
//     }
// }

// cicloWhile(5);

//Ciclo Do While
// function cicloDoWhile(){

//     let index = 0

//     do{
//         ++index
//         console.log(index)
//     }while(9<5);
// }
// cicloDoWhile()

//Ciclo for

// for (let index = 0; index < personas.length; index++){
//     console.log(personas[index])
// }

// let palabra = prompt('Inserta una palabra');

// function convertirPalabra(palabraParaConvertir){

//     let result = "";

//     for (let index = 0; index < palabraParaConvertir.length; index++){
//         if(index % 2 === 0){
//             result += palabraParaConvertir[index].toUpperCase();
//         } else{
//             result += palabraParaConvertir[index].toLowerCase();
//         }
//     }
//     console.log(result)
// }

// convertirPalabra(palabra);

// Ejercicio 1:
// Solicitar al usuario ingresar un numero
// Crear una funcion que genere un string con caracteres aleatorios,
// la longitud del string debe ser igual que el numero que ingreso el usuario
// input : 6
// output: ‘6AQX>H’

let number1 = prompt("Ingresa un numero");

function numberRandom(randomNumber) {
  let result2 = "";
  for (let index = 1; index <= randomNumber; index++) {
    
    let Myarray = index;
    result2 += Myarray
    result3 = String.fromCharCode(result2)
     
     
  }
  console.log(result2);
  console.log(result3);
  
}

numberRandom(number1)

// Ejercicio 2:
// Pedir al usuario usuario un numero entre 1 y 10
// Imprimir la tabla de multiplicar de ese número
// p.ej.
// 3 x 1 = 3
// 3 x 2 = 6

let numberOne = Number(prompt("Ingresa un numero"));

function tablas(number2) {
  for (let index = 1; index <= 10; index++) {
    console.log(numberOne + " x " + index + " = " + number2 * index); //aqui habia colocado  index++ me generaba un error ya que saltaba por 2, esto ya que primero sumaba 1 en el for y despues en el console.log
  }
}

tablas(numberOne);

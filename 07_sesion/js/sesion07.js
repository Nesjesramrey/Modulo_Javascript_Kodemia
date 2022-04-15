// Ejercicio 1
// -Pedir al usuarui un numero entre el 1 y el 10
// -imprimir todos los numeros pares que existen entre 1 y el numero selccionado


//Todo Ejercicio 1
/* - Primero hacemos la solicitud de un numero del 1 al 100
- Hacemos un for del rango del 1 al numero que ingreso el usuario del 1
- Imprimimos los numeros pares entre esos numeros */

let numberUser =Number(prompt("Ingresa un numero del 1 al 10"))
if(numberUser>10 || numberUser<=0){
    alert("Ingrese un numero correcto")
}

function imprimePares(pares) {
    for(let index=1; index<=pares; index++)
    if(index%2===0) {
        console.log(index)
    }
}

imprimePares(numberUser)
                      



// Ejercicio 2
// imprimir en consla la sumaa total de todos los digitos de una cantidad
// input: 1234
// output: 10
//Todo Ejercicio 2
/*solicitar una cantidad 


*/

let serie =prompt("Ingresa una cantidad")
// Split y array
let serieSplit = serie.split("").map(Number)
//console.log(serieSplit)

function plusSerie(array){
    let sum = 0;
for (let index = 0; index < array.length; index++) {
    sum += array[index];
}
console.log(sum);
}

plusSerie(serieSplit)
// console.log(seriesplit)
// function (plusSerie){
//     sum
// }




// Ejercicio 3
// mostar en consola el sigueinte patron
// *
// **
// ***
// ****
// *****
// ******
// *******

function repetCaracter(cantidad) {
    let initial = "";
    for (let index = 0; index < cantidad; index++) {
      initial += "*";
    }
    return initial;
  };
  
   function construirPatron(length) {
     for (let index = 1; index <= length; index++) {
       console.log(repetCaracter(index));
     }
   };
  
construirPatron(5)
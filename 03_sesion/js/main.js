/* 1. Pedir al usuario dos letras, y determinar si la primera aparece antes o después en el alfabeto.*/

//? Definimos primero las variables. Nos piden dos letras
const leter1 = prompt("Ingresa una letra del alfabeto")
const leter2 = prompt("Ingresa una segunda letra del alfabeto")

function compareLetter(a, b){
    //?comparamos las letras si la primera es mayor quiere decir esta mas adelante en el alfabeto
    if (a>b)                                
   console.log(b +" esta antes que "+ a)
   //?en caso contrario la segunda es mayor quiere decir esta mas adelante en el alfabeto
   else{                                    
   console.log(a +" esta antes que "+ b)
   }
}

compareLetter(leter1, leter2)

/* 2. Pedir 2 datos por prompt:
 - Si a > b dividir a entre b
 - Si a < b sumar a más b
 - si a == b multiplicar ambos numeros
 Imprimir el resultado en consola */


//?Definimos los numeros a utilizar
let num1 = prompt("Ingresa un numero a comparar")
let num2 = prompt("Ingresa un segundo numero a comparar")
//?Asignamos el tipo de numero
num1 = Number(num1)
num2 = Number(num2)

function compareNumber(x, y){
    //?Comparamos las variables y devolvemos una operacion
    if (x>y){
    console.log(x/y)}
    else if
    (num1<num2){
    console.log(x+y)}
    else if
    (num1==num2){
    console.log(x*y)}
    else{console.log("Intenta de nuevo")}
    
}

//? Llamamos a la funcion con los argumentos que se ingresaron
compareNumber(num1,num2)


/* 3. Pedir al usuario por prompt un numero entre 1 y 100
  - Verificar si es un par o impar e imprimir en resultado en consola*/
 
 //?En este caso solo necesitamos ingresar un numero
 let num = prompt("Ingresa un numero")
num = Number(num)
//? La funcion hara una division entre 2 siempre que el residuo sea 0 sera par
 function paroimpar(z){
 if (z%2===0){
     console.log("Es par")
 }
 else {console.log("Es impar")}
}

//? Llamamos a la funcion con el argumento que se ingreso
paroimpar(num)

/* 4- Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg):
  Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola*/

//? Definimos dos variables para ingresar nombre y peso
 let name1 = prompt("Ingresa tu nombre")
 let peso = prompt("Ingresa tu peso en kg")
peso = Number(peso)

//? Multiplicamos el peso por 0.279 que es el equivalente de un 1kg en la tierra
function pesoenmarte(p){
    console.log(name1+"Pesas "+ p*0.279 + " kg en Marte")
}

pesoenmarte(peso)
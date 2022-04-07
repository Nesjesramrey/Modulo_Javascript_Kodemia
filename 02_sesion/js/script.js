//* Ejercicio 1:
//* Pedir 2 números al usuario y mostrar en consola el resultado de aplicar todas las operaciones aritméticas entre esos dos números

alert("Ingresa dos numeros para hacer operaciones artimeticas")
const number1 = Number(prompt())
const number2 = Number(prompt())

function operators(x, y){
   console.log("La suma es : "+ (x+y));
   console.log("La resta es : "+ (x-y));
   console.log("La multiplicacion es : "+ (x*y));
   console.log("La division es : "+ (x/y));
   console.log("La elevacion a potencia es : "+ (x**y));
}

operators(number1, number2)

//* Ejercicio 2:
//* Pedir al usuario dos números y escribir en consola si el primer número es mayor que el segundo

alert("Ingresa dos numeros para compararlos")
const num1 = Number(prompt())
const num2 = Number(prompt())

function compara (a,b){
    if (a>b){
    console.log("El primer numero: "+num1 +" es mayor que el segundo: "+num2)}
    else{console.log("Sigue intentando")}
}

compara(num1, num2)
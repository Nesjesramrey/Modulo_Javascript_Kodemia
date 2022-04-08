// 2- Casa de cambio
// Crear una funcion que obtenga  una cantidad de  dinero a traves de prompt(), tambien debe  pedirle el nombre de un pais , investigar su moneda y el tipo de cambio para hacer la conversion de  la cantidad capturada. ejemplo:
// 1-¿Que cantidad en MXN deseas convertir ?
// R= 1500 MXN
// 2¿A que pais vas a viajar?
// R= USA
// salida de la funcion: '$1500MXN (moneda local elegida por el usuario) equivale a $750USD(moneda del pais ingresado por el usuario)'
// Considerar minimo 4 tipo de monedas
// output:  '100 MXN equivale a 50 USD'



let amount = prompt("¿Que cantidad deseas convertir?");
let origin = prompt("¿De que pais viajas?" 
                            +" 1.Mexico"
                            +" 2.Colombia"
                            +" 3.Argentina"
                            +" 4.USA")
let money = prompt("¿A que pais viajas?" 
                            +" 1.Mexico"
                            +" 2.Colombia"
                            +" 3.Argentina"
                            +" 4.USA")
amount = Number(amount);


function changes(x,y,z) {
  if (y == 1 && z == 4) {
    console.log("Tu tienes "+x/20.05+" dolares");
  } else if (y == 2 && z == 4) {
    console.log("Tu tienes "+x/3764.34+" dolares");
  } else if (y == 3 && z == 4) {
    console.log("Tu tienes "+x/112.18+" dolares");
  } else if (y == 4 && z == 1) {
    console.log("Tu tienes "+x/20.05+" pesos");
  } else if (y == 4 && z == 1) {
    console.log("Tu tienes "+x/3764.34+" pesos");
  } else if (y == 4 && z == 1) {
    console.log("Tu tienes "+x/112.18+" pesos");
  } 
  else {
    console.log("Ingresa un numero correcto");
  }
}

changes(amount,origin,money)
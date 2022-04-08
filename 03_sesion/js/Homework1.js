//  1- Evaluar una calificacion
// -Solicitar una calificacion al usuario de 0 a 100
// -Evaluemos con un if si su calificacions es A, B, C, D, E, etc
// -Evaluemos con un switch su calificacion.

// Calificaciónes
// < 60  calificacion 'F'
// < 70 calificacion 'D'
// < 80 calificacion C
// < 90 calificacion B
// < 100 calificacion A

let calification = prompt("Ingresa una calificacion");
calification = Number(calification);

function evaluation(x) {
  if (x >= 90 && x <= 100) {
    console.log(A);
  } else if (x >= 80 && x < 90) {
    console.log("B");
  } else if (x >= 70 && x < 80) {
    console.log("C");
  } else if (x >= 60 && x < 70) {
    console.log("D");
  } else {
    console.log("F");
  }
}

evaluation(calification)


switch (evaluation) {
  case "A":
    console.log("La calificacion es A excelente");
    break;
  case "B":
    console.log("La calificacion es B  bien");
    break;
  case "C":
    console.log("La calificacion es C  sigue mejorando");
    break;
  case "D":
    console.log("La calificacion es D sigue esforzandote");
    break;
  default:
    console.log("Lo sentimos reprobaste");
    break;
}

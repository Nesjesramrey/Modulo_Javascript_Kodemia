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

//let calification = prompt("Ingresa una calificacion");
// calification = Number(calification)

// function evaluation (x) {
//     if(x>=90 && x <= 100){
//         console.log("La calificacion es A felicidades")
//     }
//     else if(x>=80 && x < 90 ){
//         console.log("La calificacion es B muy bien")
//     }
//     else if(x>=70 && x < 80 ){
//         console.log("La calificacion es C  bien")
//     }
//     else if(x>=60 && x < 70 ){
//         console.log("La calificacion es D sigue esforzandote tu puedes")
//     }
//     else{
//         console.log("La calificacion es F lo sentimos no has aprobado")}
// }


let calification = prompt("Ingresa una calificacion");
calification = Number(calification)

switch (calification) {
    case (calification < 60) :
        console.log("La calificacion es F lo sentimos no aprobaste")
    break;
    case (calification < 70 ):
        console.log("La calificacion es D sigue esforzandote")
    break;
    case (calification < 80 ):
        console.log("La calificacion es C  bien")
    break;
    case (calification < 90 ):
        console.log("La calificacion es B muy bien")
    break;
    case (calification < 100 ):
        console.log("La calificacion es A excelente")
    break;
    default:
        console.log("Reingresa una calificacion correcta")
    break;
}

 // input
let koders = [
    ['jose', 'de anda'],
    ['danny', 'vazquez'],
    ['Aaron', 'Enciso']
];
 // -----
 //output
// let result = [
//     {
//         nombre: 'jose',
//         apellido: 'de anda'
//     },
//     {
//         nombre: 'danny',
//         apellido: 'vazquez'
//     },
//     {
//         nombre: 'Aaron',
//         apellido: 'Enciso'
//     }
// ];

// function generateKoders () {
//     let newKoders = [];

//     for (let index = 0; index < koders.length; index++) {
//         let infoKoder ={
//             nombre: koders[index][0],
//             apellido: koders[index][1],
//         };
//         newKoders.push(infoKoder);
//     };
//     console.log(newKoders);
//     return newKoders;
// }

// generateKoders();


const generacion18 = [
  {
    signature: "Js",
    koders: ["Ivan", "Freddy"],
    mentor: "Ivan Diaz"
  },
  {
    signature: "HTML",
    koders: ["Jason", "Penny", "Freddy"],
    mentor: "Alan "
  },
  {
    signature: "CSS",
    koders: ["Arnold", "Gerald"],
    mentor: "David "
  },
  {
    signature: "Introduccion",
    koders: ["Steve", "Charlie"],
    mentor: "Elvira "
  },
  {
    signature: "React",
    koders: ["Ivan", "Harry", "Freddy"],
    mentor: "Alejandra"
  }
];



// generacion18.forEach(object =>{
//     if(object.signature === "Js"){
//         console.log(object.signature, object.koders, object.mentor);
//     }
// });

// let materia = prompt("Ingresa una materia;")
// const result = generacion18.find((signature) => {
//         return signature.signature === materia;
//     })
// console.log(result)

//aplicar filtro por signature


//input : 'Js'

// output:
//   {
//        signature: 'Js',
//        koders:  ["Ivan", "Freddy"],
//        mentor: 'ivan diaz'
//   }

// function FiltrarPorMateria (){
//     let materia = prompt("Ingresa una materia:");
//     for (let index = 0; index < generacion18.length; index++){
//         if(materia === generacion18[index].signature){
//             console.log(generacion18[index])
//         }
//     }
// }
//  FiltrarPorMateria()



// input: "Freddy";
// output: ["Js", "HTML", "React"];


function FiltrarPorKoder (){
    
    let koder = "Freddy"
    for (let index = 0; index < generacion18.length; index++){
      if (koder === generacion18[index].koders[1]){
        console.log(generacion18[index].signature)
      }
        
    }
}
 FiltrarPorKoder()






// let nombres = []
// const saludar = (name) => {
//     nombres.push(name)
// }

// saludar("ivan")
// console.log(nombres)






//console.log(generacion18[0])


// generacion18.forEach(object =>{
//     if(object.signature === "Js"){
//         console.log(object.signature, object.koders, object.mentor);
//     }
// });
    

// const filtrarPorMateria = (materia) =>{
//     let result ='';

//     for(let index = 0; index < generacion18.length; index++){
//         if(materia === generacion18[index].signature){
//             result = generacion18[index];
//         }
//     }
//     return result;
// }

// console.log(filtrarPorMateria('Js'))


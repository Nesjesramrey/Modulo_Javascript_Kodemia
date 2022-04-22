// -obtener el score promeddio de cada materia (HTML, CSS, JS, ReactJS)

// -obtener el promedio individual de cada mentor
// -crear un array de strings con la siguiente forma:

//     "Mi nombre es {nombre} y mi promedio es de {promedio}"
// -obtener la lista de mentores cuyo promedio sea mayor a 9.5 


const mentorsArray = [
    {
        name:"Ivan",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"Alejandra",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Alan",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Oscar",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
  ]

 

// mentorsArray.forEach((item, index, arr) => {
    
// item.scores.forEach((score, index, arr) =>{    
//     let result =0
//     if(score.signature ==="HTML"){              
//        result += score.score
//        console.log(result)
//     }
// }
// )
// })


// let HTML = 0;
// let CSS = 0;
// let JS = 0;
// let ReactJS = 0;

// mentorsArray.forEach((item, index, arr) => {
// item.scores.forEach((score, index, arr) =>{     
//     if(score.signature ==="HTML"){              
//        HTML += score.score
//     }
//     else if(score.signature ==="CSS"){              
//         CSS += score.score
//      }
//      else if(score.signature ==="JS"){              
//         JS += score.score
//      }
//      else if(score.signature ==="ReactJS"){              
//         ReactJS += score.score
//      }
// }
// )
// })



// console.log(`El promedio de HTML es: ${HTML/4}`)
// console.log(`El promedio de CSS es: ${CSS/4}`)
// console.log(`El promedio de JS es: ${JS/4}`)
// console.log(`El promedio de ReacJS es: ${ReactJS/4}`)


//todo Primer intento
let Ivan = 0;
let Alejandra = 0;
let Alan = 0;
let Oscar = 0;

mentorsArray.forEach((mentor, index, arr) => {
mentor.scores.forEach((score, index, arr) =>{         
    if(mentorsArray[index].name ==="Ivan"){              
       Ivan += score.score
    }
    else if(mentorsArray[index].name ==="Alejandra"){              
        Alejandra += score.score
     }
     else if(mentorsArray[index].name ==="Alan"){              
        Alan += score.score
     }
     else if(mentorsArray[index].name ==="Oscar"){              
        Oscar += score.score
     }
}
)
})

console.log(`El promedio de ${mentorsArray[0].name} es: ${Ivan/4}`)
console.log(`El promedio de ${mentorsArray[1].name} es: ${Alejandra/4}`)
console.log(`El promedio de ${mentorsArray[2].name} es: ${Alan/4}`)
console.log(`El promedio de ${mentorsArray[3].name} es: ${Oscar/4}`)


// function avgMentors (Array){
//     let Ivan = 0;
//     let Alejandra = 0;
//     let Alan = 0;
//     let Oscar = 0;
//       Array.forEach((item, index,) => {
//           if(item.name === "Ivan"){
//           item.scores.forEach((scores) => {
              
//               Ivan += scores.score;
//           })
//         }
//         if(item.name === "Alejandra"){
//             item.scores.forEach((scores) => {
                
//                 Alejandra += scores.score;
//             })
//           }
//           if(item.name === "Alan"){
//             item.scores.forEach((scores) => {
                
//                 Alan += scores.score;
//             })
//           }
//           if(item.name === "Oscar"){
//             item.scores.forEach((scores) => {
                
//                 Oscar += scores.score;
//             })
//           }
    
//         })
//     avgIvan = Ivan/4;
//     avgAlejandra = Alejandra/4;
//     avgAlan = Alan/4;
//     avgOscar = Oscar/4;
//     let arrResumed = [];
//     arrResumed += {name: mentorsArray.name, average: avgIvan }
//     console.log(arrResumed)
    
    
//     }
    
//     avgMentors(mentorsArray) 
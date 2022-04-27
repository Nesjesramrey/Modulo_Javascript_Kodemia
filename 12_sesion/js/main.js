//.map => retorna un nuevo arreglo con la misma cantidad de elementos que tiene el arreglo que se itero

// const numeros = [2, 5, 6, 1];

// const numerosConCalculo = numeros.map((item, index, arr) => {
//     if(item < 3) {
//         return item
//     }
// });

// const numerosFiltrados = numeros.filter((item, index) => item < 3);

// const numerosFiltrados = numeros.filter((item) => {
//     if(item < 3) {
//         return item
//     }
// });

// console.log(numerosFiltrados)
// [ 2, 1]

// const numerosConCalculoForEach = numeros.forEach((item, index, arr) => {
//     return item + 3;
// });

// const personas = [
//     {
//         nombre: 'jason',
//         edad: 9,
//     },
//     {
//         nombre: 'freddy',
//         edad: 9,
//     },
//     {
//         nombre: 'Penny',
//         edad: 9,
//     },
//     {
//         nombre: 'Arnold',
//         edad: 9,
//     }
// ];

// ['jason', 'freddy', 'Penny', 'Arnold']

// const nombres = personas.map((item) => {
//     // const frase = `hola soy ${item.nombre} y tengo ${item.edad}`
//     return {
//         villano: item.nombre,
//         age: item.edad
//     };
// });

// - Crear una lista con los mentores y sus promedios
// -obtener la lista de mentores cuyo promedio sea mayor a 9.5

const mentorsArray = [
  {
    name: "Ivan Diaz Alarcon",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 10,
      },
      {
        signature: "JS",
        score: 8,
      },
      {
        signature: "ReactJS",
        score: 8,
      },
    ],
  },
  {
    name: "Alejandra Paez Kodemia",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 7,
      },
      {
        signature: "JS",
        score: 10,
      },
      {
        signature: "ReactJS",
        score: 10,
      },
    ],
  },
  {
    name: "Alan Medina Medina",
    scores: [
      {
        signature: "HTML",
        score: 9,
      },
      {
        signature: "CSS",
        score: 9,
      },
      {
        signature: "JS",
        score: 10,
      },
      {
        signature: "ReactJS",
        score: 9,
      },
    ],
  },
  {
    name: "Oscar Castillo Castillo",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 10,
      },
      {
        signature: "JS",
        score: 9,
      },
      {
        signature: "ReactJS",
        score: 10,
      },
    ],
  },
  {
    name: "Pepito Ramirez Reyes",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 10,
      },
      {
        signature: "JS",
        score: 9,
      },
      {
        signature: "ReactJS",
        score: 10,
      },
    ],
  },
];

// const resultadoDeMentores = mentorsArray.map(( mentor ) => {
//     let accum = 0;
//     mentor.scores.forEach((calificacion) => {
//         accum += calificacion.score
//     });
//     const promedio = accum / mentor.scores.length;

//     const mentorInfo = {
//         nombre: mentor.name,
//         promedio,
//     };

//     return mentorInfo;
// });

// const aprovados = resultadoDeMentores.filter(( promedio ) => {
//     if(promedio.promedio > 9) {
//         return promedio;
//     }
// });

// console.log(resultadoDeMentores);
// console.log(aprovados);
// [
//     {
//         nombre: 'asdas',
//         promedio: 9,
//     },
//     {
//         nombre: 'adfdf',
//         promedio: 9,
//     }
// ]

// - Crear un nuevo arreglo con los mentores cuyo nombre inicien con una vocal
// - Crear un nuevo arreglo con las inciales de cada mentor

// input : [
//     'Ivan Diaz Alarcon'
// ]

// outpu: [
//     I.D.A
// ]

//**Primero: Revisar los elementos del arreglo por cada nombre y ver si inician en vocal
//**Segundo: Revisar  si incluye una vocal
//** Tercero : Devolver un array con los nombres

//Mi intento
// <const namesMentors = mentorsArray.map(( mentor ) => {
//     let listMentors = [];
//         if(mentor.name[0].match(/[aeiou]/gi))
//         listMentors += mentor.name[0];
//             return listMentors
//     });

// console.log(namesMentors);

//resultado
// const namesMentors = mentorsArray.filter(( mentor ) => {

//         if(mentor.name[0].match(/[aeiou]/gi))
//         return  mentor;
//     });

//     console.log(namesMentors);


//tarea mi solucion
// const namesMentors = mentorsArray.map((mentor) => {
//   let listMentors = [];
//   let nameSplit = mentor.name.split(" ")
//   console.log(nameSplit)
//   nameSplit.forEach((name) => {
//     listMentors += name[0]
//      console.log(listMentors)
//     console.log(name[0])
//   })
//    console.log(nameSplit[0][0],nameSplit[1][0],nameSplit[2][0]);
//   return listMentors
  
// });

// console.log(namesMentors)


//Ejercicio en clase
const formatearNombre = (mentores) => {
  const result = mentores.map((item) => {
    const arrayName = item.name.split(' ');
    let accum ='';
    arrayName.map((firstLetter) => {
      
      accum += firstLetter.charAt(0) + "."
    })
    //console.log(accum)
    return accum;
  })
  //console.log(result)
  return result
}

const formatted = formatearNombre(mentorsArray)
console.log(formatted)
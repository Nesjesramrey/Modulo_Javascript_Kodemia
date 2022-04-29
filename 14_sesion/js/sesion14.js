// const persona = {
//     name: 'Freddy',
//     lastName: 'Krueger',
//     saludar: function( params ) {
//         console.log('hola');
//     },
// };

// // persona.saludar();
// let edad = 10

// function sacarIniciales(name, lastName) {
//     return `${name[0]}.${lastName[0]}`
// }

// function Persona (name, lastName) {
//     this.name = name;
//     this.lastName = lastName;
//     this.inciales = sacarIniciales(this.name, this.lastName);
// };

// Persona.prototype.saludar = function (params) {
//     console.log(` hola soy ${this.name}`)
// }

// const persona1 = new Persona('jason', 'vorhees');
// persona1.saludar()
// console.log(persona1)

const koders = [
  {
    name: "Harold",
    lastName: "López",
    birthday: "1996/06/24",
    generation: 9,
    bootcamp: "JavaScript",
    scores: [
      {
        module: "Frontend",
        score: 90,
      },
      {
        module: "Backend",
        score: 80,
      },
      {
        module: "Cloud",
        score: 80,
      },
    ],
  },
  {
    name: "Arnold",
    lastName: "Osborn",
    birthday: "1998/05/12",
    generation: 1,
    bootcamp: "Python",
    scores: [
      {
        module: "Frontend",
        score: 90,
      },
      {
        module: "Backend",
        score: 100,
      },
      {
        module: "Cloud",
        score: 100,
      },
    ],
  },
  {
    name: "Peter",
    lastName: "Parker",
    birthday: "1994/10/26",
    generation: 10,
    bootcamp: "JavaScript",
    scores: [
      {
        module: "Frontend",
        score: 100,
      },
      {
        module: "Backend",
        score: 95,
      },
      {
        module: "Cloud",
        score: 80,
      },
    ],
  },
  {
    name: "Homer",
    lastName: "Simpson",
    birthday: "1996/06/24",
    generation: 1,
    bootcamp: "Python",
    scores: [
      {
        module: "Frontend",
        score: 98,
      },
      {
        module: "Backend",
        score: 100,
      },
      {
        module: "Cloud",
        score: 70,
      },
    ],
  },
  {
    name: "Ren",
    lastName: "López",
    birthday: "1996/06/24",
    generation: 9,
    bootcamp: "JavaScript",
    scores: [
      {
        module: "Frontend",
        score: 80,
      },
      {
        module: "Backend",
        score: 90,
      },
      {
        module: "Cloud",
        score: 100,
      },
    ],
  },
];

// Teniendo la siguiente coleccion de koders genera una coleccion de objetos de tipo koder
// Agregando ademas las siguientes funciones:

// Prototipo koder

// -Obtener la edad a partir de la fecha de nacimiento
// -Obtener promedio de sus scores
// -Tenga el name
// -Tenga el lastName
// -bootcamp

// ----------

// Obtener una coleccion de Koder que pertenezca a Javascript
// Obtener una coleccion de Koder que pertenezca a Python

// generar el prototipo
// hay que sacar la edad de cada koder

//Todo Mi solucion

// function Koder(age, promedio, name, lastname, bootcamp) {
//   this.age = age;
//   this.promedio = promedio;
//   this.name = name;
//   this.lastname = lastname;
//   this.bootcamp = bootcamp;
// }

// let person1 = new Koder(18,9,nameKoder(koders))
// console.log(person1)

// // const persona1 = new Koder("18","9","nestor", "ramirez", "generacion")
// // console.log(persona1)

// function getAge(date) {
//   let ageKoder = [];
//   date.forEach((item) => {
//     let birthdays = new Date(item.birthday);
//     //console.log(birthdays)
//     let years = birthdays.getFullYear();
//     //console.log(years)
//     let today = new Date();
//     let yearToday = today.getFullYear();
//     let ages = yearToday - years;
//     //console.log(ages)
//     ageKoder.push(ages);
//   });
//   return ageKoder;
// }

// //console.log(getAge (koders))

// function promedios(date) {
//   let scoreAvg = [];
//   date.forEach((item) => {
//     //console.log(item)
//     let sumScores = 0;
//     let asig = item.scores.length;
//     item.scores.forEach((score) => {
//       //console.log(score.score)
//       sumScores += score.score;      
//     });
//     let scoresAvg = sumScores / asig;
//     scoreAvg.push(scoresAvg);
//   });
//   return scoreAvg;
// }

// //console.log(promedios(koders))


// function nameKoder (date){
//   let names = []
//   date.forEach((item) => {  
//   names.push(item.name)
// });
// return names
// } 

// //console.log(nameKoder(koders))

// koders.map((item) => {
//   //console.log(item.lastName)
// });

// koders.map((item) => {
//   //console.log(item.bootcamp)
// });


//todo Solucion clase

//**para agregar los promedio creamos una funcion que agregara informacion  */

function promedio(koderScores){
  const promedio =koderScores.reduce( (accum, item)=>{
    return accum += item.score;
  },0 );  
  const result = promedio/koderScores.length
  return result
}

function calcularEdad (birthday){
  
  const currentYear = new Date().getFullYear();
  //** opcion de obtener el año con split */
  //const birthdayYear = birthday.split('/')[0];
  const birthdayYear = new Date(birthday).getFullYear()
  const age = currentYear - Number(birthdayYear);
  return age;
}



function Koder (name, lastName, bootcamp, birthday, scores) {
  this.name = name;
  this.lastName = lastName;
  this.bootcamp = bootcamp;
  //this.birthday = birthday;
  this.edad = calcularEdad(birthday);
  //**para efectos del ejercicio solo ocupamos el promedio sin embargo podemos mantenerla 
  //* cuidando que el nombre despues de this no sea el mismo ya que solo tomara el ultimo this 
  //this.score =scores;
  this.promedio = promedio(scores);
}


//** Primero opcion pasar los datos manual */

//const koder1 = new Koder ('nestor', 'ramirez', 'Javascript', 'asd', 'asd')
//console.log(koder1)

//**Agregar datos del array */

const koderListInstance = koders.map((koder)=>{
  //const koderInstance = new Koder(koder.name, koder.lastName, koder.generation, koder.birthday, koder.scores)
  //** Para evitar tener un codigo tan largo hacemos destructuring */
  const {name, lastName, generation, birthday, scores} = koder;  
  const koderInstance = new Koder(name, lastName, generation, birthday, scores)
  //console.log(koderInstance)
  return koderInstance  
})

console.log(koderListInstance)

//*Sintaxis nueva para generar prototipos
//*Usamos la palabra reservada clase y el metodo constructor
//*declaramos los parametros en parentesis primero
//*despues de las llaves declaramos las propiedades de la clase
//*para agregar una funcion no necesito palabra declara con "saludar" basta el nombre y los parentesis


class Koder2 {
  constructor(name, lastName, age) {
    this.name = name;

  }
  saludar(){
    console.log(`hola soy ${this.name}`)
  }
}

const koder2 = new Koder2 ('ivan')
console.log(koder2)
//*solo llamamos la funcion declarandola, sin el console.log ya que saldria undifined
koder2.saludar()

//*herencias
//* "extends 'Nombre de clase'
//* "super" llama al constructor para copiar las instancias

class Koder3 extends Koder2 {
  constructor(name, lastName, age, bootcamp, generation){
    super(name, lastName, age)
    this.bootcamp = bootcamp;
    this.generation = generation;
  }
}

const koder3 = new Koder3('ivan', 'diaz', 31, 'javascript',18)
console.log(koder3)
// const numbers = [1, 5, 9];

// const sum = numbers.reduce((accum, item, index, arr) =>{
//     return accum + item;
// },0)

// console.log(sum)

let arrayPersons = [
  {
    name: "Phibee",
    age: 25,
    vaccinated: true,
    gender: "mujer",
  },
  {
    name: "Katrinka",
    age: 26,
    vaccinated: false,
    gender: "mujer",
  },
  {
    name: "Bruno",
    age: 48,
    vaccinated: false,
    gender: "hombre",
  },
  {
    name: "Jon",
    age: 22,
    vaccinated: true,
    gender: "hombre",
  },
  {
    name: "Brian",
    age: 20,
    vaccinated: false,
    gender: "hombre",
  },
  {
    name: "Eugene",
    age: 38,
    vaccinated: true,
    gender: "hombre",
  },
  {
    name: "Big Bob",
    age: 29,
    vaccinated: true,
    gender: "hombre",
  },
  {
    name: "Ximena",
    age: 40,
    vaccinated: false,
    gender: "mujer",
  },
  {
    name: "Paulet",
    age: 37,
    vaccinated: false,
    gender: "mujer",
  },
  {
    name: "Harold",
    age: 45,
    vaccinated: true,
    gender: "hombre",
  },
  {
    name: "Gerald",
    age: 22,
    vaccinated: false,
    gender: "hombre",
  },
  {
    name: "Arnold",
    age: 35,
    vaccinated: true,
    gender: "hombre",
  },
  {
    name: "Gelga",
    age: 28,
    vaccinated: true,
    gender: "mujer",
  },
  {
    name: "Lila",
    age: 18,
    vaccinated: true,
    gender: "mujer",
  },
  {
    name: "Rhonda",
    age: 18,
    vaccinated: true,
    gender: "mujer",
  },
];

/*
Usar reduce para obtener la siguiente informacion
- Un array con aquellas personas que se vacunaron ok
- la edad promedio de todos los vacunados ok
- un array con aquellas personas que se vacunaron y que son menores a 30 años ok
- la edad promedio de los no vacunados ok
- el porcentaje de vacunados vs no vacunados
- el procentaje de mujeres que se vacunaron
- el porcentaje de los hombres que vacunarion
*/
//? Array con los Vacunados
//Primero debo determinar quienes se han vacunado
//recorro el array y despues puedo comparar cada propiedad del array para retornar quien cumple la condicion
//despues una vez los tengo debo generar el array de cada elemento que cumple la condicion

// const vaccinated = arrayPersons.reduce((accum, item, index) =>{
//     let accumVac = []
//     if(item.vaccinated === true){
//         console.log(item.name)
//         //accumVac.push(item.name)

//         }
//         //console.log(accumVac)
//      },[])

//? Promedio edad vacunados

// const avgAgeVaccinated = arrayPersons.reduce((accum, item, index, arr) =>{
//     //let sumAge =0;
//     if(item.vaccinated === true){
//         console.log(item.age)

//      }

// },0)

// console.log(avgAgeVaccinated)

//? Promedio edad no vacunados

// const avgAgeNoVaccinated = arrayPersons.reduce((accum, item, index, arr) =>{
//     let sumAge =[];
//     if(item.vaccinated === false){
//         //console.log(item.age)
//         sumAge.push(item.age)
//         console.log(sumAge)

//      }
//      return sumAge
// },[])

// console.log(avgAgeNoVaccinated)

// //?vacunados menores de 30

// const avgAgeVaccinated = arrayPersons.reduce((accum, item, index, arr) =>{
//     //let sumAge =0;
//     if(item.vaccinated === true){
//         if(item.age < 30 )
//     console.log(item.age)
//      }

// },[])

// console.log(avgAgeVaccinated)

// //?porcentaje vacunados vs no vacunados
// const percentVaccinatedvsNoVaccinated = arrayPersons.reduce((accum, item, index, arr) =>{
//     //let sumAge =[];
//     if(item.vaccinated === true){
//       console.log(item.name)
//         //sumAge += item.name
//      }

// },[])

// console.log(percentVaccinatedvsNoVaccinated)

// //?porcentaje hombres que se vacunaron
// const percentMen = arrayPersons.reduce((accum, item, index, arr) =>{
//     //let sumAge =[];
//     if(item.vaccinated === true){
//         if(item.gender === "hombre" )
//     console.log(item.name)
//      }

// },[])

// console.log(percentMen)

//?porcentaje mujeres que se vacunaron
const percentWomen = arrayPersons.reduce((personas, item, index) => {
    //personas[item] = (personas[item] || 0) + 1;
    
    if (item.vaccinated === true) {
    if (item.gender === "mujer") {
      console.log(item.name);
     
    }
  }
  //return personas;
}, {});

console.log(percentWomen);

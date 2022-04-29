
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
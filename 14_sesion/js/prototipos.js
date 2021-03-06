// const natalia = {
//     name: "Natalia",
//     age: 20,
//     cursosAprobados: [
//       "Curso Definitivo de HTML y CSS",
//       "Curso Práctico de HTML y CSS",
//     ],
//     aprobarCurso(nuevoCursito) {
//       this.cursosAprobados.push(nuevoCursito);
//     },
//   };

// //natalia.cursosAprobados.push("Curso responsive design")
// //console.log(natalia)

//   function Student(name, age, cursosAprobados) {
//     this.name = name;
//     this.age = age;
//     this.cursosAprobados = cursosAprobados;
//     // this.aprobarCurso = function (nuevoCursito) {
//     //   this.cursosAprobados.push(nuevoCursito);
//     // }
//   }
//   Student.prototype.aprobarCurso = function (nuevoCursito) {
//     this.cursosAprobados.push(nuevoCursito);
//   }
  
//   const juanita = new Student(
//     "Juanita Alejandra",
//     15,
//     [
//       "Curso de Introducción a la Producción de Videojuegos",
//       "Curso de Creación de Personajes",
//     ],
//   );

//   // Prototipos con la sintaxis de clases
// class Student2 {
//     constructor({
//       name,
//       cursosAprobados = [],
//       age,
//       email,
//     }) {
//       this.name = name;
//       this.email = email;
//       this.age = age;
//       this.cursosAprobados = cursosAprobados;
//     }
  
//     aprobarCurso(nuevoCursito) {
//       this.cursosAprobados.push(nuevoCursito);
//     }
//   }
  
//   const miguelito = new Student2({
//     name: "Miguel",
//     age: 28,
//     email: "miguelito@platzi.com",
//   });

class Course {
    constructor({
      name,
      classes = [],
    }) {
      this.name = name;
      this.classes = classes;
    }
  }
  
  const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
  });
  const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });
  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
  });
  
  
  class LearningPath {
    constructor({
      name,
      courses = [],
    }) {
      this.name = name;
      this.courses = courses;
    }
  }
  
  const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
      cursoProgBasica,
      cursoDefinitivoHTML,
      cursoPracticoHTML,
    ],
  });
  
  const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
      cursoProgBasica,
      "Curso DataBusiness",
      "Curso Dataviz",
    ],
  });
  
  const escuelaVgs = new LearningPath({
    name: "Escuela de Vidweojuegos",
    courses: [
      cursoProgBasica,
      "Curso de Unity",
      "Curso de Unreal",
    ],
  })
  
  class Student {
    constructor({
      name,
      email,
      username,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this.name = name;
      this.email = email;
      this.username = username;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
    }
  }
  
  const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });
  
  const miguelito2 = new Student({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });
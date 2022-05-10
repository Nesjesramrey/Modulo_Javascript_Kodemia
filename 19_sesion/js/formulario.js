const buttonSubmit = document.querySelector("#submit");
const parrafo = document.querySelector("p");

let arrayUsers = [];
//se puede hacer con el submit, sin embargo al revisar en el formulario hay que poner el return onsubmit para que cargue la pagina
buttonSubmit.addEventListener("click", () => {
  //console.log("evento capturado")
  const nombre = document.querySelector("#nombre").value;
  const apellidos = document.querySelector("#apellidos").value;

  //**Este codigo capturaba el nombre y apellido en una sola linea y cuando recargaba solo se actualizaba con el ultimo */
  //const p_nombre = document.querySelector("#p_nombre");
  //const p_apellidos = document.querySelector("#p_apellidos");
  //p_nombre.textContent = nombre;
  //p_apellidos.textContent = apellidos;

  const ulPerson = document.createElement("ul");
  const liPerson = document.createElement("li");
  const spanPerson = document.createElement("span");
  const buttonPerson = document.createElement("button");
  buttonPerson.classList.add("delete");

  const firstName = document.createTextNode(nombre);
  const lastName = document.createTextNode(` ${apellidos}`);
  buttonPerson.textContent = `Eliminar`;
  const newObject = {
    name: nombre,
    lastName: apellidos,
  };
  arrayUsers.push(newObject);
  console.log(arrayUsers);

  spanPerson.appendChild(firstName);
  spanPerson.appendChild(lastName);
  spanPerson.appendChild(buttonPerson);
  liPerson.appendChild(spanPerson);
  ulPerson.appendChild(liPerson);
  parrafo.appendChild(ulPerson);
  //const nuevo = document.createTextNode("Uno nuevo");
  //  person.appendChild(nuevo);
  // document.body.appendChild(parrafo);
  // const buttonDelete = document.querySelectorAll(".delete");
  // console.log(buttonDelete)
  // buttonDelete.forEach(() => {buttonPerson.addEventListener("click", () => {
  //   console.log("evento capturado")
  //   ulPerson.removeChild(liPerson)
  // })
  arrayUsers.forEach((item, index) => {
    buttonPerson.setAttribute("data-indexB", index);
  });

  buttonPerson.addEventListener("click", (event) => {
    const indexRemove = event.target.dataset.indexB;

    //console.log("evento capturado")
    ulPerson.removeChild(liPerson);
    arrayUsers.splice(indexRemove, 1);
    console.log(arrayUsers);
  });
});

const person = {
  name: "Zajith",
  email: "zajith@mail.com",
};

const person2 = person;

person2.name = "Juanito";

//**aunque se cambio solo person2 tambien hay un cambio en person */
//console.log(person2); // { name: 'Juanito', email: 'zajith@mail.com' }
//console.log(person); // { name: 'Juanito', email: 'zajith@mail.com' }

//Las variables son una referencia a un espacio en memoria. Dependiendo del tipo de valor que sean serán ubicadas 
//en alguna de las dos tipos de memoria:

// Stack - Mucho más rápida, pero sin tanto espacio
// Heap - Más lenta, pero con mucho más espacio
// Las variables que no tienen un valor de tipo objeto, son almacenadas en la memoria stack. Las variables que tienen como
// valor un objeto, funcionan de una manera diferente:

// El valor (objeto) es guardada en la memoria heap
// En la memoria stack se guarda un apuntador (pointer) hacia la memoria heap
// Es por esto que cuando nosotros asignamos una variable que tiene como valor un objeto, a una nueva variable, 
//lo unico que hacemos es asignar el apuntador. Es así que al modificar el objeto, en cualquiera de las dos variables, 
//los cambios se reflejan en las dos

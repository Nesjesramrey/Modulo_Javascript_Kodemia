const buttonSubmit = document.querySelector("#submit");
const parrafo = document.querySelector('p');


//se puede hacer con el submit, sin embargo al revisar en el formulario hay que poner el return onsubmit para que cargue la pagina
buttonSubmit.addEventListener("click", () => {
  console.log("evento capturado")
  const nombre = document.querySelector("#nombre").value;
  const apellidos = document.querySelector("#apellidos").value;
  

  //const p_nombre = document.querySelector("#p_nombre");
  //const p_apellidos = document.querySelector("#p_apellidos");

  //p_nombre.textContent = nombre;
  //p_apellidos.textContent = apellidos;

  const ulPerson = document.createElement("ul");
  const liPerson = document.createElement('li');
  const spanPerson =document.createElement("span");
  const buttonPerson = document.createElement("button")
  buttonPerson.classList.add("delete");
  
  
  const firstName = document.createTextNode(nombre);
  const lastName = document.createTextNode(` ${apellidos}`);
  buttonPerson.textContent =`Eliminar`;

  spanPerson.appendChild(firstName);
  spanPerson.appendChild(lastName);
  spanPerson.appendChild(buttonPerson);
  liPerson.appendChild(spanPerson)
  liPerson.classList.add(`${nombre}`);  
  ulPerson.appendChild(liPerson)
  parrafo.appendChild(ulPerson)
  //const nuevo = document.createTextNode("Uno nuevo");

//  person.appendChild(nuevo);
 // document.body.appendChild(parrafo);  


});
const buttonDelete = document.querySelectorAll(".delete");
console.log(buttonDelete)
buttonDelete.forEach((button) =>{
    button.addEventListener("click", () => {
    console.log("evento capturado")  
  })
})







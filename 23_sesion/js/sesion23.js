const onRequest = (person) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        xhr.response;
      }
    }
  });
  const URL_FIREBASE =
    "https://nestorfirebase-default-rtdb.firebaseio.com/EquiporWorldMenu.json";

  xhr.open("POST", URL_FIREBASE);
  xhr.send(JSON.stringify(person));
};

let arrayResponse = [];
const onRequestDelete = (person) => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        xhr.response;
        const response = JSON.parse(xhr.response);
        //console.log(response)
        for (let property in response) {
          //console.log(response);
          //console.log(property);
          arrayResponse.push(property);
          //console.log(arrayResponse)
        }
        console.log(arrayResponse[0]);
        const URL_FIREBASE_DELETE = `https://nestorfirebase-default-rtdb.firebaseio.com/EquiporWorldMenu/${arrayResponse[0]}.json`
        xhr.open('DELETE', URL_FIREBASE_DELETE);
        xhr.send(person)
      }
    }
  });
  //console.log(arrayResponse)

  const URL_FIREBASE =
    "https://nestorfirebase-default-rtdb.firebaseio.com/EquiporWorldMenu.json";
  xhr.open("GET", URL_FIREBASE);
  xhr.send(person);

  
};


const inputs = document.querySelectorAll(".form-control");
const button = document.querySelector("#createPerson");
const ul = document.querySelector("ul");

let person = {};
const personList = [];

inputs.forEach((input) => {
  input.addEventListener("keyup", (event) => {
    if (event.target.name === "nombre") {
      person.nombre = event.target.value;
    } else {
      person.apellido = event.target.value;
    }
  });
});

button.addEventListener("click", (event) => {
  personList.push(person);
  onRequest(person);
  person = {};
  renderList();
});

const createLi = (person, index) => {
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  ul.appendChild(li);
  const text = document.createTextNode(`${person.nombre} ${person.apellido}`);
  li.appendChild(text);

  const button = document.createElement("button");
  button.classList.add("btn-danger");
  button.classList.add("btn");
  button.setAttribute("data-index", index);
  button.textContent = "Eliminar";
  li.appendChild(button);
  button.addEventListener("click", (event) => {
    const removeIndex = event.target.dataset.index;
    onRequestDelete(removeIndex);
    personList.splice(removeIndex, 1);
    renderList();
  });
};

const renderList = () => {
  while (ul.children.length > 0) {
    ul.firstChild.remove();
  }
  personList.forEach((person, index) => {
    createLi(person, index);
  });
};

renderList();
document.body.appendChild(ul);

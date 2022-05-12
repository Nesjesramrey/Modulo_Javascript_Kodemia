const onRequest = (person) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange',() =>{
        if(xhr.readyState ===4){
            if(xhr.status === 200){
                xhr.response
            }
        }
    });
    const URL_FIREBASE = 'https://koders-88d77-default-rtdb.firebaseio.com/equipoWorldMenu.json';

    xhr.open('POST', URL_FIREBASE);
    xhr.send(JSON.stringify(person))
}

const onRequestDelete = (person) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange',() =>{
        if(xhr.readyState ===4){
            if(xhr.status === 200){
                // const response = JSON.parse(xhr.response)
                // for(let property in response ) {
                //     response[property]
                // }
                console.log(xhr.response)
            }
        }
    });

    //const hash = 
    const URL_FIREBASEDELETE = 'https://koders-88d77-default-rtdb.firebaseio.com/equipoWorldMenu/.json'
    const URL_FIREBASE = 'https://koders-88d77-default-rtdb.firebaseio.com/equipoWorldMenu/.json'

    
    xhr.open('DELETE', URL_FIREBASEDELETE);
    xhr.send(JSON.stringify(person))
}


const inputs = document.querySelectorAll('.form-control');
const button = document.querySelector('#createPerson');
const ul = document.querySelector('ul');

let person = {};
const personList = [];

inputs.forEach((input) => {
    input.addEventListener('keyup', (event) => {
        if(event.target.name === 'nombre') {
            person.nombre = event.target.value
        } else {
            person.apellido = event.target.value
        }
    });
});

button.addEventListener('click', (event)=>{
    personList.push(person);
    onRequest(person)
    person = {};
    renderList()
});

const createLi = (person, index) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item')
    ul.appendChild(li);
    const text = document.createTextNode(`${person.nombre} ${person.apellido}`);
    li.appendChild(text);

    const button = document.createElement('button');
    button.classList.add('btn-danger');
    button.classList.add('btn');
    button.setAttribute('data-index', index)
    button.textContent = 'Eliminar'
    li.appendChild(button)
    button.addEventListener('click', (event) => {
        const removeIndex = event.target.dataset.index;
        onRequestDelete(person);
        personList.splice(removeIndex, 1);
        renderList()
    });
};

const renderList = () => {
    while(ul.children.length > 0) {
        ul.firstChild.remove()
    }
    personList.forEach((person, index) => {
        createLi(person, index)
    });
};

renderList()
document.body.appendChild(ul)


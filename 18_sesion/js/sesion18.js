const buttonList = document.querySelectorAll('.btn');

console.log(buttonList)

buttonList.forEach((button, index) => {

    button.classList.add('btn-danger');
    button.setAttribute('data-custom', `button${index}`);

    button.addEventListener('click', (event) => {
        console.log('se le dio click a un boton')
        console.log(event.target.dataset.custom)
    })

})

let arrayPersons = [
    {
        name: "Phibee", age: 25, vaccinated: true, gender: "mujer"
    },
    {
        name: "Katrinka", age: 26, vaccinated: false, gender: "mujer"
    },
    {
        name: "Bruno", age: 48, vaccinated: false, gender: "hombre"
    },
    {
        name: "Jon", age: 22, vaccinated: true, gender: "hombre"
    },
    {
        name: "Brian", age: 20, vaccinated: false, gender: "hombre"
    },
    {
        name: "Eugene", age: 38, vaccinated: true, gender: "hombre"
    },
    {
        name: "Big Bob", age: 29, vaccinated: true, gender: "hombre"
    },
    {
        name: "Ximena", age: 40, vaccinated: false, gender: "mujer"
    },
    {
        name: "Paulet", age: 37, vaccinated: false, gender: "mujer"
    },
    {
        name: "Harold", age: 45, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gerald", age: 22, vaccinated: false, gender: "hombre"
    },
    {
        name: "Arnold", age: 35, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gelga", age: 28, vaccinated: true, gender: "mujer"
    },
    {
        name: "Lila", age: 18, vaccinated: true, gender: "mujer"
    },
    {
        name: "Rhonda", age: 18, vaccinated: true, gender: "mujer"
    },
]

const ul = document.createElement('ul');
ul.classList.add('list-group')

arrayPersons.forEach((persona) => {
    console.log(persona)
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    const name =document.createTextNode(persona.name);
    li.appendChild(name);
    ul.appendChild(li);



    const button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.textContent ='seleccionar';
    li.appendChild(button);

    button.setAttribute('data-age', persona.age);

    button.addEventListener('click', (event) => {
        console.log(event.target.dataset.age)
        alert(`${persona.name} tiene ${persona.age}`)
    })
})

document.body.appendChild(ul)
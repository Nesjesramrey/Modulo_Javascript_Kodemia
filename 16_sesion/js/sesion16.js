let arrayPersons = [
    {
        name: "Nombre", age: "age", vaccinated: "vaccinated", gender: "gender"
    },
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



//**primero creo los elementos que voy a utilizar document.create */
//**despues realizo como ire agregando cada uno de los elementos appendChild's*/
//**realizo la funcion para agregar los nombres y asi veo si funciona  */


//const table  =document.createElement('table');

const tr  = document.createElement('tr');
const createNodeName = (name) => {
    
    const td = document.createElement('td');
    const koderName = document.createTextNode(name);
    td.appendChild(koderName);
    tr.appendChild(td)
    document.body.appendChild(tr)
}

arrayPersons.forEach((item) =>{
    createNodeName(item.name)

})

const trAge  = document.createElement('tr');
const createNodeAge = (name) => {
    
    const td = document.createElement('td');
    const koderName = document.createTextNode(name);
    td.appendChild(koderName);
    trAge.appendChild(td)
    document.body.appendChild(trAge)
}

arrayPersons.forEach((item) =>{
    createNodeAge(item.age)

})

const trVaccine  = document.createElement('tr');
const createNodeVaccine = (name) => {
    
    const td = document.createElement('td');
    const koderName = document.createTextNode(name);
    td.appendChild(koderName);
    trVaccine.appendChild(td)
    document.body.appendChild(trVaccine)
}

arrayPersons.forEach((item) =>{
    createNodeVaccine(item.vaccinated)

})

const trGender  = document.createElement('tr');
const createNodeGender = (name) => {
    
    const td = document.createElement('td');
    const koderName = document.createTextNode(name);
    td.appendChild(koderName);
    trGender.appendChild(td)
    document.body.appendChild(trGender)
}

arrayPersons.forEach((item) =>{
    createNodeGender(item.gender)

})




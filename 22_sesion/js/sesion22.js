//**  GET => obtener informacion especifica,  */
//** POST =>  Envia informacion para ser almacenada;  */
//** PUT/PATCH => Actualizar la informacion */
//** DELETE => eliminar la informacion*/

//! CRUD Create Read Update Delete

//? Respuestas informativas (100–199),
//? Respuestas satisfactorias (200–299),
//? Redirecciones (300–399),
//? Errores de los clientes (400–499),
//? y errores de los servidores (500–599).

//la clase XMLHttpRequest primero hay que instanciarla
// const xhr = new XMLHttpRequest()

//dentro de sus metodos podemos llamarlo como eventos, observar si el nombre inicia con "on" sera con addEventListener y se quita el "on"
// xhr.addEventListener('readystatechange', () =>{
//     //console.log(xhr.response, 'esta es la respuesta')
//     if(xhr.readyState === 4){
//         if(xhr.status === 200){
//             console.log(xhr.response)
//         }
//     }
// })


// Para hacer el llamado se activa un metodo que se llama "open" este activa la peticion, 
//recibe tres argumentos (verb, url, true)

// xhr.open('GET', 'https://rickandmortyapi.com/api/character');

//con send accionamos la peticion
// xhr.send();

// console.log(xhr)



//**Codigo de la clase */

// JSON.stringify() transforma un objeto en formato Json
// JSON.parse() transforma un Json en un objeto

const URL_API = 'https://rickandmortyapi.com/api/character';
const URL_FIREBASE = 'https://koders-88d77-default-rtdb.firebaseio.com/.json';


const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === 4) {
        if(xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            console.log(response);

            for(let property in response ) {
                response[property]
                console.log(response[property])
            }
        }
    }
});

//aqui construmos la peticion
// xhr.open("GET", URL_API);
xhr.open("GET", URL_FIREBASE )
// xhr.open("POST", URL_FIREBASE )

//aqui enviamos la peticion
xhr.send();
// xhr.send(JSON.stringify({
//     name: 'Freddy2',
//     lastName: 'Krueger',
// }));

console.log(xhr);



//response[property]


const object = {
    fruta: 'sandia',
    color: 'verde',
};

let property = 'color'

// object[property]

// objecto['fruta']

// objeto.fruta



const test = {
    "koder1": {
        "lastName": "Krueger",
        "name": "Freddy"
    },
    "koder2": {
        "lastName": "jason",
        "name": "Freddy"
    },
    "koder3": {
        "lastName": "penny",
        "name": "Wise"
    }
}

// let property = 'koder3';

// test[property]


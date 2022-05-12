const URL_API = 'https://emojihub.herokuapp.com/api/random';
//const URL_FIREBASE = 'https://koders-88d77-default-rtdb.firebaseio.com/.json';


const xhr = new XMLHttpRequest();



xhr.addEventListener('readystatechange', () => {
    //console.log(xhr)
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


//aqui construimos la peticion
xhr.open("GET", URL_API);
//xhr.open("GET", URL_FIREBASE )
// xhr.open("POST", URL_FIREBASE )

//aqui enviamos la peticion
xhr.send();
// xhr.send(JSON.stringify({
//     name: 'Freddy2',
//     lastName: 'Krueger',
// }));

//console.log(xhr);
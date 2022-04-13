let personas =[
    'peter',
    'jose',
    'alan',
    'peter',
    'jose',
    'alan',
    'peter',
    'jose',
    'alan'
]

console.log(personas[0]) //La idea es que cada que vez que quisieramos imprimir un valor del array no tengamos que hacerlo uno por unos


//Funcion while (primero pregunta la condicion y despues el cuerpo)

function cicloWhile(num){

    let index = 3; //creo una variable index para determinar las vueltas del ciclo

    while(index < num){   //while index is smaller than five
        index++;   // retunn index plus 1
        console.log(index)  //print 
        console.log('ciclo activado')
    }
}

cicloWhile(5);


//Ciclo Do While
function cicloDoWhile(){

    let index = 0 

    do{
        ++index
        console.log(index)
    }while(9<5);
}
cicloDoWhile()


//Ciclo for


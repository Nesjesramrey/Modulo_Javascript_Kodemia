/*
Ejercicio 1:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/

// enter the complete
let myName = prompt("Ingresa tu nombre completo");
// delate spaces
let namewhitoutspaces = myName.replace(/\s+/g, '')


// count the letters
function countLetters(name){
// return number of letters
    return (name.length)
}

//call the function
console.log("Tu nombre tiene "+countLetters(namewhitoutspaces)+ " letras")



/*
Ejercicio 2:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

function countVowel(vowels) { 
    //  count of vowels
    const count = vowels.match(/[aeiou]/gi).length;
    // return number of vowels
    return count;
}

//call the funtion
console.log("Tu nombre tiene "+ countVowel(myName)+ " vocales")



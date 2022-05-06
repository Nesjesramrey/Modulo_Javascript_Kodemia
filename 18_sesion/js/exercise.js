const section = document.createElement("section");
section.classList.add("card")
//section.setAttribute("style='width: 18rem';")
const tdResult = document.createElement("td");

const buttonPlus = document.createElement("button");
buttonPlus.classList.add("btn");
buttonPlus.classList.add("btn-primary");
const buttonMinus = document.createElement("button");
buttonMinus.classList.add("btn");
buttonMinus.classList.add("btn-dark");


buttonPlus.textContent = "+";
buttonMinus.textContent = "-";


let valorInicial = 0;
let clickPlus = () => { 
  valorInicial += 1;  
  tdResult.textContent = `${valorInicial}`;
}
buttonPlus.addEventListener("click", () => clickPlus());


 let clickMinus =() => {
  if (valorInicial === 0) {
  } else {
  valorInicial -= 1;
  tdResult.textContent = `${valorInicial}`;
  }
}
buttonMinus.addEventListener("click",() => clickMinus() );



tdResult.textContent = `${valorInicial}`;
section.appendChild(tdResult);
section.appendChild(buttonPlus);
section.appendChild(buttonMinus);


document.body.appendChild(section);

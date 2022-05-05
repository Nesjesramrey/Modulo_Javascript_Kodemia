const section = document.createElement("section");
const tdResult = document.createElement("td");

const buttonPlus = document.createElement("button");
buttonPlus.classList.add("btn");
buttonPlus.classList.add("btn-primary");
const buttonMinus = document.createElement("button");
buttonMinus.classList.add("btn");
buttonMinus.classList.add("btn-primary");

buttonPlus.textContent = "+";
buttonMinus.textContent = "-";

let valorInicial = 0;


let clickPlus = () => {
  let total = 0;
  total = valorInicial += 1;
  return total
}


buttonPlus.addEventListener("click", () => clickPlus());


buttonMinus.addEventListener("click", () => {
  if (valorInicial === 0) {
  } else {
    console.log((valorInicial -= 1));
  }
});

let result = result.textContent(clickPlus());


tdResult.appendChild(result);
section.appendChild(tdResult);
section.appendChild(buttonPlus);
section.appendChild(buttonMinus);

document.body.appendChild(section);

//-Con el array de mentores vamos a generar  una tabla con esta estrucutura

const mentorsArray = [
  {
    name: "Ivan Diaz Alarcon",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 10,
      },
      {
        signature: "JS",
        score: 8,
      },
      {
        signature: "ReactJS",
        score: 8,
      },
    ],
  },
  {
    name: "Alejandra Saenz Gonzalez",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 7,
      },
      {
        signature: "JS",
        score: 10,
      },
      {
        signature: "ReactJS",
        score: 10,
      },
    ],
  },
  {
    name: "Alan Hernandex Hernandex",
    scores: [
      {
        signature: "HTML",
        score: 9,
      },
      {
        signature: "CSS",
        score: 9,
      },
      {
        signature: "JS",
        score: 10,
      },
      {
        signature: "ReactJS",
        score: 9,
      },
    ],
  },
  {
    name: "Raul Aguirre Salazar",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 10,
      },
      {
        signature: "JS",
        score: 9,
      },
      {
        signature: "ReactJS",
        score: 10,
      },
    ],
  },
  {
    name: "Pepito Potter Ron",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 10,
      },
      {
        signature: "JS",
        score: 9,
      },
      {
        signature: "ReactJS",
        score: 10,
      },
    ],
  },
];

// const tr  = document.createElement('tr');

// const createNode = (name) => {

//     const td = document.createElement('td');
//     const koderName = document.createTextNode(name);
//     td.appendChild(koderName);
//     tr.appendChild(td)
//     document.body.appendChild(tr)
// }

//** Mi solucion */
// const table = document.createElement('table');

// mentorsArray.forEach((item) =>{
//     //createNode(item.name)
//     const tr  = document.createElement('tr');
//     const createNode = (name) => {

//         const td = document.createElement('td');
//         const koderName = document.createTextNode(name);
//         td.appendChild(koderName);
//         tr.appendChild(td)
//         table.appendChild(tr)
//         document.body.appendChild(table)
//     }
//     createNode(item.name)

//     item.scores.forEach((score) =>{
//         if(item.name === item.name) {

//         const createNode2 = (name) => {

//             const td = document.createElement('td');
//             const koderName = document.createTextNode(name);
//             td.appendChild(koderName);
//             tr.appendChild(td)

//         }

//         createNode2(score.score)
//     }
//     })
// })

const creartTable = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const trHead = document.createElement("tr");

  const thName = document.createElement("th");
  const thHTML = document.createElement("th");
  const thCSS = document.createElement("th");
  const thJS = document.createElement("th");
  const thReactJS = document.createElement("th");
  const thPromedio = document.createElement("th");

  const textName = document.createTextNode("Mentor Name");
  const textHTML = document.createTextNode("HTML");
  const textCSS = document.createTextNode("CSS");
  const textJS = document.createTextNode("JS");
  const textReactJs = document.createTextNode("ReactJs");
  const textPromedio = document.createTextNode("Promedio");

  table.appendChild(thead);
  table.appendChild(tbody);
  thead.appendChild(trHead);

  trHead.appendChild(thName);
  trHead.appendChild(thHTML);
  trHead.appendChild(thCSS);
  trHead.appendChild(thJS);
  trHead.appendChild(thReactJS);
  trHead.appendChild(thPromedio);

  thName.appendChild(textName);
  thHTML.appendChild(textHTML);
  thCSS.appendChild(textCSS);
  thJS.appendChild(textJS);
  thReactJS.appendChild(textReactJs);
  thPromedio.appendChild(textPromedio);

  document.body.appendChild(table);

  mentorsArray.forEach((item) => {
    //createNode(item.name)
    const tr = document.createElement("tr");
    const createNode = (name) => {
      const td = document.createElement("td");
      const koderName = document.createTextNode(name);
      td.appendChild(koderName);
      tr.appendChild(td);
      table.appendChild(tr);
      document.body.appendChild(table);
    };
    createNode(item.name);

    item.scores.forEach((score) => {
      {
        const createNode2 = (name) => {
          const tdSingleScore = document.createElement("td");
          const koderScore = document.createTextNode(name);
          tdSingleScore.appendChild(koderScore);
          tr.appendChild(tdSingleScore);
        };
        createNode2(score.score);
      }
    });
    const tdAvgScore = document.createElement("td");
    let totalMentor = 0;
    let numSignature = item.scores.length
    item.scores.forEach((score) => {
     totalMentor += score.score;     
    })
    let avgMentor = totalMentor/ numSignature;
    const koderAvgScore = document.createTextNode(avgMentor);
    tdAvgScore.appendChild(koderAvgScore);
    tr.appendChild(tdAvgScore);
    if(avgMentor >9){
        tdAvgScore.classList.add('green');
    }
    if(avgMentor <9 && avgMentor>6){
        tdAvgScore.classList.add('orange');
    } 
    if(avgMentor<6){
        tdAvgScore.classList.add('red');
    }

    const button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.textContent ='seleccionar';
    tr.appendChild(button);
    
    button.addEventListener('click', () => {
      console.log("Promedio")
      alert(`${item.name} tiene un promedio de  ${avgMentor}`)
    })
    
    
  });
};

creartTable();



// const cellAverage = document.querySelector(".orange")
// const eventAverageScore = () => {
//   return alert("Hey! no puedes cambiar esta celda")
// }
// cellAverage.addEventListener("click", eventAverageScore)





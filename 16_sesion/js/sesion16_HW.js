//-Con el array de mentores vamos a generar  una tabla con esta estrucutura

const mentorsArray = [
  {
      name:"Ivan Diaz Alarcon",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:8
          },
          {
              signature:"ReactJS",
              score:8
          }
      ]
  },
  {
      name:"Alejandra Saenz Gonzalez",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:7
          },
          {
              signature:"JS",
              score:10
          },
          {
              signature:"ReactJS",
              score:10
          }
      ]
  },
  {
      name:"Alan Hernandex Hernandex",
      scores:[
          {
              signature:"HTML",
              score:9
          },
          {
              signature:"CSS",
              score:9
          },
          {
              signature:"JS",
              score:10
          },
          {
              signature:"ReactJS",
              score:9
          }
      ]
  },
  {
      name:"Raul Aguirre Salazar",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:9
          },
          {
              signature:"ReactJS",
              score:10
          }
      ]
  },
  {
    name:"Pepito Potter Ron",
    scores:[
        {
            signature:"HTML",
            score:8
        },
        {
            signature:"CSS",
            score:10
        },
        {
            signature:"JS",
            score:9
        },
        {
            signature:"ReactJS",
            score:10
        }
    ]
}
]

// const tr  = document.createElement('tr');

// const createNode = (name) => {
      
//     const td = document.createElement('td');
//     const koderName = document.createTextNode(name);
//     td.appendChild(koderName);
//     tr.appendChild(td)    
//     document.body.appendChild(tr)
// }
const table = document.createElement('table');

mentorsArray.forEach((item) =>{
    //createNode(item.name)
    const tr  = document.createElement('tr');    
    const createNode = (name) => {
      
        const td = document.createElement('td');
        const koderName = document.createTextNode(name);
        td.appendChild(koderName);
        tr.appendChild(td)
        table.appendChild(tr)    
        document.body.appendChild(table)
    }
    createNode(item.name)
    
    item.scores.forEach((score) =>{
        if(item.name === item.name) {
        
        const createNode2 = (name) => {
      
            const td = document.createElement('td');
            const koderName = document.createTextNode(name);
            td.appendChild(koderName);
            tr.appendChild(td)    
            
        }
        
        createNode2(score.score)
    }         
    })  
})



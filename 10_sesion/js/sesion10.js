const mentorsArray = [
    {
        name:"Ivan",
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
        name:"Alejandra",
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
        name:"Alan",
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
        name:"Oscar",
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


  function getAllAvgMentors (mentors){
    let arrayMentors = [];
  mentors.forEach((mentor, index,) => {
    let totalMentor = 0
    let numSignature = mentor.scores.length
      mentor.scores.forEach((score) => {
          totalMentor += score.score;
      })
    let avgMentor = totalMentor/ numSignature;

    const newDataMentor = {
        name: mentor.name,
        average: avgMentor
    }
    arrayMentors.push(newDataMentor)
    

    })
return arrayMentors


}

console.log(getAllAvgMentors(mentorsArray) )
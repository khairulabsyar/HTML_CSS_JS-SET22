function Challenger(question){
    let inputs = challengeInput[`challenge${question}`]
    let outputs = challengeOutput[`challenge${question}`]

    console.log(" ");
    console.log(`Challenge ${question}`)
    console.log(" ");

    let result = inputs.every((input, index) => {
        let processed = this[`Challenge${question}`](input)
        console.log("Processed input", processed)
        console.log("Expected output", outputs[index])
        if(JSON.stringify(processed) == JSON.stringify(outputs[index])){
            return true 
        } else {
            document.querySelectorAll("button")[question].innerHTML = `Failed at test ${index + 1}`
            return false
        }
    })

    if(result){
        document.querySelectorAll("button")[question].innerHTML = "Success!"
    }

    let successCount = 0
    document.querySelectorAll('button').forEach((item) => {
      if(item.innerHTML === "Success!"){
        successCount += 1
      }
    })
    
    let bgimg = document.querySelector('body')
    let successPerc = successCount / document.querySelectorAll('button').length
    if(successPerc > 0.2 && successPerc < 0.4){
      bgimg.style.backgroundImage = "URL(https://pbs.twimg.com/media/EuJUu_dUYAE9kRY?format=jpg&name=large)"
    } else if (successPerc > 0.4 && successPerc < 0.6){
      bgimg.style.backgroundImage = "URL(https://pbs.twimg.com/media/EuJUu_fVIAcvvAw?format=jpg&name=large)"
    }  else if (successPerc > 0.6 && successPerc < 0.8){
      bgimg.style.backgroundImage = "URL(https://pbs.twimg.com/media/EuJUu_iVkAEQggm?format=jpg&name=large)"
    } else if (successPerc > 0.8) {
      bgimg.style.backgroundImage = "URL(https://pbs.twimg.com/media/EuJUO62UYAIynSz?format=jpg&name=large)"
    }
}

const renderChallenges = (limit) => {
  let challengeContainer = document.getElementById('challenge-container')
  Object.keys(challengeInput).forEach((item, index) => {
    let createH2 = (title) => {
      let h2 = document.createElement('h2')
      h2.innerHTML = title
      return h2
    }
  
    let createButton = () => {
      let button = document.createElement('button')
      button.innerHTML = "Let's goooo"
      button.setAttribute('onclick', `Challenger(${index})`)
      return button
    }
  
    let createChallenge = (title) => {
      let div = document.createElement('div')
      div.setAttribute("class", "challenge-entry")
      div.appendChild(createH2(title))
      div.appendChild(createButton())
      return div
    }
  
    if(index === 0){
      challengeContainer.appendChild(createChallenge("Challenge Test"))  
    } else if(index <= limit){
      challengeContainer.appendChild(createChallenge(`Challenge ${index}`))
    } else challengeContainer.appendChild(createChallenge(`Assignment ${index - limit}`))
  })
}

renderChallenges(8)

const conversionChart = [
    {
      roman: "M",
      arabic: 1000
    },
    {
      roman: "CM",
      arabic: 900
    },
    {
      roman: "D",
      arabic: 500
    },
    {
      roman: "CD",
      arabic: 400
    },
    {
      roman: "C",
      arabic: 100
    },
    {
      roman: "XC",
      arabic: 90
    },
    {
      roman: "L",
      arabic: 50
    },
    {
      roman: "XL",
      arabic: 40
    },
    {
      roman: "X",
      arabic: 10
    },
    {
      roman: "IX",
      arabic: 9
    },
    {
      roman: "V",
      arabic: 5
    },
    {
      roman: "IV",
      arabic: 4
    },
    {
      roman: "I",
      arabic: 1
    },
]
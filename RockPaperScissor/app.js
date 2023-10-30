const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.ceil(Math.random() * 3) // or you can use possibleChoices.length
    
    if(randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissor'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "it's a draw!"
    }
    else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "you win!"
    }
    else if (computerChoice === 'paper' && userChoice === 'scissor') {
        result = "you win!"
    }
    else if (computerChoice === 'scissor' && userChoice === 'rock') {
        result = "you win!"
    }
    else  {
        result = "you lose!"
    }
    resultDisplay.innerHTML = result
}

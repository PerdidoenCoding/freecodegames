const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const playerPoint = document.getElementById("playerpoints");
const computerPoint = document.getElementById("computerpoints");
let userChoice;
let computerChoice;
let result;
let pScore = 0;
let cScore = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
    getPoint();
}))

function generateComputerChoice() {
    const randomNumber = Math.ceil(Math.random() * 3) // or you can use possibleChoices.length

    if (randomNumber === 1) {
        computerChoice = ' rock';
    }
    if (randomNumber === 2) {
        computerChoice = ' scissor';
    }
    if (randomNumber === 3) {
        computerChoice = ' paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = " It's a draw!";
    }
    else if (computerChoice === ' rock' && userChoice === ' paper') {
        result = " You win!";
    }
    else if (computerChoice === ' paper' && userChoice === ' scissor') {
        result = " You win!";
    }
    else if (computerChoice === ' scissor' && userChoice === ' rock') {
        result = " You win!";
    }
    else {
        result = " You lose!";
    }
    resultDisplay.innerHTML = result;
}

function getPoint() {
    if (result == " You win!") {
        pScore++;
    } else if (result == " You lose!") {
        cScore++;
    }

    if(pScore == 5) {
        pScore = 0; cScore = 0; 
        alert('You are the final winner!')
    } else if(cScore == 5) {
        pScore = 0; cScore = 0;
        alert('Unfortunately the computer won...')
    }
    playerPoint.innerHTML = pScore;
    computerPoint.innerHTML = cScore;
}

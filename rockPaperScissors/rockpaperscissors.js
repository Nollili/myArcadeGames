let userChosen;
let computerChosen;
var result = Results();

const displayResult = document.getElementById('result');
const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const possibleChoices = document.querySelectorAll('.choice');

// Computer choice
function generatedComputerChoice() {

    const randomNumber = Math.round(Math.random() * (3)+1);

    if( randomNumber === 1) {
        return computerChosen = 'rock';
    } else if (randomNumber === 2) {
        return computerChosen = 'paper';
    } else if (randomNumber === 3) {
        return computerChosen = 'scissors';
    }    
}

// User choice
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChosen = e.target.id;
    console.log(e.target.id);
    generatedComputerChoice();
    Results();
    userChoice.innerHTML = userChosen;
    computerChoice.innerHTML = computerChosen;
    displayResult.innerHTML = result;


}));


//Results
function Results() {
    if (computerChosen === userChosen) {
        return result = 'There was a tie!';
    } else if (computerChosen === 'rock' && userChosen === 'paper') {
        return result = 'You win!';

    } else if (computerChosen === 'rock' && userChosen === 'scissors') {
        return result = 'You lost!';

    } else if (computerChosen === 'paper' && userChosen === 'rock') {
        return result = 'You lost!';

    } else if (computerChosen === 'paper' && userChosen === 'scissors') {
        return result = 'You win!';

    } else if (computerChosen === 'scissors' && userChosen === 'paper') {
        return result = 'You lost!';

    } else if (computerChosen === 'scissors' && userChosen === 'rock') {
        return result = 'You win!';

    } 
    
}
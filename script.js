
// Create function getComputerChoice to record the computers random choice of Rock, Paper or Scissors
const options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return options[Math.floor(Math.random()*options.length)];
}

// Create a function that takes two parameters: playerSelection and computerSelection,compares the two, and declares a winner
function playRound(playerSelection, computerSelection) {
    //Convert playerSelection to same format as options (lowercase except first letter)
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return ["You won this round! Rock beats Scissors", 1];
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return ["You won this round! Paper beats Rock", 1];
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return ["You won this round! Scissors beats Paper", 1];
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return ["You lost this round! Paper beats Rock", 0]
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return ["You lost this round! Scissors beats Paper", 0];
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return ["You lost this round! Rock beats Scissors", 0];
    }
    else {
        return ["It's a tie! No points given", null];
    }
}

// Function that plays 5 rounds of Rock Paper Scissors and keeps score (In the Console)

function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("Begining Game of Rock, Paper, Scissors (5 Rounds)");

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper, or Scissors? ");
        computerSelection = getComputerChoice();

        console.log("You chose " + playerSelection)
        console.log("The Computer chose " + computerSelection)

        let result = playRound(playerSelection, computerSelection);

        if (result == 1) {
            playerScore += 1;
        }
        else if (result == 0) {
            computerScore += 1;
        }
        else {
            playerScore = playerScore;
            computerScore = computerScore;
        }

        console.log("After round " + (i+1).toString() + " , Player is at " + playerScore.toString() + " and Computer is at " + computerScore.toString() + ".")
    }

    if (playerScore > computerScore) {
        console.log("You Win! Congratulations!")
    }
    else if (computerScore > playerScore) {
        console.log("You Lose! Better luck next time.")
    }
    else {
        console.log("It's a Tie! Better try again.")
    }
}

// game()


function updateScore(result) {
    if (result == 1) {
        playerScore += 1;
    }
    else if (result == 0) {
        computerScore += 1;
    }
    else {
        playerScore = playerScore;
        computerScore = computerScore;
    }

    return [playerScore, computerScore]
}

// Game UI
const body = document.querySelector('body');

const buttonContainer = document.createElement('div');
buttonContainer.className = 'buttonContainer';

const rockBtn = document.createElement('BUTTON');
rockBtn.innerHTML = 'Rock';
buttonContainer.appendChild(rockBtn);

const paperBtn = document.createElement('button');
paperBtn.innerHTML = 'Paper';
buttonContainer.appendChild(paperBtn);

const scissorsBtn = document.createElement('button');
scissorsBtn.innerHTML = 'Scissors';
buttonContainer.appendChild(scissorsBtn);

body.appendChild(buttonContainer);

const resultContainer = document.createElement('div');
resultContainer.className = 'resultContainer';

const resultPhrase = document.createElement('p');
const totalScore = document.createElement('p');
totalScore.innerHTML = 'Player: 0 Computer: 0';

const winningStatement = document.createElement('p');

let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', () => {

    if (playerScore == 5 || computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        winningStatement.innerHTML = '';
    }

    let playerSelection = 'Rock';
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    resultPhrase.innerHTML = result[0];
    resultContainer.appendChild(resultPhrase);
    
    let score = updateScore(result[1])
    totalScore.innerHTML = `Player: ${score[0]} Computer: ${score[1]}`
    resultContainer.appendChild(totalScore)

    if (score[0] == 5) {
        winningStatement.innerHTML = 'You won the game! Congratulation!';
        resultContainer.appendChild(winningStatement);
        body.appendChild(resultContainer);
    }
    else if (score[1] == 5) {
        winningStatement.innerHTML = 'The computer won the game! Better luck next time.';
        resultContainer.appendChild(winningStatement);
        body.appendChild(resultContainer);
    }
    else {
        body.appendChild(resultContainer);         
    }

})

paperBtn.addEventListener('click', () => {

    if (playerScore == 5 || computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        winningStatement.innerHTML = '';
    }

    let playerSelection = 'Paper';
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    resultPhrase.innerHTML = result[0];
    resultContainer.appendChild(resultPhrase);

    let score = updateScore(result[1])
    totalScore.innerHTML = `Player: ${score[0]} Computer: ${score[1]}`
    resultContainer.appendChild(totalScore)

    if (score[0] == 5) {
        winningStatement.innerHTML = 'You won the game! Congratulation!';
        resultContainer.appendChild(winningStatement);
        body.appendChild(resultContainer);
    }
    else if (score[1] == 5) {
        winningStatement.innerHTML = 'The computer won the game! Better luck next time.';
        resultContainer.appendChild(winningStatement);
        body.appendChild(resultContainer);
    }
    else {
        body.appendChild(resultContainer);         
    }
    
})

scissorsBtn.addEventListener('click', () => {

    if (playerScore == 5 || computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        winningStatement.innerHTML = '';
    }

    let playerSelection = 'Scissors';
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    resultPhrase.innerHTML = result[0];
    resultContainer.appendChild(resultPhrase);
    
    let score = updateScore(result[1])
    totalScore.innerHTML = `Player: ${score[0]} Computer: ${score[1]}`
    resultContainer.appendChild(totalScore)

    if (score[0] == 5) {
        winningStatement.innerHTML = 'You won the game! Congratulation!';
        resultContainer.appendChild(winningStatement);
        body.appendChild(resultContainer);
    }
    else if (score[1] == 5) {
        winningStatement.innerHTML = 'The computer won the game! Better luck next time.';
        resultContainer.appendChild(winningStatement);
        body.appendChild(resultContainer);
    }
    else {
        body.appendChild(resultContainer);         
    }
})


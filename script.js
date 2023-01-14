
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
        return ["You won! Rock beats Scissors", 1];
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return ["You won! Paper beats Rock", 1];
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return ["You won! Scissors beats Paper", 1];
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return ["You lose! Paper beats Rock", 0]
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return ["You lose! Scissors beats Paper", 0];
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return ["You lose! Rock beats Scissors", 0];
    }
    else {
        return ["It's a tie! No points given", null];
    }
}

// Function that plays 5 rounds of Rock Paper Scissors and keeps score

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

// Game UI
const rockBtn = document.createElement('button');
rockBtn.innerHTML = 'Rock';

const paperBtn = document.createElement('button');
paperBtn.innerHTML = 'Paper';

const scissorsBtn = document.createElement('button');
scissorsBtn.innerHTML = 'Scissors';

rockBtn.addEventListener('click', () => {
    let playerSelection = 'Rock';
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection)
})

paperBtn.addEventListener('click', () => {
    let playerSelection = 'Paper';
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection)
})

scissorsBtn.addEventListener('click', () => {
    let playerSelection = 'Scissors';
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection)
})


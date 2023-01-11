
// Create function getComputerChoice to record the computers random choice of Rock, Paper or Scissors
const options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return options[Math.floor(Math.random()*options.length)];
}

//console.log(getComputerChoice());

// Create a function that takes two parameters: playerSelection and computerSelection,compares the two, and declares a winner

function playRound(playerSelection, computerSelection) {
    //Convert playerSelection to same format as options (lowercase except first letter)
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection) {
        return 2;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return 1;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return 1;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return 1;
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return 0;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return 0;
    }
    else {
        return 0;
    }
}


let playerSelection = "rock";
let computerSelection = getComputerChoice();

//console.log(playRound(playerSelection, computerSelection));


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

game()
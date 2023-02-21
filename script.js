// Create function getComputerChoice to record the computers random choice of Rock, Paper or Scissors
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

// Create a function that takes two parameters: playerSelection and computerSelection,compares the two, and declares a winner
function playRound(playerSelection, computerSelection) {
    //Convert playerSelection to same format as options (lowercase except first letter)
    playerSelection =
        playerSelection.charAt(0).toUpperCase() +
        playerSelection.slice(1).toLowerCase();

    let result = {
        declaration: "",
        reason: "",
        winner: "",
    };

    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result.declaration = "You won this round!";
        result.reason = "Rock beats Scissors";
        result.winner = "player";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result.declaration = "You won this round!";
        result.reason = "Paper beats Rock";
        result.winner = "player";
    } else if (
        playerSelection === "Scissors" &&
        computerSelection === "Paper"
    ) {
        result.declaration = "You won this round!";
        result.reason = "Scissors beats Paper";
        result.winner = "player";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        result.declaration = "You lost this round!";
        result.reason = "Paper beats Rock";
        result.winner = "cpu";
    } else if (
        playerSelection === "Paper" &&
        computerSelection === "Scissors"
    ) {
        result.declaration = "You lost this round!";
        result.reason = "Scissors beats Paper";
        result.winner = "cpu";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result.declaration = "You lost this round!";
        result.reason = "Rock beats Scissors";
        result.winner = "cpu";
    } else {
        result.declaration = "It's a tie!";
        result.reason = "No points given";
        result.winner = null;
    }
    return result;
}

/* Function that plays 5 rounds of Rock Paper Scissors and keeps score (In the Console)

function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("Begining Game of Rock, Paper, Scissors (5 Rounds)");

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper, or Scissors? ");
        computerSelection = getComputerChoice();

        console.log("You chose " + playerSelection);
        console.log("The Computer chose " + computerSelection);

        let result = playRound(playerSelection, computerSelection);

        if (result == 1) {
            playerScore += 1;
        } else if (result == 0) {
            computerScore += 1;
        } else {
            playerScore = playerScore;
            computerScore = computerScore;
        }

        console.log(
            "After round " +
                (i + 1).toString() +
                " , Player is at " +
                playerScore.toString() +
                " and Computer is at " +
                computerScore.toString() +
                "."
        );
    }

    if (playerScore > computerScore) {
        console.log("You Win! Congratulations!");
    } else if (computerScore > playerScore) {
        console.log("You Lose! Better luck next time.");
    } else {
        console.log("It's a Tie! Better try again.");
    }
}
*/

function updateScore(result) {
    if (score.player === 5 || score.cpu === 5) {
        return;
    } else if (result === "player") {
        score.player += 1;
    } else if (result === "cpu") {
        score.cpu += 1;
    }
}

function checkWinner() {
    let winAll = "";
    if (score.player === 5) {
        winAll = "player";
    }
    if (score.cpu === 5) {
        winAll = "cpu";
    }
    return winAll;
}

function resetGame() {
    score.player = 0;
    score.cpu = 0;

    choice.player = "";
    choice.cpu = "";

    let winAll = "";

    let result = {
        declaration: "Choose your weapon",
        reason: "First to score 5 points wins the game",
        winner: "",
    };

    updateUI(choice, result, score, winAll);
}

function createResetBtn() {
    const statementContainer = document.querySelector(".statementContainer");
    const resetBtn = document.createElement("button");
    resetBtn.classList.add("resetBtn");
    resetBtn.innerHTML = "Try Again";

    resetBtn.addEventListener("click", () => {
        resetBtn.remove();
        resetGame();
    });

    statementContainer.appendChild(resetBtn);
}

function updateIcon(playerSelect, cpuSelect) {
    const playerChoice = document.querySelector(".playerChoice");
    const cpuChoice = document.querySelector(".cpuChoice");

    playerChoice.innerHTML = "";
    cpuChoice.innerHTML = "";

    if (playerSelect === "" && cpuSelect === "") {
        playerChoice.innerHTML =
            "<img src='assets/question.png' alt='Question Mark' />";
        cpuChoice.innerHTML =
            "<img src='assets/question.png' alt='Question Mark' />";
    } else {
        playerChoice.innerHTML = `<img src='assets/${playerSelect}.png' alt='Question Mark' />`;
        cpuChoice.innerHTML = `<img src='assets/${cpuSelect}.png' alt='Question Mark' />`;
    }
}

function updateUI(choice, result, score, winAll) {
    const mainStatement = document.querySelector(".mainStatement");
    const secondaryStatement = document.querySelector(".secondaryStatement");

    if (document.querySelector(".resetBtn")) {
        return;
    }

    if (winAll === "player") {
        mainStatement.innerHTML = "You won the game! Congratulations!";
        secondaryStatement.innerHTML = "";
        createResetBtn();
    } else if (winAll === "cpu") {
        mainStatement.innerHTML = "You lost the game. Better luck next time!";
        secondaryStatement.innerHTML = "";
        createResetBtn();
    } else {
        mainStatement.innerHTML = result.declaration;
        secondaryStatement.innerHTML = result.reason;
    }

    updateIcon(choice.player, choice.cpu);

    const playerScore = document.querySelector(".playerScore");
    const cpuScore = document.querySelector(".cpuScore");
    playerScore.innerHTML = `Player Score: ${score.player}`;
    cpuScore.innerHTML = `Computer Score: ${score.cpu}`;
}

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorBtn");

let score = {
    player: 0,
    cpu: 0,
};

let choice = {
    player: "",
    cpu: "",
};

rockBtn.addEventListener("click", () => {
    choice.player = "Rock";
    choice.cpu = getComputerChoice();

    let result = playRound(choice.player, choice.cpu);

    updateScore(result.winner);
    let winAll = checkWinner();

    updateUI(choice, result, score, winAll);
});

paperBtn.addEventListener("click", () => {
    choice.player = "Paper";
    choice.cpu = getComputerChoice();

    let result = playRound(choice.player, choice.cpu);

    updateScore(result.winner);
    let winAll = checkWinner();

    updateUI(choice, result, score, winAll);
});

scissorsBtn.addEventListener("click", () => {
    choice.player = "Scissors";
    choice.cpu = getComputerChoice();

    let result = playRound(choice.player, choice.cpu);

    updateScore(result.winner);
    let winAll = checkWinner();

    updateUI(choice, result, score, winAll);
});

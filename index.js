/** Counters for determining who has the higher score */
let playerCounter = 0;
let computerCounter = 0;

/** Function that randomly generates the computers choice */
function getComputerChoice() {
    let items = ["rock", "paper", "scissors"];

    return items[Math.floor(Math.random()*items.length)];
}

/** Function that uses if / else if statements to determine the winner of the match */
function playRound(playerSelection, computerSelection) {

    if (computerSelection === "rock" && playerSelection === "paper") {
        playerCounter += 1;
        return "You Win! Paper beats Rock";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerCounter += 1;
        return "You Lose! Paper beats Rock";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerCounter += 1;
        return "You Win! Scissors beats paper";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerCounter += 1;
        return "You Lose! Scissors beats Paper";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerCounter += 1;
        return "You win! Rock beats Scissors";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerCounter += 1;
        return "You Lose! Rock beats Scissors";
    } else {
        return "draw";
    }
}

/** Function that detects the winner based on who has the higher score at the end of the round */
function detectWinner(playerCounter, computerCounter) {

    if (playerCounter === computerCounter) {
        return `Draw! Player: ${playerCounter} - Computer: ${computerCounter}`
    } else if (playerCounter > computerCounter) {
        return `Congratulations! You Won! Player: ${playerCounter} - Computer: ${computerCounter}`
    } else if (computerCounter > playerCounter) {
        return `Sorry, You Lose! Computer: ${computerCounter} - Player: ${playerCounter}`
    }
}

/** Function that calls playRound 5 times and outputs the winner of the set */
function game() {

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors: ").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        if (playerCounter === 3 && computerCounter < 3) {
            console.log(detectWinner(playerCounter, computerCounter));
            break;
        } else if (computerCounter === 3 && playerCounter < 3) {
            console.log(detectWinner(playerCounter, computerCounter));
            break;
        }
    }

    if (playerCounter < 3 && computerCounter < 3) {
        console.log(detectWinner(playerCounter, computerCounter));
    }
}

game();
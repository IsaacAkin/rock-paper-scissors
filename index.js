function getComputerChoice() {
    let items = ["rock", "paper", "scissors"];

    return items[Math.floor(Math.random()*items.length)];
}

function playRound(playerSelection, computerSelection) {

    if (computerSelection === "rock" && playerSelection === "paper") {
        return "You Win! Paper beats Rock";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You Lose! Paper beats Rock";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You Win! Scissors beats paper";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You Lose! Scissors beats Paper";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You win! Rock beats Scissors";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You Lose! Rock beats Scissors";
    } else {
        return "draw";
    }
}

const playerSelection = "Rock".toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

/** Counters for determining who has the higher score */
let playerCounter = 0;
let computerCounter = 0;
let numberOfRounds = 5;

/** Randomly generates the computers choice */
function getComputerChoice() {
    let items = ["rock", "paper", "scissors"];

    return items[Math.floor(Math.random()*items.length)];
}

/** Plays one round and determines the winner of the match */
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
        return "You Win! Rock beats Scissors";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerCounter += 1;
        return "You Lose! Rock beats Scissors";
    } else {
        numberOfRounds += 1;
        return "draw";
    }
}

/** Detects the winner based on who has the higher score at the end of the round */
function detectWinner(playerCounter, computerCounter) {
 
    if (playerCounter > computerCounter) {
        return `Congratulations! You Won! Player: ${playerCounter} - Computer: ${computerCounter}`
    } else if (computerCounter > playerCounter) {
        return `Sorry, You Lose! Computer: ${computerCounter} - Player: ${playerCounter}`
    }
}

const results = document.querySelector('#results');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

function eventListeners() {
    rockBtn.addEventListener('click', () => {
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        // const result = playRound(playerSelection, computerSelection);
        // console.log(result);
    });

    paperBtn.addEventListener('click', () => {
        const playerSelection = "paper";
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        // const result = playRound(playerSelection, computerSelection);
        // console.log(result);
    });

    scissorsBtn.addEventListener('click', () => {
        const playerSelection = "scissors";
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        // const result = playRound(playerSelection, computerSelection);
        // console.log(result);
    });
}

eventListeners();

// /** Plays the game 5 times and outputs the winner of the set */
// function game() {

//     for (let round = 0; round < numberOfRounds; round++) {
//         const playerSelection = prompt("Rock, Paper or Scissors: ").toLowerCase();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));

//         if (playerCounter === 3 && computerCounter < 3) {
//             console.log(detectWinner(playerCounter, computerCounter));
//             break;
//         } else if (computerCounter === 3 && playerCounter < 3) {
//             console.log(detectWinner(playerCounter, computerCounter));
//             break;
//         }
//     }
// }

// game();
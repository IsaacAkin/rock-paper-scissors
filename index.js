"use strict"

/** Counters for determining who has the higher score */
let playerCounter = 0;
let computerCounter = 0;
let cpuIcon = ""

/** Randomly generates the computers choice */
function getComputerChoice() {
    let items = ["rock", "paper", "scissors"];

    return items[Math.floor(Math.random()*items.length)];
}

/** Plays one round and determines the winner of the match */
function playRound(playerSelection, computerSelection) {

    if (computerSelection === "rock" && playerSelection === "paper") {
        playerCounter += 1;
        cpuIcon = "🪨";
        return "You Win! Paper beats Rock";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerCounter += 1;
        cpuIcon = "📃";
        return "You Lose! Paper beats Rock";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerCounter += 1;
        cpuIcon = "📃";
        return "You Win! Scissors beats paper";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerCounter += 1;
        cpuIcon = "✂️";
        return "You Lose! Scissors beats Paper";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerCounter += 1;
        cpuIcon = "✂️";
        return "You Win! Rock beats Scissors";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerCounter += 1;
        cpuIcon = "🪨";
        return "You Lose! Rock beats Scissors";
    } else {
        cpuIcon = computerSelection === "rock" ? "🪨" : computerSelection === "paper" ? "📃" : "✂️";
        return "draw";
    }
}

/** Detects the winner based on who has the higher score at the end of the round */
function detectWinner(playerCounter, computerCounter) {

    if (playerCounter === 5 && computerCounter < 5) {
        resetGame();
        return "Congratulations! You Won!";
    } else if (computerCounter === 5 && playerCounter < 5) {
        resetGame();
        return "Sorry, you lose!";
    }
}

/** Resets the scores to 0 */
function resetGame() {
    playerCounter = 0;
    computerCounter = 0;
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const playerIcon = document.querySelector('#player-icon');
const computerIcon = document.querySelector('#computer-icon');

const displayPlayerScore = document.querySelector('#player-score');
const displayComputerScore = document.querySelector('#computer-score');
const displayRoundOutcome = document.querySelector('#round-outcome');

function eventListeners() {

    rockBtn.addEventListener('click', () => {
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        
        displayRoundOutcome.textContent = playRound(playerSelection, computerSelection);

        const winner = detectWinner(playerCounter, computerCounter);
        if (winner) {
            displayRoundOutcome.textContent = winner;
        }
        
        displayPlayerScore.textContent = playerCounter;
        playerIcon.textContent = rockBtn.textContent;

        displayComputerScore.textContent = computerCounter;
        computerIcon.textContent = cpuIcon;
    });

    paperBtn.addEventListener('click', () => {
        const playerSelection = "paper";
        const computerSelection = getComputerChoice();

        displayRoundOutcome.textContent = playRound(playerSelection, computerSelection);

        const winner = detectWinner(playerCounter, computerCounter);
        if (winner) {
            displayRoundOutcome.textContent = winner;
        }

        displayPlayerScore.textContent = playerCounter;
        playerIcon.textContent = paperBtn.textContent;

        displayComputerScore.textContent = computerCounter;
        computerIcon.textContent = cpuIcon;
    });

    scissorsBtn.addEventListener('click', () => {
        const playerSelection = "scissors";
        const computerSelection = getComputerChoice();

        displayRoundOutcome.textContent = playRound(playerSelection, computerSelection);

        const winner = detectWinner(playerCounter, computerCounter);
        if (winner) {
            displayRoundOutcome.textContent = winner;
        }
        
        displayPlayerScore.textContent = playerCounter;
        playerIcon.textContent = scissorsBtn.textContent;
        
        displayComputerScore.textContent = computerCounter;
        computerIcon.textContent = cpuIcon;
    });
}

eventListeners();
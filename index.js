function getComputerChoice() {
    let items = ["rock", "paper", "scissors"]

    return items[Math.floor(Math.random()*items.length)];
}

console.log(getComputerChoice());
let strings = ["rock", "paper", "scissor"];
let userCount = 0;
let computerCount = 0;

function getComputerChoice() {
    let computer_choice_index = Math.floor(Math.random() * strings.length);
    return strings[computer_choice_index];
}

function playRound(playerSelection, computerSelection) {
    let outputDiv = document.getElementById("output");
    
    if (playerSelection === computerSelection) {
        console.log("It's a tie");
        outputDiv.innerHTML = "It's a tie";
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
               (playerSelection === "paper" && computerSelection === "scissor") ||
               (playerSelection === "scissor" && computerSelection === "rock")) {
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        outputDiv.innerHTML = "You lose! " + computerSelection + " beats " + playerSelection;
        computerCount++;
    } else {
        console.log("You win!");
        outputDiv.innerHTML = "You win!";
        userCount++;
    }

    // Check win condition after each round
    if (userCount >= 5) {
        console.log("You won the game!");
        outputDiv.innerHTML += "<br>You won the game!";
        resetGame();
    } else if (computerCount >= 5) {
        console.log("Computer won the game!");
        outputDiv.innerHTML += "<br>Computer won the game!";
        resetGame();
    }
}

function resetGame() {
    userCount = 0;
    computerCount = 0;
}

function handleButtonClick(event) {
    let playerChoice = event.target.id;
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
}

document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.getElementById("rock");
    const button2 = document.getElementById("paper");
    const button3 = document.getElementById("scissor");

    button1.addEventListener("click", handleButtonClick);
    button2.addEventListener("click", handleButtonClick);
    button3.addEventListener("click", handleButtonClick);
});


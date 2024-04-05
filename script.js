let strings = ["rock", "paper", "scissor"];

function getComputerChoice() {
    let computer_choice_index = Math.floor(Math.random() * strings.length);
    return strings[computer_choice_index];
}

function playRound(playerSelection, computerSelection) {
    let tester = true;
    while(tester){

        tester = false;
    }
    if (playerSelection === computerSelection) {
        console.log("It's a tie");
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
               (playerSelection === "paper" && computerSelection === "scissor") ||
               (playerSelection === "scissor" && computerSelection === "rock")) {
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
    } else {
        console.log("You win!");
    }
}

function handleButtonClick(event) {
    let playerChoice = event.target.id;
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
}

document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here
    const button1 = document.getElementById("rock");
    const button2 = document.getElementById("paper");
    const button3 = document.getElementById("scissor");

    // Add event listeners to the buttons for the "click" event
    button1.addEventListener("click", handleButtonClick);
    button2.addEventListener("click", handleButtonClick);
    button3.addEventListener("click", handleButtonClick);
});

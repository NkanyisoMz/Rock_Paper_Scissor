let strings = ["rock", "paper", "scissor"];
let userCount = 0;
let computerCount = 0;
let draw = 0;

function getComputerChoice() {
    let computer_choice_index = Math.floor(Math.random() * strings.length);
    return strings[computer_choice_index];
}

function playRound(playerSelection, computerSelection) {
    let outputDiv = document.getElementById("output");
    let scoresDiv = document.getElementById("scores");
    let outcomeDiv = document.getElementById("outcome");

    if (playerSelection === computerSelection) {
        console.log("It's a tie");
        draw++;
        outputDiv.innerHTML = "It's a tie <br>" + computerSelection + " equals out with " + playerSelection +"<br>";
        scoresDiv.innerHTML =  "yourcount: " + userCount +
        "draw: " + draw + "computerCount: "+computerCount;
       
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
               (playerSelection === "paper" && computerSelection === "scissor") ||
               (playerSelection === "scissor" && computerSelection === "rock")) {
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        computerCount++;
        outputDiv.innerHTML = "You lose! <br> "+ computerSelection + " beats " + playerSelection +"<br>";
        scoresDiv.innerHTML =  "yourcount: " + userCount +
        "draw: " + draw + "computerCount: "+computerCount;
        
    } else {
        console.log("You win!");
        userCount++;
        outputDiv.innerHTML = "You win!<br>" + computerSelection + " beats " + playerSelection +"<br>"; 
        scoresDiv.innerHTML = "yourcount: " + userCount +
        "draw: " + draw + "computerCount: "+computerCount;
        
    }

    

    // Check win condition after each round
    if (userCount >= 5) {
        console.log("You won the game!");
        outcomeDiv.innerHTML += "<br>You won the game!";
        disableGameButtons(true);

    } else if (computerCount >= 5) {
        console.log("Computer won the game!");
        outcomeDiv.innerHTML += "<br>Computer won the game!";
        disableGameButtons(true);
    }
}

function resetGame() {
    userCount = 0;
    computerCount = 0;
    draw = 0; // Reset the draw count too

    // Clear the outcome message
    let outcomeDiv = document.getElementById("outcome");
    outcomeDiv.innerHTML = "";

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "You may start playing!<br>"

    // Reset the scores display
    let scoresDiv = document.getElementById("scores");
    scoresDiv.innerHTML = "yourcount: " + userCount +
        "draw: " + draw + "computerCount: "+computerCount;


    // Optionally, add any other UI resets here

    // Re-enable game buttons
    disableGameButtons(false);
}

function disableGameButtons(disable) {
    const buttons = document.querySelectorAll("#rock, #paper, #scissor");
    buttons.forEach(button => {
        button.disabled = disable;
    });
    // Toggle the visibility of the restart button based on the game's state
    document.getElementById("restartGame").style.display = disable ? "block" : "none";
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
    const restartButton = document.getElementById("restartGame"); // Get the restart button

    button1.addEventListener("click", handleButtonClick);
    button2.addEventListener("click", handleButtonClick);
    button3.addEventListener("click", handleButtonClick);
    restartButton.addEventListener("click", resetGame); // Add event listener for restarting the game
});



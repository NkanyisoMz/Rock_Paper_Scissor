let strings = ["rock", "paper", "scissor"];
let userCount = 0;
let computerCount = 0;
let draw = 0;

    // Update userCount, draw, and computerCount directly in the HTML
    document.querySelector(".user-count").textContent = userCount;
    document.querySelector(".draw-count").textContent = draw;
    document.querySelector(".computer-count").textContent = computerCount;

function getComputerChoice() {
    let computer_choice_index = Math.floor(Math.random() * strings.length);
    return strings[computer_choice_index];
}

function playRound(playerSelection, computerSelection) {
    let outputDiv = document.getElementById("output");
    let scoresDiv = document.getElementById("scores");
    let outcomeDiv = document.getElementById("outcome");

    if (playerSelection === computerSelection) {
        console.log("It's a tie!  ");
        draw++;
        outputDiv.innerHTML = "<div class='win-message'><br>It's a tie!  " + computerSelection + " cancel's out with " + playerSelection +"</div>";
        //scoresDiv.innerHTML = "<div class='scores'><p>You:   " + userCount +
        //"  Draw:  " + draw + "  Computer:  "+computerCount + "</p></div>";
        scoresDiv.innerHTML = "<div class='scores'><p><span class='you'>You: </span>" + "<span class='user-count'>"+userCount +"</span>"+
        "<span class='draw'>Draw: </span>" + "<span class='draw-count'>" + draw +  "</span> "+ "<span class='computer'>Computer: </span>" + "<span class='computer-count'>" + computerCount + "</span></p></div>";
       
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
               (playerSelection === "paper" && computerSelection === "scissor") ||
               (playerSelection === "scissor" && computerSelection === "rock")) {
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        computerCount++;
        outputDiv.innerHTML = "<div class='win-message'><br>You lose!  " + computerSelection + " beats " + playerSelection + "</div>";
        //scoresDiv.innerHTML = "<div class='scores'><p>You:   " + userCount +
        //"  Draw:  " + draw + "  Computer:  "+computerCount + "</p></div>";
        scoresDiv.innerHTML = "<div class='scores'><p><span class='you'>You: </span>" + "<span class='user-count'>"+userCount +"</span>"+
        "<span class='draw'>Draw: </span>" + "<span class='draw-count'>" + draw +  "</span> "+ "<span class='computer'>Computer: </span>" + "<span class='computer-count'>" + computerCount + "</span></p></div>";
        
    } else {
        console.log("You win!");
        userCount++;
        outputDiv.innerHTML = "<div class='win-message'><br>You win!  " + computerSelection + " beats " + playerSelection + "</div>"; 
        //scoresDiv.innerHTML = "<div class='scores'><p>You:   " + userCount +
        //"  Draw:  " + draw + "  Computer:  "+computerCount + "</p></div>";
        scoresDiv.innerHTML = "<div class='scores'><p><span class='you'>You: </span>" + "<span class='user-count'>"+userCount +"</span>"+
        "<span class='draw'>Draw: </span>" + "<span class='draw-count'>" + draw +  "</span> "+ "<span class='computer'>Computer: </span>" + "<span class='computer-count'>" + computerCount + "</span></p></div>";

        
    }

    

    // Check win condition after each round
    if (userCount >= 5) {
        console.log("You won the game!");
        outcomeDiv.innerHTML += "<div class='outcome'>You won the game!</div>";
        disableGameButtons(true);

    } else if (computerCount >= 5) {
        console.log("Computer won the game!");
        outcomeDiv.innerHTML += "<div class='outcome2'>Computer won the game!</div>";
        disableGameButtons(true);
    }
}

function resetGame() {
    userCount = 0;
    computerCount = 0;
    draw = 0; // Reset the draw count too

    // Clear the outcome message
    let outcomeDiv = document.getElementById("outcome");
    outcomeDiv.innerHTML = "<div class='outcome'>    </div>";

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<div class='win-message'><br>You may start playing!</div>"

    // Reset the scores display
    let scoresDiv = document.getElementById("scores");
    //scoresDiv.innerHTML = "<div class='scores'><p>You:   " + userCount +
    //    "  Draw:  " + draw + "  Computer:  "+computerCount + "</p></div>";
    scoresDiv.innerHTML = "<div class='scores'><p><span class='you'>You: </span>" + "<span class='user-count'>"+userCount +"</span>"+
        "<span class='draw'>Draw: </span>" + "<span class='draw-count'>" + draw +  "</span> "+ "<span class='computer'>Computer: </span>" + "<span class='computer-count'>" + computerCount + "</span></p></div>";



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



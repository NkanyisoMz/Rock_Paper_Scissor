let msg = "Hello World";
console.log(msg);

let strings = ["rock", "paper", "scissor"];

function getComputerChoice(){
    let computer_choice = Math.floor(Math.random() * strings.length);
    return computer_choice;

}

let computer_choice = " ";

let user_choice = " ";



function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        console.log("Its a tie");
    }
    else if (playerSelection === "rock" && computerSelection=== "paper") {
        console.log("you lose");
    } 
    
    else if(playerSelection === "paper" && computerSelection === "scissor"){
        console.log("you lose");
    }
    else {
        console.log("You win");
        
    }
    

}

function playGame(){
    let count = 0;
    while(count < 5){
        user_choice = prompt("Please enter  rock, paper or  scissor");
        user_choice.toLowerCase;
        computer_choice = strings[getComputerChoice()];
        playRound(user_choice, computer_choice);
        count++;
    }

}

playGame();



 




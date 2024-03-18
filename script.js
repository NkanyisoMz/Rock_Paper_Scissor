let msg = "Hello World";
console.log(msg);

let strings = ["rock", "paper", "scissor"];

function getComputerChoice(){
    let computer_choice = Math.floor(Math.random() * strings.length);
    return computer_choice;

}

const computer_choice = strings[getComputerChoice()];

const user_choice = prompt("Please enter  rock, paper or  scissor");

user_choice.toLowerCase;

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        console.log("Its a tie");
    }
    else if (playerSelection === strings[0] && computerSelection=== strings[1]) {
        console.log("you lose");
    } 
    
    else if(playerSelection === strings[1] && computerSelection === strings[2]){
        console.log("you lose");
    }
    else {
        console.log("You win");
        
    }
    

}

function playGame(){
    let count = 0;
    while(count < 5){
        playRound(user_choice, computer_choice);
        count++;
    }

}



 




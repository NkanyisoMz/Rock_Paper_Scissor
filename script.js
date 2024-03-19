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
        return "Its a tie";
    }
    else if (playerSelection === "rock" && computerSelection=== "paper") {
        return "you lose! paper beats rock";
    } 
    
    else if(playerSelection === "paper" && computerSelection === "scissor"){
        return "you lose! scissor beats paper";
    }
    else if(playerSelection === "scissor" && computerSelection === "rock"){
        return "you lose! rock beats scissor";
    }
    else {
        return "You win!";
        
    }
    

}

function playGame(){
    let count = 0;
    let userCount = 0;
    let computerCount = 0;
    while(count < 5){
        user_choice = prompt("Please enter  rock, paper or  scissor").toLowerCase();
        computer_choice = strings[getComputerChoice()];
        console.log(playRound(user_choice, computer_choice));
        let result = playRound(user_choice, computer_choice);
        if(result=== "You win!"){
            userCount++;
        }else if(result.startsWith("you lose")){
            computerCount++;
        }


        count++;
    }

    if(userCount> computerCount){
        console.log("You won the game");
    }
    else if(computerCount > userCount){
        console.log("The computer won the game");
    }else{
        console.log("its a tie");
    }

}

playGame();



 




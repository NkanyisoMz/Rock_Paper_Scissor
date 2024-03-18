let msg = "Hello World";
console.log(msg);

let strings = ["r", "p", "s"];

function getComputerChoice(){
    let computer_choice = Math.floor(Math.random() * strings.length);
    return computer_choice;

}

let computer_choice = strings[getComputerChoice()];

let user_choice = prompt("Please enter R for rock, P for papper or S for scissor");

if(user_choice=== computer_choice){
    console.log("Its a tie");
}
else if (user_choice === strings[0] && computer_choice=== strings[1]) {
    console.log("you lose");
} 

else if(user_choice === strings[1] && computer_choice === strings[2]){
    console.log("you lose");
}
else {
    console.log("You win");
    
}
 




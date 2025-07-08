document.addEventListener("DOMContentLoaded",()=>{
let humanScore=0;
let computerScore=0;   
    
    // function playGame()
function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 99);
    if (randomNumber <= 33) {
        return "rock";

    }
    else if (randomNumber > 66) {
        return "paper";
    }
    else {
        return "scissors";
    }

}
function getHumanChoice(choice) {
    document.getElementById("userChoice").innerHTML += "You chose: " + choice + "<br>";
    return choice;
}
function playRound(computerChoice, userChoice) {
    //computer chooses rock
    if (computerChoice == "rock" && userChoice == "rock") {
        console.log("It's a tie!");
        return;
    }
    else if (computerChoice == "rock" && userChoice == "paper") {
        humanScore++
        console.log("You win!,Paper beats Rock.");
        return;
    }
    else if (computerChoice == "rock" && userChoice == "scissors") {
        computerScore++
        console.log("You lose!,Rock beats Scissors.");
        return;
    }
    //computer chooses paper
    if (computerChoice == "paper" && userChoice == "rock") {
        computerScore++
        console.log("You lose!, Paper beats Rock.");
        return;
    }
    else if (computerChoice == "paper" && userChoice == "paper") {
        console.log("It's a tie!");
        return;
    }
    else if (computerChoice == "paper" && userChoice == "scissors") {
        humanScore++
        console.log("You win!,Scissors beats Paper.");
        return;
    }
    //computer chooses scissors
    if (computerChoice == "scissors" && userChoice == "rock") {
        humanScore++
        console.log("You win!,Rock beats Scissors.");
        return;
    }
    else if (computerChoice == "scissors" && userChoice == "paper") {
        computerScore++
        console.log("You lose!,Scissor beats Paper.");
        return;
    }
    else if (computerChoice == "scissors" && userChoice == "scissors") {
        console.log("It's a tie!");
        return;
    }
    // else {
    //     games--
    //     return console.log("Input a valid Choice!")

    // }
}
// Attach handlers
document.getElementById("rockBtn").addEventListener("click", () => {
    const humanSelection=getHumanChoice('rock');
    const computerSelection=getComputerChoice();
    playRound(computerSelection,humanSelection);
});
document.getElementById("paperBtn").addEventListener("click", () => getHumanChoice('paper'));
document.getElementById("scissorsBtn").addEventListener("click", () => getHumanChoice('scissors'));

// function players(){
// const computerSelection = getComputerChoice();
// const humanSelection = getHumanChoice();
// playRound(computerSelection,humanSelection);
// }



})

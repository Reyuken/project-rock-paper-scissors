document.addEventListener("DOMContentLoaded", () => {
    let humanScore = 0;
    let computerScore = 0;
    let game = 0;

    // function playGame(){
    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 99);
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
        document.getElementById("userChoice").innerText = "You chose: " + choice;
        return choice;
    }
    function playRound(computerChoice, userChoice) {
        game++;
        //computer chooses rock
        if (computerChoice == "rock" && userChoice == "rock") {
            document.getElementById("result").innerText = "It's a tie!";
            return;
        }
        else if (computerChoice == "rock" && userChoice == "paper") {
            humanScore++
            document.getElementById("result").innerText = "You win!,Paper beats Rock.";
            return;
        }
        else if (computerChoice == "rock" && userChoice == "scissors") {
            computerScore++
            document.getElementById("result").innerText = "You lose!,Rock beats Scissors.";
            return;
        }
        //computer chooses paper
        if (computerChoice == "paper" && userChoice == "rock") {
            computerScore++
            document.getElementById("result").innerText = "You lose!, Paper beats Rock.";
            return;
        }
        else if (computerChoice == "paper" && userChoice == "paper") {
            document.getElementById("result").innerText = "It's a tie!";
            return;
        }
        else if (computerChoice == "paper" && userChoice == "scissors") {
            humanScore++
            document.getElementById("result").innerText = "You win!,Scissors beats Paper.";
            return;
        }
        //computer chooses scissors
        if (computerChoice == "scissors" && userChoice == "rock") {
            humanScore++
            document.getElementById("result").innerText = "You win!,Rock beats Scissors.";
            return;
        }
        else if (computerChoice == "scissors" && userChoice == "paper") {
            computerScore++
            document.getElementById("result").innerText = "You lose!,Scissor beats Paper.";
            return;
        }
        else if (computerChoice == "scissors" && userChoice == "scissors") {
            document.getElementById("result").innerText = "It's a tie!";
            return;
        }
        // else {
        //     games--
        //     return console.log("Input a valid Choice!")

        // }
        
        
    }
    function scoring() {
        document.getElementById("showHumanScore").innerText = "Human:" + humanScore;
        document.getElementById("showComputerScore").innerText = "Computer:" + computerScore;
        return
    }
    // RPS Buttons
    document.getElementById("rockBtn").addEventListener("click", () => {
        const humanSelection = getHumanChoice('rock');
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
        scoring();
        document.getElementById("game").innerText = "Round" + " " + game;
        
        // scoring();
    });
    document.getElementById("paperBtn").addEventListener("click", () => {
        const humanSelection = getHumanChoice('paper');
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
        // scoring();
    });
    document.getElementById("scissorsBtn").addEventListener("click", () => {
        const humanSelection = getHumanChoice('scissors');
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
        // scoring();
    });

    // }
    // for (games=0;games<5;games++){
    // playGame()
    // if (humanScore>computerScore){
    // console.log("YOU WIN!!")
    // }
    // else{
    // console.log("YOU LOSE!DUMBASS HAHAHAHAH")
    // }
    // }



})

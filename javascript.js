let humanScore=0;
let computerScore=0;
function playGame(){
    function scoring(){
        console.log("Human:"+humanScore);
        console.log("Computer:"+computerScore);

        return 
    }
        //computer chooses a random number
    function getComputerChoice(){
        randomNumber = Math.floor(Math.random()*99);
        if (randomNumber<=33){
            return "rock";

            }
        else if(randomNumber>66){
            return "paper";
        }
        else{
            return "scissors";
        }
        
        }
        //prompts user to input choice
    function getHumanChoice(userChoice){
        userChoice=prompt("Rock,Paper or Scissors?").toLowerCase();
        return userChoice;
        }   



        function playRound(computerChoice,userChoice){
            //computer chooses rock
            if (computerChoice=="rock" && userChoice=="rock"){
                console.log("It's a tie!");
                return ;
            }
            else if (computerChoice=="rock" && userChoice=="paper"){
                humanScore++
                console.log("You win!,Paper beats Rock.");
                return ;
            }
            else if (computerChoice=="rock" && userChoice=="scissors"){
                computerScore++
                console.log("You lose!,Rock beats Scissors.");
                return ;
            }
            //computer chooses paper
                if (computerChoice=="paper" && userChoice=="rock"){
                computerScore++    
                console.log("You lose!, Paper beats Rock.");
                return ;
            }
            else if (computerChoice=="paper" && userChoice=="paper"){
                console.log("It's a tie!");
                return ;
            }
            else if (computerChoice=="paper" && userChoice=="scissors"){
                humanScore++
                console.log("You win!,Scissors beats Paper.");
                return ;
            }
            //computer chooses scissors
                if (computerChoice=="scissors" && userChoice=="rock"){
                humanScore++
                console.log("You win!,Rock beats Scissors.");
                return ;
            }
            else if (computerChoice=="scissors" && userChoice=="paper"){
                computerScore++
                console.log("You lose!,Scissor beats Paper.");
                return ;
            }
            else if (computerChoice=="scissors" && userChoice=="scissors"){      
                console.log("It's a tie!");
                return ;
            }
            else {
                games--
                return console.log("Input a valid Choice!")

            }
            }
            
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(computerSelection,humanSelection);
scoring()
}
    

for (games=0;games<5;games++){
    playGame()
}

if (humanScore>computerScore){
    console.log("YOU WIN!!")
}
else{
    console.log("YOU LOSE!DUMBASS HAHAHAHAH")
}

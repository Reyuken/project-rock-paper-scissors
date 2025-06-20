let humanScore=0;
let computeScore=0;

function getComputerChoice(){
    randomNumber = Math.floor(Math.random()*99);
      if (randomNumber<=33){
        return "Rock";

        }
    else if(randomNumber>66){
        return "Paper";
    }
    else{
        return "Scissors";
    }
    
    }
   
function getHumanChoice(user_choice){
    user_choice=prompt("Rock,Paper or Scissors?");
    return ;
    }   
function playRound(getComputerChoice,getHumanChoice){

    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);

console.log(getComputerChoice());


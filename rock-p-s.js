function getComputerChoice() {
  let choices = ['rock','paper','scissors']
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){
  if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')){
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`
  }
  else if(playerSelection === computerSelection){
    return 'It\'s a tie!'
  }
  else {
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1);
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`
  }
}

let playerScore = 0;
let computerScore = 0;


/////////////////////////

// Add click event listener to buttons
const gameButtons = document.querySelectorAll('.gameButtons');
gameButtons.forEach(function(btn){
  btn.addEventListener('click', clickedButton);
})
// Log value of button
function clickedButton(btn) {
  console.log(btn.target.id);
}

////////////////////////


function game(){
  //for (let i = 0; i < 5; i++){
    //let playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase(); 
    const computerSelection = getComputerChoice();
    console.log(computerSelection);

    console.log(playRound(playerSelection, computerSelection));
    console.log('Your score: ' + playerScore) 
    console.log('Computer score: ' + computerScore)
  //}
  
  if (playerScore > computerScore){
    console.log("You win best of 5!");
    } else if (computerScore > playerScore){
      console.log("Computer wins best of 5 :\(")
    } else {console.log("It\'s a tie!")}
  
}

// console.log(game())
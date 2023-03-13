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


// game keeps score and reports a winner or loser at the end
// Use console.log to display results of each round and winner at the end
// Use prompt() to get input from the user
// Re-work previous functions if needed
// Can change return value to something more useful
// Can create more 'helper' functions if needed

let playerScore = 0;
let computerScore = 0;

function game(){
  for (let i = 0; i < 5; i++){
    let playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(computerSelection)
    console.log(playRound(playerSelection, computerSelection));
    console.log('Your score: ' + playerScore) 
    console.log('Computer score: ' + computerScore)
  }
  
  if (playerScore > computerScore){
    console.log("You win best of 5!");
    } else if (computerScore > playerScore){
      console.log("Computer wins best of 5 :\(")
    } else {console.log("It\'s a tie!")}
  
}

console.log(game())
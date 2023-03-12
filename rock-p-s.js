function getComputerChoice() {
  let choices = ['rock','paper','scissors']
  return choices[Math.floor(Math.random() * choices.length)];
}


const computerSelection = getComputerChoice()
console.log(computerSelection)
let getPlayerChoice = prompt("Enter rock, paper, or scissors")
const playerSelection = getPlayerChoice.toLowerCase();


function playRound(playerSelection, computerSelection){
  if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')){
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    return `You win! ${playerSelection} beats ${computerSelection}.`
  }
  else if(playerSelection === computerSelection){
    return 'It\'s a tie!'
  }
  else {
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1);
    return `You lose! ${computerSelection} beats ${playerSelection}.`
  }
}
console.log(playRound(playerSelection, computerSelection))


// Create new function called game
// Call playRound inside of game to play a 5 round game using a loop
// game keeps score and reports a winner or loser at the end
// Use console.log to display results of each round and winner at the end
// Use prompt() to get input from the user
// Re-work previous functions if needed
// Can change return value to something more useful
// Can create more 'helper' functions if needed

function game(){
  for (let i = 0; i < 5; i++){
    playRound();
  }
}
let results = document.querySelector("#results");


function getComputerChoice() {
  let choices = ['rock','paper','scissors']
  let computerChoice = choices[Math.floor(Math.random() * choices.length)]
  console.log(computerChoice);
  return computerChoice;
}


/////////////////////////

const gameBtns = document.querySelectorAll('.gameBtns');

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

// Play round with correct button id
gameBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(btn.id);
    console.log(playRound(btn.id, getComputerChoice()));
  })
})

////////////////////////

// Play one round of rock, paper, scissors and show result
function playRound(playerSelection, computerSelection){
  let computerChoiceText = document.querySelector('#computer-choice-text');
  let playerChoiceText = document.querySelector('#player-choice-text');
  let roundResultText = document.querySelector('#round-result-text');

  computerChoiceText.innerText = `Computer chose ${computerSelection}`;
  playerChoiceText.innerText = `You chose ${playerSelection}`;

  if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')){
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    playerScore++;
    updateScoresText();
    roundResultText.innerText = `Point for you! ${playerSelection} beats ${computerSelection}.`
  }
  else if(playerSelection === computerSelection){
    roundResultText.innerText = 'It\'s a tie!'
    updateScoresText();
  }
  else {
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1);
    computerScore++;
    roundResultText.innerText = `Point for computer. ${computerSelection} beats ${playerSelection}.`
    updateScoresText();
  }
}

let playerScore = 0;
let computerScore = 0;


function updateScoresText(){
  let playerScoreText = document.querySelector('#player-score-text');
  let computerScoreText = document.querySelector('#computer-score-text');
  playerScoreText.innerText = `Your score: ${playerScore}`;
  computerScoreText.innerText = `Computer score: ${computerScore}`;
}



//function game(){
  //for (let i = 0; i < 5; i++){
    //let playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase(); 
    //const computerSelection = getComputerChoice();
    //console.log(computerSelection);

    //console.log(playRound(playerSelection, computerSelection));
    //console.log('Your score: ' + playerScore) 
    //console.log('Computer score: ' + computerScore)
  //}
  
  // Play until either player or computer reaches 5 points
  if (playerScore === 5){
    console.log("You win the game!");
    } else if (computerScore === 5){
      console.log("Computer wins the game :\(")
    }
  
//}

//console.log(game())

// Make smaller functions and call them inside playRound
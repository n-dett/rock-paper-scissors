// Random computer selection
function getComputerChoice() {
  let choices = ['rock','paper','scissors']
  let computerChoice = choices[Math.floor(Math.random() * choices.length)]
  console.log(computerChoice);
  return computerChoice;
}

const gameBtns = document.querySelectorAll('.gameBtns');

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

let playerScore = 0;
let computerScore = 0;

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

  choicesText(playerSelection, computerSelection);

  if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')){
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    playerScore++;
    playerWinsText(playerSelection, computerSelection);
  }
  else if(playerSelection === computerSelection){
    tieGameText();
  }
  else {
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1);
    computerScore++;
    computerWinsText(playerSelection, computerSelection);
  }

  updateScoresText();
  gameResult();
  gameIsOver();
}

function gameIsOver(){
  gameBtns.forEach(btn => {
  if(playerScore === 5 || computerScore === 5){
    btn.disabled = true;
  } 
  })
}



function choicesText(playerSelection, computerSelection){
  let computerChoiceText = document.querySelector('#computer-choice-text');
  let playerChoiceText = document.querySelector('#player-choice-text');
  computerChoiceText.innerText = `Computer chose ${computerSelection}`;
  playerChoiceText.innerText = `You chose ${playerSelection}`;
}

function updateScoresText(){
  let playerScoreText = document.querySelector('#player-score-text');
  let computerScoreText = document.querySelector('#computer-score-text');
  playerScoreText.innerText = `Your score: ${playerScore}`;
  computerScoreText.innerText = `Computer score: ${computerScore}`;
}

function playerWinsText(playerSelection, computerSelection){
  let roundResultText = document.querySelector('#round-result-text');
    roundResultText.innerText = `Point for you! ${playerSelection} beats ${computerSelection}.`;
} 
  
function tieGameText(){
  let roundResultText = document.querySelector('#round-result-text');
  roundResultText.innerText = 'It\'s a tie!';
} 

function computerWinsText(playerSelection, computerSelection) {
  let roundResultText = document.querySelector('#round-result-text');
  roundResultText.innerText = `Point for computer. ${computerSelection} beats ${playerSelection}.`;
}
  
  // Declare a winner once player or computer reaches 5 points
  function gameResult(){
    let gameResultText = document.querySelector('#game-result-text');
    if (playerScore === 5){
      gameResultText.innerText = "You win the game!";
      } else if (computerScore === 5){
        gameResultText.innerText = "Computer wins the game."
      }
  }

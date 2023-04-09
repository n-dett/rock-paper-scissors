const gameBtns = document.querySelectorAll('.gameBtns');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ['rock','paper','scissors']
  let computerChoice = choices[Math.floor(Math.random() * choices.length)]
  console.log(computerChoice);
  return computerChoice;
}

// Blue circle outline for computer
function computerCircleOutline(computerSelection) {
  if(computerSelection === 'rock'){
    rockBtn.classList.toggle('current-computer-choice');
  }
  if(computerSelection === 'paper'){
    paperBtn.classList.toggle('current-computer-choice');
  }
  if(computerSelection === 'scissors'){
    scissorsBtn.classList.toggle('current-computer-choice');
  }
}

// Outline for when player and computer make the same selection
function tieCircleOutline(playerSelection, computerSelection) {
  if(playerSelection === 'rock' && computerSelection === 'rock') {
    rockBtn.classList.toggle('same-choice-outline');
  } else if(playerSelection === 'paper' && computerSelection === 'paper'){
    paperBtn.classList.toggle('same-choice-outline');
  } else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
    scissorsBtn.classList.toggle('same-choice-outline');
  }
}

// Play round on click
gameBtns.forEach(btn => {
  btn.addEventListener('click', playRoundEvent);
})


function removeOutlines() {
  removeEachOutline('current-player-choice');
  removeEachOutline('current-computer-choice');
  removeEachOutline('same-choice-outline');
}

// Remove outlines for previous selections
function removeEachOutline(currentChoiceOutline) {
  if(rockBtn.classList.contains(currentChoiceOutline)) {
     rockBtn.classList.toggle(currentChoiceOutline);
  } 
  if(paperBtn.classList.contains(currentChoiceOutline)) {
    paperBtn.classList.toggle(currentChoiceOutline);
  } 
  if(scissorsBtn.classList.contains(currentChoiceOutline)) {
    scissorsBtn.classList.toggle(currentChoiceOutline);
  } 
}

// Add player current player selection outline
gameBtns.forEach(btn => {
  btn.addEventListener('click', currentPlayerOutline);
})

function currentPlayerOutline() {
  this.classList.toggle('current-player-choice');
}


// Scale image when clicked
gameBtns.forEach(btn => {
  btn.addEventListener('mousedown', () => {
    btn.classList.add('transform');
  });
  btn.addEventListener('mouseup', () => {
    btn.classList.remove('transform');
  });
})


// Play round
function playRoundEvent() {
    console.log(this.id);
    console.log(playRound(this.id, getComputerChoice()));
  }


// Play one round of rock, paper, scissors and show results
function playRound(playerSelection, computerSelection){
  
  removeOutlines(playerSelection, computerSelection);
  tieCircleOutline(playerSelection, computerSelection);
  computerCircleOutline(computerSelection);
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

 // Declare a winner of the game
function gameResult(){
 let gameResultText = document.querySelector('#game-result-text');
  if (playerScore === 5){
    gameResultText.innerText = "You win the game!";
    } else if (computerScore === 5){
      gameResultText.innerText = "Computer wins the game."
    }
}

// Disable game buttons when someone wins
function gameIsOver(){
  gameBtns.forEach(btn => {
    if(playerScore === 5 || computerScore === 5){
      btn.removeEventListener('click', playRoundEvent);
      btn.classList.add('original-size');
      btn.removeEventListener('click', removeOutlines);
      btn.removeEventListener('click', currentPlayerOutline);
    }
  })
}

// Updated results for each round
function choicesText(playerSelection, computerSelection){
  let computerChoiceText = document.querySelector('#computer-choice-text');
  let playerChoiceText = document.querySelector('#player-choice-text');
  computerChoiceText.innerText = `Computer chose ${computerSelection}.`;
  playerChoiceText.innerText = `You chose ${playerSelection}.`;
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
  
 

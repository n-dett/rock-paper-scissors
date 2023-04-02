let results = document.querySelector("#results");
let computerChoiceText = document.querySelector('#computer-choice-text');
let playerChoiceText = document.querySelector('#player-choice-text');

function getComputerChoice() {
  let choices = ['rock','paper','scissors']
  let computerChoice = choices[Math.floor(Math.random() * choices.length)]
  console.log(computerChoice);
  return computerChoice;
}


/////////////////////////

// Add event listener to player choice buttons
const gameBtns = document.querySelectorAll('.gameBtns');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

let buttonClicked = false;

function playerChoice(btn) {
  rockBtn.addEventListener('click', () => {
    buttonClicked = true;
  })
  paperBtn.addEventListener('click', () => {
    buttonClicked = true;
  })
  scissorsBtn.addEventListener('click', () => {
    buttonClicked = true;
  })
  if(buttonClicked == true){
    return btn.id;
  }
}

gameBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(playRound(playerChoice(), getComputerChoice()));
  })
})

////////////////////////


function playRound(playerSelection, computerSelection){
  computerChoiceText.innerText = `Computer chose ${computerSelection}`;
  playerChoiceText.innerText = `You chose ${playerSelection}`;

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





//function game(){
  //for (let i = 0; i < 5; i++){
    //let playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase(); 
    //const computerSelection = getComputerChoice();
    //console.log(computerSelection);

    //console.log(playRound(playerSelection, computerSelection));
    //console.log('Your score: ' + playerScore) 
    //console.log('Computer score: ' + computerScore)
  //}
  
  //if (playerScore > computerScore){
    //console.log("You win best of 5!");
    //} else if (computerScore > playerScore){
      //console.log("Computer wins best of 5 :\(")
    //} else {console.log("It\'s a tie!")}
  
//}

//console.log(game())
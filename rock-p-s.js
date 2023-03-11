function getComputerChoice() {
    let choices = ['Rock','Paper','Scissors']
    return choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerChoice())
let computerSelection = getComputerChoice()

// Create function playRound to play single round of Rock Paper Scissors
// playRound should have parameters (playerSelection, computerSelection)
// Return a string that declares the winner of the round
// Make playerSelection case-insensitive
// Test with console.log

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Paper"){
    return "You lose! Paper beats rock."
  }
  else if (playerSelection === "Paper" && computerSelection === "Rock"){
    return "You win! Paper beats rock."
  }
  else if (playerSelection === "Scissors" && computerSelection === "Paper"){
    return "You win! Scissors beats paper."
  }
  else if (playerSelection === "Paper" && computerSelection === "Scissors"){
    return "You lose! Scissors beats paper."
  }
  else if (playerSelection === "Rock" && computerSelection === "Scissors"){
    return "You win! Rock beats scissors."
  }
  else if (playerSelection === "Scissors" && computerSelection === "Rock"){
    return "You lose! Rock beats scissors."
  }
  else {
    return "Tie game!"
  }
}

// Create new function called game
// Call playRound inside of game to play a 5 round game using a loop
// game keeps score and reports a winner or loser at the end
// Use console.log to display results of each round and winner at the end
// Use prompt() to get input from the user
// Re-work previous functions if needed
// Can change return value to something more useful
// Can create more 'helper' functions if needed
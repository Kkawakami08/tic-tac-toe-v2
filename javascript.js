let computerSelection;

function computerPlay() {
  const computerArray = ["rock", "paper", "scissors"];
  computerSelection =
    computerArray[Math.floor(Math.random() * computerArray.length)];
  return computerSelection;
}

console.log(computerPlay());

let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
  let result;
  if (computerSelection == "rock") {
    if (playerSelection == "rock") {
      return (result = "It's a tie!");
    } else if (playerSelection == "paper") {
      return (result = "You win!");
    } else if (playerSelection == "scissors") {
      return (result = "You lose!");
    } else {
      result = "Enter a valid choice";
    }
  } else if (computerSelection == "paper") {
    if (playerSelection == "rock") {
      return (result = "You lose!");
    } else if (playerSelection == "paper") {
      return (result = "It's a tie!");
    } else if (playerSelection == "scissors") {
      return (result = "You win!");
    } else {
      result = "Enter a valid choice";
    }
  } else if (computerSelection == "scissors") {
    if (playerSelection == "rock") {
      return (result = "You win!");
    } else if (playerSelection == "paper") {
      return (result = "You lose!");
    } else if (playerSelection == "scissors") {
      return (result = "It's a tie!");
    } else {
      result = "Enter a valid choice";
    }
  }
  return result;
}

console.log(playRound(playerSelection, computerSelection));

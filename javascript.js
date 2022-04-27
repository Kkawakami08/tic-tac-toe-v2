let computerSelection;

function computerPlay() {
  const computerArray = ["rock", "paper", "scissors"];
  computerSelection =
    computerArray[Math.floor(Math.random() * computerArray.length)];
  return computerSelection;
}

let playerSelection;

function playerPlay() {
  playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
  return playerSelection;
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  let result;
  if (computerSelection == "rock") {
    if (playerSelection == "rock") {
      result = "It's a tie!";
    } else if (playerSelection == "paper") {
      playerScore++;
      result = "You win!";
    } else if (playerSelection == "scissors") {
      computerScore++;
      result = "You lose!";
    } else {
      result = "Enter a valid choice";
    }
  } else if (computerSelection == "paper") {
    if (playerSelection == "rock") {
      computerScore++;
      result = "You lose!";
    } else if (playerSelection == "paper") {
      result = "It's a tie!";
    } else if (playerSelection == "scissors") {
      playerScore++;
      result = "You win!";
    } else {
      result = "Enter a valid choice";
    }
  } else if (computerSelection == "scissors") {
    if (playerSelection == "rock") {
      playerScore++;
      result = "You win!";
    } else if (playerSelection == "paper") {
      computerScore++;
      result = "You lose!";
    } else if (playerSelection == "scissors") {
      result = "It's a tie!";
    } else {
      result = "Enter a valid choice";
    }
  }
  console.log(result);
  return result;
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerPlay();
    computerPlay();
    console.log(`Computer selection: ${computerSelection}`);
    console.log(`Player selection: ${playerSelection}`);
    playRound(playerSelection, computerSelection);
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
  }
  console.log(
    `Final scores: computer: ${computerScore} player: ${playerScore}`
  );
  console.log(``);
}

console.log(game());

function computerPlay() {
  const computerArray = ["rock", "paper", "scissors"];
  let computerSelection =
    computerArray[Math.floor(Math.random() * computerArray.length)];
  return computerSelection;
}

console.log(computerPlay());

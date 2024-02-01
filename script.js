/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

/* Keeping track of the scores
Example: Line 44
*/

/* getComputerChoice() randomly selects between `rock` `paper` `scissors` and returns that string 
Example: Line 46-50
*/

/*  getResult() compares playerChoice & computerChoice and returns the score accordingly
 human wins - getResult('Rock', 'Scissors') 👉 1
 human loses - getResult('Scissors', 'Rock') 👉 -1
 human draws - getResult('Rock', 'Rock') 👉 0
Example: Line 52-69
*/

/* showResult() updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice
Example: Line 71
*/

/* ** Calculating who won and showing it on the screen
Example: Line 72-87
*/

/* Making the RPS buttons actively listen for a click and do something once a click is detected
Example: Line 88-95
*/

/* endGame function clears all the text on the DOM
Example: Line 110-121
*/

const totalScore = { computerScore: 0, playerScore: 0 };

function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * 3) // generates a random number 0-2
  return rpsChoice[randomNumber];
}

function getResult(playerChoice, computerChoice) {
  // returning the result of score based on if you won, drew, or lost
  let score;

  if (playerChoice == computerChoice) {
    score = 0; // Draw
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1;
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1;
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1; // Playe wins
  } else {
    score = -1; // Computer wins
  }
  
  return score; // returning score
}

function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById('result');
  const handsDiv = document.getElementById('hands');
  const playerScoreDiv = document.getElementById('player-score');
  if (score == 0) {
    resultDiv.innerText = "It's a draw!";
  } else if (score == 1) {
    resultDiv.innerText = 'You have won!';
  } else {
    resultDiv.innerText = 'Dev has won!';
  }

  handsDiv.innerText = `🧑${playerChoice} vs 👨🏽‍💻${computerChoice}`;
  playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`;
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  totalScore['playerScore'] += score;

  totalScore['computerScore'] -= score;
  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  // using querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton');

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  })

  const endGameBtn = document.getElementById('endGameButton');
  endGameBtn.onclick = () => endGame(totalScore);
}


function endGame(totalScore) {
  totalScore['playerScore'] = 0;
  totalScore['computerScore'] = 0;

  const resultDiv = document.getElementById('result');
  const handsDiv = document.getElementById('hands');
  const playerScoreDiv = document.getElementById('player-score');

  resultDiv.innerText = ' ';
  handsDiv.innerText = ' ';
  playerScoreDiv.innerText = ' ';
}

playGame()
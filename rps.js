console.log('The Ultimate RPS Game!');
//getting the users choice
const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
  if(userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput;
  } else {
    return "Error! Please choose rock, paper or scissors";
  }
};

/*Calling out the function to see if it works
console.log(userChoice("PaPer"));*/

//getting computers choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()*3);
switch(randomNumber) {
case 0:
return "rock";
case 1:
return "paper";
case 2:
return "scissors";
}
};

/*Calling out the function to see if it works
console.log(computerChoice());*/

//function to determine a winner
const determineWinner = (getUserChoice, getComputerChoice) => {
if(getUserChoice === getComputerChoice) {
return "This game is a tie";
}
if(getUserChoice === "rock") {
  if(getComputerChoice ==="paper") {
    return "Sorry, computer won!";
} else {
  return "Congratulations, you won!";
    }
  }

  if(getUserChoice === "paper") {
    if(getComputerChoice === "scissors") {
    return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }
  if(getUserChoice === "scissors") {
    if(getComputerChoice === "rock") {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }
  if(getUserChoice === "bomb"){
    return "Congratulation, you have found a cheat code and won!"
  }
};

/*Checking if the function works
console.log(determineWinner("rock", "paper"));
console.log(determineWinner("scissors", "rock"));
console.log(determineWinner("paper", "paper"));*/

const playGame = () => {
const userChoice = getUserChoice("rock");
const computerChoice = getComputerChoice();
console.log(`You threw a: ${userChoice}`);
console.log(`Computer threw a: ${computerChoice}`);

//determing the winner
console.log(determineWinner(userChoice, computerChoice));
};

playGame();



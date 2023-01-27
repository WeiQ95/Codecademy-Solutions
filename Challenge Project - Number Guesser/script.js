let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9);
// console.log(generateTarget());
const getAbsoluteDistance = (num1 , num2) => Math.abs(num1-num2);


const compareGuesses = (humanGuess , computerGuess , target) => 
  getAbsoluteDistance(target,humanGuess) > getAbsoluteDistance(target,computerGuess) ? false : true;

//Testing compare
// let humanGuess = 9;
// let computerGuess = 4;
// let target = 6;

// console.log(compareGuesses(humanGuess , computerGuess , target));

const updateScore = roundWinner => roundWinner === 'human' ? humanScore += 1 : computerScore += 1;

const advanceRound = () => currentRoundNumber += 1;

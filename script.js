//We are going to play a game of rock, paper, scissors with a computer
//Let's write out the steps

//Set up the initial score for user and computer
let userScore = 0;
let computerScore = 0;

//Take the user guess of R,P,S. We need to make this be based on a user click
//To use querySelectorAll we have to loop over all with the forEach method
const btnList = document.querySelectorAll("button");

//Define the roundWinner to use later on
let roundWinner = "initial";
console.log(roundWinner);

//Define a current score
let currentScore = `USER 0 - 0 COMPUTER`;
console.log(currentScore);

//Create a round number variable that tracks the number of 'successful' clicks
let roundNumber = 0;

//Whenever the user clicks a button, they will play 1 round
btnList.forEach(function (btn) {
  btn.addEventListener("click", function (e) {

    roundNumber ++;

    // We can create a constant based on what the player clicks
    console.log(e.target.innerHTML.toLowerCase());
    const playerSelection = e.target.innerHTML.toLowerCase();


    //Assign a random number between 1-3, this will be the computer guess and will
    //act as a proxy for R,P,S.

    //Function to generate random integers between min and max
    function getComputerChoice(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //RPS only has 3 choices, this could be increased if we played RPS, lizard, spock for example
    let min = 1;
    let max = 3;

    //generate a random number between 1-3 and store as computer guess
    let computerGuess = getComputerChoice(min, max);

    //Assign 1,2,3 and ROCK, PAPER, SCISSORS
    let computerSelection;
    switch (computerGuess) {
      case 1:
        computerSelection = "rock";
        break;
      case 2:
        computerSelection = "paper";
        break;
      case 3:
        computerSelection = "scissors";
    }

    //Here we need to bring in the playerSelection constant that we made earlier
    console.log(`Computer RPS = ${computerSelection}`);
    console.log(`User RPS = ${playerSelection}`);

    //If user = computer then DRAW
    //If user = rock and computer = scissors then HUMAN WIN
    //If user = rock and computer = paper then COMPUTER WIN
    //If user = paper and computer = rock then HUMAN WIN
    //If user = paper and computer = scissors then COMPUTER WIN
    //If user = scissors and computer = paper then HUMAN WIN
    //If user = scissors and computer = rock then COMPUTER WIN

    if (playerSelection === computerSelection) {
      roundWinner = "DRAW";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      roundWinner = "USER WIN";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      roundWinner = "COMPUTER WIN";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      roundWinner = "USER WIN";
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      roundWinner = "COMPUTER WIN";
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      roundWinner = "USER WIN";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      roundWinner = "COMPUTER WIN";
    }

    console.log(roundWinner);

    //Make a function that will increase the score per round
    function score() {

      // Define the whoWon constant to be used to fill in the text

      const whoWon = document.querySelector("#whoWonText");

      //After a win, add 1 to the score of either the user or computer
      // Fill in the whoWonText
      if (roundWinner === "USER WIN") {
        userScore++;
        whoWon.textContent = "You won this round!";
      }
      else if (roundWinner === "COMPUTER WIN") {
        computerScore++;
        whoWon.textContent = "The computer won this round!";
      }
      else {
        whoWon.textContent = "It was a draw!";
      }
      return `USER ${userScore} - ${computerScore} COMPUTER`;
    } 

    // Create a current score variable
    currentScore = score();
    console.log(currentScore);

    // Edit the text inside the currentScoreText
    let scoreText = document.getElementById("currentScoreText");
    scoreText.innerHTML = currentScore;

    currentRoundPara = document.getElementById("currentRoundText")
    currentRoundPara.innerHTML = `You have played <b>${roundNumber}</b> rounds`;

    console.log(`You have played ${roundNumber} rounds`);


    //Update the message when the user of computer gets to 5
    if (userScore === 5) {
      scoreText.innerHTML = "You win!";
    }
    else if (computerScore === 5) {
      scoreText.innerHTML = "The computer wins!"
    }

    // Replace the play buttons with a retry, once pressed, load initial state
    if (userScore === 5 | computerScore === 5) {

      //Remove the initial buttons
      const RPSbuttons = document.querySelectorAll('.RPSbutton')
      RPSbuttons.forEach((button) => {
        button.remove();
      });

      // Replace with a "Replay" button
      const replayButton = document.createElement('button');
      replayButton.id = "replayButton"
      replayButton.textContent = "Replay?"

      const buttonParent = document.querySelector('.buttons')
      buttonParent.appendChild(replayButton);

      //Refresh the page once clicked
      const refreshButton = document.querySelector("#replayButton")

      const refreshPage = () => {
        location.reload()
      }
      
      refreshButton.addEventListener('click',refreshPage)
    }

  });
});



 //We are going to play a game of rock, paper, scissors with a computer
        //Let's write out the steps

        //Set up the initial score for user and computer
        let userScore = 0;
        let computerScore = 0;

    
        //Take the user guess of R,P,S. We need to make this be based on a user click
        //To use querySelectorAll we have to loop over all with the forEach method

        const btnList = document.querySelectorAll('button');
        
        //The playRound function will be called when the user clicks a button
        btnList.forEach(function(btn) {
            btn.addEventListener('click', function(e) {

        // We can create a constant based on what the player clicks
        console.log(e.target.innerHTML.toLowerCase());
        const playerSelection = e.target.innerHTML.toLowerCase();

        //Make a function that will play a round of RPS each time the users clicks
        function playRound() {

            //Assign a random number between 1-3, this will be the computer guess and will
            //act as a proxy for R,P,S.
    
            //Function to generate random integers between min and max
            function getComputerChoice(min,max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            
            //RPS only has 3 choices, this could be increased if we played RPS, lizard, spock for example
            let min = 1;
            let max = 3;
    
            //generate a random number between 1-3 and store as computer guess
            let computerGuess = getComputerChoice(min,max)
            
            //Assign 1,2,3 and ROCK, PAPER, SCISSORS
            let computerSelection ; 
            switch(computerGuess) {
                case 1:
                    computerSelection = "rock";
                    break;
                case 2:
                    computerSelection = "paper"
                    break;
                case 3:
                    computerSelection = "scissors"   
            }
    
            //Here we need to bring in the playerSelection constant that we made earlier
            console.log(`Computer RPS = ${computerSelection}`)
            console.log(`User RPS = ${playerSelection}`)
    
    
            //If user = computer then DRAW
            //If user = rock and computer = scissors then HUMAN WIN
            //If user = rock and computer = paper then COMPUTER WIN
            //If user = paper and computer = rock then HUMAN WIN
            //If user = paper and computer = scissors then COMPUTER WIN
            //If user = scissors and computer = paper then HUMAN WIN
            //If user = scissors and computer = rock then COMPUTER WIN
    
            let roundWinner ;  if (playerSelection === computerSelection) {
                roundWinner = "DRAW";
            } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
                roundWinner =  "USER WIN";
            } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
                roundWinner =  "COMPUTER WIN";
            } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
                roundWinner = "USER WIN";
            } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
                roundWinner = "COMPUTER WIN";
            } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
                roundWinner = "USER WIN";
            } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
                roundWinner = "COMPUTER WIN";
            }
    
            return roundWinner;
        }
        
        //We can log the winner of the round
        console.log(playRound());
            });
          });


        /*

        //Make a function that will increase the score per round
        function score() {

        let roundWinner = playRound();
        //After a win, add 1 to the score of either the user or computer
        if (roundWinner === "USER WIN") {
            userScore++;
        }
        if (roundWinner === "COMPUTER WIN") {
            computerScore++;
        }
        console.log(roundWinner)
        return (`USER ${userScore} - ${computerScore} COMPUTER`)
        }
    
        //Make a function that will play 5 rounds of RPS
        function game() {
        console.log("%cGAME 1" , "color:red; font-size 14px")
        console.log(score())
        
        //Play the game 5 times

        console.log("%cGAME 2" , "color:red; font-size 14px")
        console.log(score())
        console.log("%cGAME 3" , "color:red; font-size 14px")
        console.log(score())
        console.log("%cGAME 4" , "color:red; font-size 14px")
        console.log(score())
        console.log("%cGAME 5" , "color:red; font-size 14px")
        console.log(score())
        

        //Tell the user who won after 5 rounds
        let winner ; if (userScore === computerScore) {
            winner = "It's a draw!"
        }
        else if(userScore > computerScore) {
            winner ="You win!"
        }
        else {
            winner ="The computer won!"
        }

        return winner;
        }

        //Play the game on the console
        console.log(`%c${game()}`,"color:blue");

        */

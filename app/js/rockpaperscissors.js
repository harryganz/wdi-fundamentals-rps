////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput().replace(/\n$/, "");
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
      winner = 'tie';
    } else if(playerMove === 'rock') {
      winner = (computerMove === 'paper' ? 'computer' : 'player');
    } else if(playerMove === 'paper'){
      winner = (computerMove === 'scissors' ? 'computer' : 'player');
    } else {
      winner = (computerMove === 'rock' ? 'computer' : 'player');
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while(playerWins < 5 && computerWins < 5){
      // Initalize current move to null
      var playerMove = null;
      var computerMove = null;
      // Initialize winner to null
      var winner = null;
      // Prompt player for move
      playerMove = getPlayerMove();
      console.log("Your move: " + playerMove);
      // Computer move
      computerMove = getComputerMove();
      console.log("Computer's move: " + computerMove);
      // See who won
      winner = getWinner(playerMove, computerMove);
      // Add wins to playerWins or computerWins
      if(winner === 'computer'){
        computerWins += 1;
      }
      if(winner === 'player') {
        playerWins += 1;
      } // Otherwise tie and re-run loop
      console.log(winner + " wins this round. Player: " + playerWins +
      " Computer: " + computerWins);
    }
    return [playerWins, computerWins];
}

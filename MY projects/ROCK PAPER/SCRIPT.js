
var playerScore = 0;
document.getElementById('playerScore').innerHTML= 0;
var computerScore = 0;
document.getElementById('computerScore').innerHTML= 0;



function rps(playerChoice){
  const options = ['rock', 'paper', 'scissors'];
  
  const computerChoice = options[Math.floor(Math.random() * options.length)];


  //            NEED TO BE FIXED
  console.log();
  document.getElementById('choice_message').innerHTML = `Computer choose ${computerChoice}`.toUpperCase();

  

  if((playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper'))
     
    { 
        playerScore = playerScore + 1;
        document.getElementById('playerScore').innerHTML= playerScore;
      document.getElementById('statusMessage').innerHTML= 'YOU WIN';

        
  }else if(playerChoice === computerChoice){
      document.getElementById('statusMessage').innerHTML= 'Its a Tie!';
        
      
    }else {
      computerScore = computerScore + 1;
      document.getElementById('computerScore').innerHTML= computerScore;
      document.getElementById('statusMessage').innerHTML= 'YOU LOOSE!';
  };

  if (playerScore === 10){
    document.getElementById('statusMessage').innerHTML= `You Won This Round.`;
 document.getElementById('computerScore').innerHTML= 0;
    
    playerScore = 0;
    computerScore = 0;
    
  }else if (computerScore === 10){
    document.getElementById('statusMessage').innerHTML= `You Loose This Round`;
    document.getElementById('playerScore').innerHTML= 0;
    
    
    computerScore = 0;
    playerScore = 0;
  }
}

    
// main title typing text effect,

document.addEventListener('DOMContentLoaded', function(e){
    let title = 'Rock, Paper, Scissor'
    function typeWriter(text, i) {
        // check if text isn't finished yet
        if(i < (text.length)){
            // add next character to title
            document.getElementById(`game_title`).innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';

            // wait for a moment before call this function for the next 
            // character

            setTimeout(() => {
                typeWriter(text, i+1)
            }, 100);
        }
    }

    typeWriter(title,1);
}); 

// function to generate computer choice
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissor'];
    let theChoice = Math.floor(Math.random() * 3);
    return choices[theChoice];
}

// function to play a round
function playRound(playerSelection, computerSelection){
    // make the selection string to lowercase for them to be case insensitive
    let playerSelectionClone = playerSelection.toString().toLowerCase();
    // make different cases for computer choices
    // then for each cases of the computer choices, compare them to player choice
    if(computerSelection === 'rock') {

        if(playerSelectionClone === 'rock')
            return 'Tied! Rock cancels out Rock'
        else if(playerSelectionClone === 'paper')
            return 'You Won! Paper beats Rock'
        else    
            return 'You Lose! Scissor is smashed by Rock'
    }
    else if(computerSelection === 'paper') {

        if(playerSelectionClone === 'rock')
            return 'You Lose! Rock is covered by Paper';
        else if(playerSelectionClone === 'paper')
            return 'Tied! Paper cancels out Paper';
        else
            return 'You Won! Scissor cuts Paper';
    }
    else {

        if(playerSelectionClone === 'paper')
            return 'You Lose! Paper is cut by Scissor'
        else if(playerSelectionClone === 'rock')
            return 'You Won! Rock smashes Scissor'
        else    
            return 'Tied! Scissor cancels out Scissor'
    }
    
}



const body = document.body;


// main function that control the game
function game(){
    let compScore = 0;
    let playerScore = 0;
    
    
    const buttons = document.querySelectorAll('button');

    // Content to output each round play
    
    
    
    let playerChoice = ' ';
    let compChoice = ' ';
        buttons.forEach((button) => {
            button.addEventListener('click', function(e){        
                if(playerScore === 5 || compScore ===5)
                    return;

                if(button.id === 'rock'){
                    playerChoice = 'rock';
                    compChoice = getComputerChoice()
                    
                }
                else if(button.id === 'paper'){
                    playerChoice = 'paper';
                    compChoice = getComputerChoice()
                }
                else{
                    playerChoice = 'scissor';
                    compChoice = getComputerChoice()
                }

                let result = playRound(playerChoice,compChoice);
            
                if(result.search('Won')!=-1){
                    playerScore++;
                }
                else if(result.search('Lose')!=-1){
                    compScore++;
                }
                else{
                    
                }
                document.querySelector("#player_score").innerHTML = `Player Score = ${playerScore}`;
                document.querySelector("#bot_score").innerHTML = `Bot Score = ${compScore}`;
                
                // When the game is finished
                const winner = document.createElement('div');
                if(compScore === 5 || playerScore === 5){
                    if(compScore === 5){
                        // Show the winner
                        winner.textContent = 'Computer Won !!!!';
                        body.appendChild(winner);
                        
                    }
                    else{
                        winner.textContent = 'Player Won!!!!';
                        body.appendChild(winner);
                        
                    }
                    // Add a button to restart the game when finished
                    const play_again_button = document.createElement('button');
                    play_again_button.textContent = 'Play again';
                    play_again_button.setAttribute('id','reset');
                    play_again_button.onclick = function(){location.reload()};
                    body.appendChild(play_again_button);
                }

            });
        });
    
    
    return;
        
}

game();


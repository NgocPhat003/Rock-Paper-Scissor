
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissor'];
    let theChoice = Math.floor(Math.random() * 3);
    return choices[theChoice];
}


function playRound(playerSelection, computerSelection){
    // make the selection string to lowercase for them to be case insensitive
    let playerSelectionClone = playerSelection.toString().toLowerCase();
    // make differect cases for computer choices
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


function game(){
    let compScore = 0;
    let playerScore = 0;
    
    
    const buttons = document.querySelectorAll('button');

    
    const round_result = document.createElement('div');
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
                round_result.textContent = result;
                if(result.search('Won')!=-1){
                    playerScore++;
                    body.appendChild(round_result);
                }
                else if(result.search('Lose')!=-1){
                    compScore++;
                    body.appendChild(round_result);
                }
                else{
                    body.appendChild(round_result);
                }
                const currentPlayerScore = document.querySelector("#player_score").innerHTML = `Player Score = ${playerScore}`;
                const currrentCompScore = document.querySelector("#bot_score").innerHTML = `Bot Score = ${compScore}`;
                

                const winner = document.createElement('div');
                if(compScore === 5 || playerScore === 5){
                    if(compScore === 5){
                        winner.textContent = 'Computer Won !!!!';
                        body.appendChild(winner);
                        
                    }
                    else{
                        winner.textContent = 'Player Won!!!!';
                        body.appendChild(winner);
                        
                    }
                    const play_again_button = document.createElement('button');
                    play_again_button.textContent = 'Play again';
                    play_again_button.setAttribute('id','reset');
                    play_again_button.onclick = function(){location.reload()};
                    body.appendChild(play_again_button);

                    var play_again_script = document.createElement('script');
                    play_again_script.setAttribute('src','playagain.js');
                    body.appendChild(play_again_script);
                }

            });
        });
    
    
    return;
        
}

game();


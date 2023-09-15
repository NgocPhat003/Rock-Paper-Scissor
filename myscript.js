
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

/*function game(){
    console.log('Let play Rock Paper Scissor!')
    let compScore = 0;
    let playerScore = 0;
    for(let i=0; i<5; i++){
        let playerChoice = prompt('Choose Rock, Paper or Scissor')
        let computerChoice = getComputerChoice()
        let result = playRound(playerChoice,computerChoice);
        console.log('Computer chooses: ' + computerChoice);
        console.log('Player chooses: '+ playerChoice);
        console.log(result);
        // check the result to count the scores
        if(result.search('Won')!=-1)
            playerScore++;
        else if(result.search('Lose')!=-1)
            compScore++;
    }
    // output the final scores and the winner
    console.log('Computer score: '+ compScore)
    console.log('Player sroce: ' + playerScore)
        
    if(compScore>playerScore)
        console.log('Computer wins!')
    else if(compScore<playerScore)
        console.log('Player wins!')
    else
        console.log('Draw!!!')
        
}*/


const body = document.body;


function game(){
    let compScore = 0;
    let playerScore = 0;
    
    const result_div = document.createElement('div');
    result_div.textContent = `Player Score = ${playerScore}\n
                                Computer Score = ${compScore}`;
    const buttons = document.querySelectorAll('button');

    body.appendChild(result_div);
    const round_result = document.createElement('div');
    // Content to output each round play
    
    
    
    let playerChoice = ' ';
    let compChoice = ' ';
        buttons.forEach((button) => {
            button.addEventListener('click', function(e){
                if(button.className === 'reset'){
                    console.log('clicked');
                    compScore = 0 ;
                    body.removeChild(play_again_button);
                    result_div.textContent = `Player Score = ${playerScore}\n
                                Computer Score = ${compScore}`;
                    body.appendChild(result_div);  
                }
                
                if(playerScore === 5 || compScore ===5)
                    return;

                if(button.className === 'rock'){
                    playerChoice = 'rock';
                    compChoice = getComputerChoice()
                    
                }
                else if(button.className === 'paper'){
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
                result_div.textContent = `Player Score = ${playerScore}\n
                                Computer Score = ${compScore}`;
                body.appendChild(result_div);

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
                    play_again_button.setAttribute('id','reset')
                    body.appendChild(play_again_button);
                }

            });
        });
    
    
    return;
        
}

game();


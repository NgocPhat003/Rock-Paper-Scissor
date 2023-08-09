
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissor'];
    let theChoice = Math.floor(Math.random() * 3);
    return choices[theChoice];
}


function playRound(playerSelection, computerSelection){
    // make the selection string to lowercase for them to be case insensitive
    let playerSelectionClone = playerSelection.toLowerCase();
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

function game(){
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
        
}

game();
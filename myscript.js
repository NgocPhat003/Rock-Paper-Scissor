
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

        if(playerSelectionClone ==- 'rock')
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
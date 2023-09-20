const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        console.log('clicked')
        if(button.className === 'reset'){
            compScore = 0 ;
            playerScore = 0 ;
            body.removeChild(play_again_button);
            result_div.textContent = `Player Score = ${playerScore}\n
                        Computer Score = ${compScore}`;
            body.appendChild(result_div);  
        }
        });
    })
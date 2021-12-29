// GAME FUNCTION
// PLAYER MUST GUESS A NUMBER BETWEEN A MIN AND MAX 
// PLAYER GETS A CERTAIN AMOUNT OF GUESSES 
// NOTIFY PLAYER OF GUESSES REMAINING 
// NOTIFY THE PLAYER OF THE CORRECT ANSWER IF THEY LOSE 
// LET PLAYER CHOOSE TO PLAY AGAIN

let min = 1,
    max = 10,
    winningNum = 2,
    geussesLeft = 3;

const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value)
   
   
    if (isNaN(guess) || guess < min || guess > max ) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'green')
    } 

    if(guess === winningNum){
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        setMessage(`${winningNum} is correct. YOU WIN!!`, 'green')
    }
});

function setMessage(msg, color) {
    message.style.color = color
    message.textContent = msg
}
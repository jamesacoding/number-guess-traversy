
// GAME FUNCTION
// PLAYER MUST GUESS A NUMBER BETWEEN A MIN AND MAX 
// PLAYER GETS A CERTAIN AMOUNT OF GUESSES 
// NOTIFY PLAYER OF GUESSES REMAINING 
// NOTIFY THE PLAYER OF THE CORRECT ANSWER IF THEY LOSE 
// LET PLAYER CHOOSE TO PLAY AGAIN


let min = 1,
    max = 10,
    guessesLeft = 3,
    winningNumb = 2;


const minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input')
      message = document.querySelector('.message');

      console.log(message)

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please pick a number between ${min} and ${max}`, 'red');
    }
    if(guess === winningNumb){
        setMessage(`YOU WIN ${winningNumb} is the correct number`, 'green')
    }else {
        guessesLeft -= 1;
        if(guessesLeft === 0) {
            guessInput.disabled = true;
            guessInput.value = '';
            
            setMessage(`Game Over`)
        } else{
        setMessage(`${guess} is not the number. You have ${guessesLeft} guesses left`, 'red');
        guessInput.value = '';}
    }
});


function setMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}


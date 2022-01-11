
// GAME FUNCTION
// PLAYER MUST GUESS A NUMBER BETWEEN A MIN AND MAX 
// PLAYER GETS A CERTAIN AMOUNT OF GUESSES 
// NOTIFY PLAYER OF GUESSES REMAINING 
// NOTIFY THE PLAYER OF THE CORRECT ANSWER IF THEY LOSE 
// LET PLAYER CHOOSE TO PLAY AGAIN


let min = 1,
    max = 10,
    winnningNum = 2,
    guessesLeft = 3;


const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

      minNum.textContent = min;
      maxNum.textContent = max;


guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value)
   if(isNaN(guess) || guess < min || guess > max ) {
       setMessage(`Please pick a number between ${min} and ${max}`, 'red')
   } 
   if(guess === winnningNum){
       guessInput.disabled = true;
       guessInput.style.borderColor = 'green'
       setMessage(`${winnningNum} is the correct answer`, 'green')
   }else {
       guessesLeft -= 1;
       if(guessesLeft === 0){
           guessInput.disabled = true;
           guessInput.style.borderColor = 'red';
           setMessage(`Game Over. You have no guesses left. The correct number was ${winnningNum}`, 'red')
       }else {
        setMessage(`${guess} is not correct. ${guessesLeft} Guesses Left`, 'red');
        guessInput.value = '';
       }

   }

})

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}



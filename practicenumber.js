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

const minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input");
  message = document.querySelector(".message");
  game = document.querySelector('#game');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
   if(e.target.className === 'play-again'){
       window.location.reload();
   };
})

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  } else {
    if (guess === winningNumb) {
     gameOver(true, `${guess} is correct. YOU WIN!!!`)
    
    } else {
      guessesLeft -= 1;
      if (guessesLeft === 0) {
       gameOver(false, `Game Over. You have no guesses left`)
      } else {
       guessInput.value = '';
       guessInput.style.borderColor = 'red';
       setMessage(`${guess} is not the right number.  You have ${guessesLeft} guesses left`, 'red')
        
      }
    }
  }
});

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
function gameOver(won, msg){
    won === true ? color = 'green' : color = 'red';
    guessInput.value = "";
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color);

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}
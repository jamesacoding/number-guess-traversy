let min = 1,
    max = 10,
    winnningNum = getRandomNum(min, max),
    guessesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max} `, 'red')
    }

    if (guess === winnningNum){

        gameOver(true, `${winnningNum} is correct`)
        // guessInput.disabled = true;
        // guessInput.style.borderColor = 'green';
        // setMessage(`${winnningNum} is correct!`, 'green')
    } else {
        guessesLeft -= 1;

        if(guessesLeft === 0) {

            gameOver(false, `Game Over. The correct number was ${winnningNum}`)
            // guessInput.disabled = true;
            // guessInput.style.borderColor = 'red';
            // setMessage(`Game Over. The correct number was ${winnningNum}`, 'red')

        } else{
            setMessage(`${guess} is not correct. You have ${guessesLeft} guesses left`, 'red');
            guessInput.value = '';

        }
    }
    
})

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
        guessInput.disabled = true;
        guessInput.style.borderColor = color;
        message.style.color = color;
        setMessage(msg)

        guessBtn.value = 'Play Again';
        guessBtn.className += 'play-again'
}

function getRandomNum(min, max){
    return (Math.floor(Math.random() * (max-min + 1) + min))
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

 let min = 1,
     max = 10,
     winnningNum = 2;
 
 
 const minNum = document.querySelector('.min-num');
 const maxNum = document.querySelector('.max-num');
 const guessInput = document.querySelector('#guess-input');
 const guessBtn = document.querySelector('#guess-btn');

 guessBtn.addEventListener('mousedown', function(){
    let guess = parseInt(guessInput.value)
    if(isNaN(guess) || guess < min || guess < max)
 })

minNum.textContent = min;
maxNum.textContent = max;
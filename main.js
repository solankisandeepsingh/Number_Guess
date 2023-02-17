let min = 1,
    max = 10,
    // winningNum = 2,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

//UI Elements :
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');


//Assign UI min and max Dynamically :
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listner :
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

//Listen for guess :
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    if (guess === NaN || guess > min || guess < max) {
        // setMessage(`please enter the number between ${min} and ${max}`)
        setMessage(`please enter the number between ${min} and ${max}`, 'red');
    }

    //check if won :
    if (guess === winningNum) {
        //Game Over - Won   
       gameOver(true ,`${winningNum} is correct, YOU WIN!!`)
    } 
    else {
        //Wrong Number :

        guessesLeft -= 1;
        if (guessesLeft === 0) {
            //Game Over - Lost

            // //disable input
            // guessInput.disabled = true;
            // // Change Border Color :
            // guessInput.style.borderColor = 'red';
            // //set message 
            // setMessage(`Game Over, you lost. the correct number was ${winningNum}`, 'red');

            gameOver(false , `Game Over, you lost. the correct number was ${winningNum}`)
        } 
        else {
            //Game Continues - Answer Wrong

            //Change Border Color :
            guessInput.style.borderColor = 'red';

            //Clear Input:
            guessInput.value = '';
 
            //Tell use its the wrong number :
            setMessage(`${guess} is not corect, ${guessesLeft} guesses left`)

        }
    }
})

function gameOver(won,msg){
    let color;
    won === true ?  color ='green' : color = 'red'
    
    //Disable Input:
    guessInput.disabled = true;
    //Change the border color :
    guessInput.style.borderColor = color;

    //set Text color :
    message.style.color = color;
    //set message :
    setMessage(msg);

    //Play Again :
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}


//Second Type:
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
























//First Type:
// function setMessage(msg){
//     message.style.color = "red";
//     message.textContent =msg;
// }


//Listen for button (guess):
// guessBtn.addEventListener('click', function(){
//     // console.log("hello")
//     // console.log(guessInput) // completer input aa jygi isme
//     console.log(guessInput.value) // 2 value jo bhi input me dalenge vo aaygi
// })

window.addEventListener("load", start);

function start() {
  gameLogicEventListeners();
  enterSubmit()
  displayLose()
}

// global variables
let randomNumber = Math.floor(1 + Math.random(1) * 10);
console.log(randomNumber);
let playerGuesses = 0;
let stopTimer = false;
let win = false;

//start and submit buttons.
function gameLogicEventListeners() {
  const submit = document.getElementById("submitGuess");
  submit.addEventListener("click", playGame);
  setTimeout(submit.addEventListener("click", startTimer), 1000);

  const start = document.getElementById("start");
  start.addEventListener("click", startTimer);
  start.addEventListener("click", displayInputAndSubmitButton);
}

//returns input from user.
function takeInput() {
  const guess = document.getElementById("guess").value;
  return guess;
}

function playGame() {
  let inputNumber = Number(takeInput());

  console.log(inputNumber)
  let presentText = document.getElementById("presentText");
  // checks if inputnumber is lower or higher then randomnumber
  if (inputNumber > randomNumber) {
    presentText.innerHTML = "Lower";
    playerGuesses += 1;
    stopTimer = true;
    if (isSillySelected) {
      sillyBotsTurn(randomNumber, inputNumber);
    }
  }
  if (inputNumber !== 0 && inputNumber < randomNumber) {
    presentText.innerHTML = "higher";
    playerGuesses += 1;
    stopTimer = true;
    if (isSillySelected) {
      sillyBotsTurn(randomNumber, inputNumber);
    }
  }
  if (inputNumber === randomNumber) {
    presentText.innerHTML = "You Win";
    stopTimer = true;
    win = true;
    displayWin()
  }
  if(inputNumber === 0){
    stopTimer = true;
    presentText.innerHTML = "please input a number";
  }
 
  displayGuesses(playerGuesses);
}

// timer countDown.
function startTimer() {
  let timer = 6;
  let time = setInterval(countDown, 1000);
  let DOMtimer = document.getElementById("timer");
  function countDown() {
    timer--;
    if (timer <= 0) {
      timer = 6;
      clearInterval(time);
    }
    if (stopTimer) {
      clearInterval(time);
      timer = 5;
      stopTimer = false;
    }
    if (win) {
      clearInterval(time);
      timer = "";
    }
    if (botWin) {
      clearInterval(time);
      timer = "";
    }
    DOMtimer.innerHTML = timer;
    if (timer === 6) {
      DOMtimer.innerHTML = "";
    }
  }
  //playGame(timer);
    let timer = 10;
    let time = setInterval(countDown, 1000);
    let DOMtimer = document.getElementById("timer");
    DOMtimer.style.visibility = "visible";
    function countDown() {
        timer--;
        if (timer < 1) {
            timer = 10; 
            clearInterval(time);
        } 
        if (stopTimer){
            clearInterval(time);
            timer = 10;
            stopTimer = false;
        }
        if (win || botWin) {
            clearInterval(time);
            DOMtimer.style.visibility = "hidden";
        }
        /* if (timer === 10){
          DOMtimer.style.visibility = "hidden";
        } */
        DOMtimer.innerHTML = timer;
    }
}

function displayInputAndSubmitButton() {
  // displays bots wich are selected to play against
  botSelected();


  // shows input and sumbit when start is pressed
  const submit = document.getElementById("submitGuess");
  const guess = document.getElementById("guess");
  const userBox = document.getElementById("userInput");
  userBox.classList.add("show");
  submit.classList.add("show");
  guess.classList.add("show");
}

function displayGuesses(playerGuesses) {
  //console.log(playerGuesses);
}

//get timer to restart on start click

//listens for Enter key press.
function enterSubmit() {
    document.addEventListener('keypress', submit);
    function submit(event) {
      if(event.code === "Enter"){
        playGame();
        setTimeout(startTimer, 1000)
    }
  }
}

//buttons will be hidden on guess so no need to add repress logic

function displayWin(){
  console.log('test')
}

function displayLose(){
    console.log('test')
}

function guessAgain(){

}

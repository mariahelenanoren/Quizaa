
function displayWin(){
    let hideGame = document.getElementById('userBox')
    let bot= document.getElementById('sillyBot');
    let win= document.getElementById('you-won');
    let again = document.getElementById('againW');
    let backToMain = document.getElementById('boredW');
    hideGame.style.display = "none";
    bot.style.display = "none";
    win.style.display = "flex";
    again.addEventListener('click', () => {location.reload()} );
    backToMain.addEventListener('click', () => {location.href = "./menu.html";} );
}

function displayLose(){
    let hideGame = document.getElementById('userBox')
    let bot= document.getElementById('sillyBot');
    let lose= document.getElementById('you-lose');
    let again = document.getElementById('againL');
    let backToMain = document.getElementById('boredL');
    hideGame.style.display = "none";
    bot.style.display = "none";
    lose.style.display = "flex";
    again.addEventListener('click', () => {location.reload()} );
    backToMain.addEventListener('click', () => {location.href = "./menu.html";} );
}
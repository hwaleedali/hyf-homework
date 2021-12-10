const inputTime = document.querySelector("#number");
const gameButton = document.querySelector("#gameButton");
const countS = document.querySelector("#countS");
const countL = document.querySelector("#countL");
const returnMsg = document.querySelector("#return");
const playButton = document.querySelector("#againButton")
let gameTime = 0;
let sumS = 0;
let sumL = 0;
gameButton.addEventListener('click', startGame);
function startGame() {
    gameTime = Number(inputTime.value) * 1000;//get the input time
    if (gameTime === 0) {
        returnMsg.textContent = " Please Enter Time in Seconds."
    }
    document.addEventListener('keypress', logKey);
    //this is how to get the value from keyboard
    function logKey(s) {
        if (s.key === 's') {
            sumS++;
            countS.textContent = sumS
        } else if (s.key === 'l') {
            sumL++;
            countL.textContent = sumL
        }
    }
    setTimeout(() => {
        document.removeEventListener('keypress', logKey);
    }, gameTime);
    setTimeout(() => {
        gameButton.removeEventListener('click', startGame);
        if (sumS > sumL) {
            returnMsg.textContent ="S win"
        } else if (sumS < sumL) {
            returnMsg.textContent = "L win"
        }else if (sumS === 0 && sumL === 0 && gameTime > 0) {
                returnMsg.textContent = "You have not Clicked S or L";
        } 
        else if (sumS = sumL) {
            returnMsg.textContent= "Same score,try again";
        }
        inputTime.value = "";

    }, gameTime);


    playButton.addEventListener("click", playAgain);
    function playAgain() {
        
        window.location.reload(true);
    }
}

        

        

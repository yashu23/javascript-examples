const MAX_NUMBER = 10;
const MAX_RETRIES = 3;

let numberOfAttempts = 0;

const RANDOM_MASTER_VALUE = Math.floor(1 + Math.random() * Math.floor(MAX_NUMBER-1));

const employee = {
    name: 'Yuv',
    age: '1month',
    hobby: 'sleeping'
}

console.log(`number to be guessed: ${RANDOM_MASTER_VALUE}`);

document.querySelector("#checkButton").onclick = function() {

    setStyle("#message", "error");

    try {
        const guessValue = getCurrentGuess(document.querySelector("input").value);
        
        const isAttemptsRemaining = checkRemainingAttempts();

        if (isAttemptsRemaining) {

            const diff = RANDOM_MASTER_VALUE - guessValue;

            if (diff === 0) {
                setMessage("#message", `You won, lucky chap: ${guessValue}`);
                setStyle("#message", "success");
            } else {
                numberOfAttempts++;

                if (diff > 0) {
                    setMessage("#message", `Sorry Guess Higher: ${MAX_RETRIES - numberOfAttempts} attempts pending`);
                } else {
                    setMessage("#message", `Sorry Guess Lower: ${MAX_RETRIES - numberOfAttempts} attempts pending`);
                }
            }
        } else {
            setMessage("#message", `Sorry, Number of attempts expired`);
        }
    } catch(e) {
        console.error(e);
        setMessage("#message", e.message);
    }
};

function getCurrentGuess(val) {
    console.log(`Checking value: ${val}`);
    if (val && parseInt(val) > 0 && parseInt(val) < 10) {
        return parseInt(val);
    } else {
        throw new Error(`Invalid input ${val}: Please enter value between 0 and 10`);
    }
}

function checkRemainingAttempts() {
    return numberOfAttempts < MAX_RETRIES;
}

function setMessage(selector, message) {
    document.querySelector(selector).textContent = message;
}

function setStyle(selector, styleClass) {
    document.querySelector(selector).className = styleClass;
}


const names = ['Yash', 'Vandana', 'Vansh', 'Yuv'];

names.forEach((name) => console.log(name));

console.log(`${names.join('-')}`);
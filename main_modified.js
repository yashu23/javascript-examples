const MAX_NUMBER = 10;
const MAX_RETRIES = 3;

let numberOfAttempts = 0;

const RANDOM_MASTER_VALUE = Math.floor(
  1 + Math.random() * Math.floor(MAX_NUMBER - 1)
);

console.log(`number to be guessed: ${RANDOM_MASTER_VALUE}`);

function Message(msgText, styleClass) {
  this.msgText = msgText;
  this.styleClass = styleClass;
}

/*try {
  document.querySelector("#checkButton").onclick = checkGuessValue(
    document.querySelector("input").value, MAX_RETRIES, RANDOM_MASTER_VALUE
  );
} catch (e) {
  console.error(e);
  setMessage("#message", new Message(e.message, "error"));
}*/

/**
 *  1. Set Default style
 *  2. Fetch Current Guess Value
 *  3. Check if number of attempts allowed
 *  4. Check if guess is lower or higher
 */
function checkGuessValue(currentGuess, maxAttempts, randomMasterValue) {
  performRangeValidation(currentGuess, 0, 10);

  numberOfAttempts = incrementNumberOfAttempts(numberOfAttempts, maxAttempts);

  const diff = randomMasterValue - guessValue;

  if (diff === 0) {
    return new Message(`You won, lucky chap: ${guessValue}`, "green");
  } else {
    if (diff > 0) {
      return new Message(
        `Sorry Guess Higher: ${maxAttempts -
          numberOfAttempts} attempts pending`,
        "error"
      );
    } else {
      return new Message(
        `Sorry Guess Lower: ${maxAttempts - numberOfAttempts} attempts pending`,
        "error"
      );
    }
  }
}

function setSuccess(selector, message) {
  setMessage(selector, message);
  setStyle(selector, "success");
}

/**
 *
 */
function incrementNumberOfAttempts(attemptsSoFar, maxAttempts) {

  if(attemptsSoFar < 0 || maxAttempts < 0 || isNaN(attemptsSoFar) || isNaN(maxAttempts)) {
    throw new Error(`Invalid arguments`);
  }

  if (attemptsSoFar >= maxAttempts) {
    throw new Error(`Sorry, Number of attempts expired`);
  }
  return attemptsSoFar + 1;
}

function convertStringToNumber(str) {
  return parseInt(str);
}

function performRangeValidation(val, min, max) {

  if (!val || !min || !max) {
    throw new Error(`Function expects 3 input arguments`);
  }

  if (isNaN(min)) {
    throw new Error(`Invalid min value: ${min}`);
  }

  if (isNaN(max)) {
    throw new Error(`Invalid max value: ${max}`);
  }

  if (
    parseInt(val) > parseInt(min) &&
    parseInt(val) < parseInt(max)
  ) {
    return parseInt(val);
  } else {
    throw new Error(
      `Invalid input ${val}: Please enter value between ${min} and ${max}`
    );
  }
}

function setMessage(selector, { text, styleClass }) {
  document.querySelector(selector).textContent = text;
  document.querySelector(selector).className = styleClass;
}

module.exports = { performRangeValidation, incrementNumberOfAttempts };

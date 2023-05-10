/*
import React, { useState, useEffect } from "react";
import Axios from "axios";
*/

function Wordgametimer() {
  /*
  Serveside data fetching code which i did not get working.

  const [words, setWords] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setWords(response.data);
    });
  }, []);
*/


  //PICK RANDOM STRING FROM THE ARRAY
  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
  
    const item = arr[randomIndex];
  
    return item;
  }
  
    //SHUFFLE FUNCTION TO SHUFFLE THE ARRAY
  
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
  
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  /*
  Serveside data fetching code which i did not get working.

let result = "";
if (words.length === 0) {
  return (
    <>{console.log("loading")}</>
  );
}
else {
  const wordlist = [];

  words.map((val) => {
    wordlist.push(val.word);
  });
  result = getRandomItem(wordlist);
}
*/

  //WORDGAME
  const words = [
    "banana",
    "strawberry",
    "headphones",
    "wallet",
    "computer",
    "keyboard",
    "mouse",
    "customizable"
  ];
  const result = getRandomItem(words);
  let slicedword = result.match(/.{1,2}/g);
  let text = 1;
  let fail = 1;
  
  // ADD LETTER BOXES TO THE MAIN CONTENT OF THE PAGE
  function wordgame() {
    shuffle(slicedword);
    for (let i = 0; i < slicedword.length; i++) {
      let text3 = "button" + text;
      var iDiv = document.createElement("button");
      iDiv.id = text3;
      iDiv.className = "button";
      iDiv.innerText = slicedword[i];
      iDiv.dataset.letter = slicedword[i];
      document.getElementById("button-box").appendChild(iDiv);
      text++;
    }
    text = 1;
    // CHECK IF BUTTONS ARE CLICKED AND STORE THE CLICKED BUTTONS VALUE TO THE ARRAY
    // PRINT THE CLICKED BUTTON TO THE SCREEN
    let buttons = document.querySelectorAll(".button");
    const combinedwords = [];
    buttons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        let value = e.target.dataset.letter;
        screen.value += value;
        combinedwords.push(value);
        if (combinedwords.length === slicedword.length) {
          execute();
        }
        button.remove();
      });
    });
    // CHECK IF THE WORD USER INPUTED MATCHES THE ORIGINAL WORD
    function execute() {
      const userword = combinedwords.join("");
      if (userword === result) {
        score = seconds + ":" + tens;
        document.getElementById("score").innerHTML = "Time: " + score;
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        clearInterval(Interval);
        document.getElementById("error").innerHTML = "";
        document.getElementById("correct").innerHTML = "YOU WON!";
        document.getElementById("guesses").innerHTML = "Attempts: " + fail;
        fail = "";
        document.getElementById("leaderboard").style.display = "inline";
        let props = {
          userword,
          score
          }
        Information(props);
      } else {
        wordgame();
        screen.value = "";
        document.getElementById("guesses").innerHTML = "";
        document.getElementById("score").innerHTML = "";
        document.getElementById("correct").innerHTML = "";
        document.getElementById("error").innerHTML = "TRY AGAIN!";
        fail++;
      }
    }
  }
//TIMER
let score = "";
var seconds = 0o00;
var tens = 0o00;
let screen = document.getElementById("screen");
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var Interval;
buttonStart.addEventListener("click", check);
function check() {
  const boxes = document.querySelectorAll(".button");
  boxes.forEach((button) => {
    button.remove();
  });
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  screen.value = "";
  document.getElementById("score").innerHTML = "";
  document.getElementById("guesses").innerHTML = "";
  document.getElementById("correct").innerHTML = "";
  document.getElementById("error").innerHTML = "";
  document.getElementById("leaderboard").style.display = "none";

}

buttonStop.addEventListener("click", check2);
function check2() {
  const boxes = document.querySelectorAll(".button");
  boxes.forEach((button) => {
    button.remove();
  });
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  clearInterval(Interval);
  screen.value = "";
  document.getElementById("score").innerHTML = "";
  document.getElementById("guesses").innerHTML = "";
  document.getElementById("correct").innerHTML = "";
  document.getElementById("error").innerHTML = "";
  document.getElementById("leaderboard").style.display = "none";
}

buttonReset.addEventListener("click", check3);
function check3() {
  var resultwin = document.getElementById("correct").innerHTML;
  if (resultwin !== "YOU WON!") {
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    screen.value = "";
    fail = 1;
    document.getElementById("guesses").innerHTML = "";
    document.getElementById("correct").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("score").innerHTML = "";
    const boxes = document.querySelectorAll(".button");
    boxes.forEach((button) => {
      button.remove();
    });
    wordgame();
  }
}

clearInterval(Interval);
Interval = setInterval(startTimer, 10);
wordgame();
function startTimer() {
  tens++;

  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}
}
export function Information(props) {
  const wordandscore = props;
  console.log(wordandscore);
    return (
      <>
      <p>{wordandscore}</p>
      </>
    );
}

export default Wordgametimer;


function wordgametimer (){

  //SHUFFLE FUNCTION TO SHUFFLE THE ARRAY

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
  
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  //PICK RANDOM STRING FROM THE ARRAY

  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    
      const item = arr[randomIndex];
    
      return item;
    }

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
        shuffle(slicedword);

      // ADD LETTER BOXES TO THE MAIN CONTENT OF THE PAGE
      function wordgame() {
        for (let i = 0; i < slicedword.length; i++) {
          let text3 = "button" + text;
          var iDiv = document.createElement('button');
              iDiv.id = text3;
              iDiv.className = 'button';
              iDiv.innerText = slicedword[i];
              iDiv.dataset.letter = slicedword[i];
              document.getElementById('button-box').appendChild(iDiv);
          text++;
      }

      // CHECK IF BUTTONS ARE CLICKED AND STORE THE CLICKED BUTTONS VALUE TO THE ARRAY
      // PRINT THE CLICKED BUTTON TO THE SCREEN
      let buttons = document.querySelectorAll('.button');
      const combinedwords = [];
       buttons.forEach(function(button) {
          button.addEventListener('click', function(e) {
              let value = e.target.dataset.letter;
              screen.value += value;
              combinedwords.push(value);
              if (combinedwords.length === slicedword.length) {
                execute();
              }
              button.remove();    
            })
      });


    // CHECK IF THE WORD USER INPUTED MATCHES THE ORIGINAL WORD
        function execute() {
          const userword = combinedwords.join('')
          console.log(userword);
          console.log(result);
          if (userword === result) {
            tens = "00";
            seconds = "00";
            appendTens.innerHTML = tens;
            appendSeconds.innerHTML = seconds;
            clearInterval(Interval);
            document.getElementById("error").innerHTML = "";
            document.getElementById("correct").innerHTML = "YOU WON!";
          }
          else {
            wordgame();
            shuffle(slicedword);
            screen.value = "";
            document.getElementById("correct").innerHTML = "";
            document.getElementById("error").innerHTML = "TRY AGAIN!";
          }
        };
      }
  //TIMER 
  var seconds = 0o00;
  var tens = 0o00;
  let screen = document.getElementById('screen');
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  /*
  var buttonReset = document.getElementById('button-reset');
  */
  var Interval ;
  buttonStart.addEventListener("click", check);
  function check () {
        const boxes = document.querySelectorAll('.button');
        boxes.forEach(button => {
          button.remove();
        });
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        screen.value = "";
        document.getElementById("correct").innerHTML = "";
        document.getElementById("error").innerHTML = "";
        shuffle(slicedword);
      }

    buttonStop.addEventListener("click", check2);
    function check2 () {
    const boxes = document.querySelectorAll('.button');
    boxes.forEach(button => {
      button.remove();
    });
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    clearInterval(Interval);
    screen.value = "";
    document.getElementById("correct").innerHTML = "";
    document.getElementById("error").innerHTML = "";
  }
  /*

  buttonReset.addEventListener("click", check3);
  function check3 () {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  screen.value = "";
    document.getElementById("correct").innerHTML = "";
    document.getElementById("error").innerHTML = "";
  }
  */

  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
  wordgame();
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
};

export default wordgametimer;

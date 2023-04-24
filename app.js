let answer = Math.floor(Math.random() * 10 + 1);

let body = document.querySelector("body");
let guesses = 0;
let scorePoint = 20;
let againButton = document.getElementById("againButton");
document.getElementById("submitButton").onclick = function(){
     let guess = document.getElementById("guessField").value;
     guesses+= 1;
     let highScore = document.getElementById("high-score");
     let message = document.querySelector("label");
     let guessesNum = document.getElementById("guessesNum");
     let point = document.getElementById("point");
     if(guess == answer){
          message.innerText = `  Correct Number!          `;
          body.style.backgroundColor = "rgb(96, 179, 71)";
          guessesNum.innerText = `${guess}`;
          point.innerText = `${scorePoint}`;
          highScore.innerText = `${scorePoint}`;
          document.getElementById("againButton").addEventListener('click', () => {
               document.getElementById("guessField").value = '';
               answer = Math.floor(Math.random() * 10 + 1);
          });

     }else if(guess < answer){
          message.innerText = "To Small";
          point.innerText = `${scorePoint}`;
          scorePoint--;
     }else{
          message.innerText = "To Large";
          point.innerText = `${scorePoint}`;
          scorePoint--;
     }
     if(scorePoint < 1 ){
          message.innerText = 'You lost the game!'; 
          point.innerText = `0`;
          body.style.backgroundColor = "";
          guessesNum.textContent = "?";
     }

     if(!guess){
          message.innerText = "No Number!";
          point.innerText = ``;
     }
     againButton.addEventListener("click", () => {
          scorePoint = 20;
          guessesNum.textContent = "?";
          message.innerText = "Start guessing..."
          body.style.backgroundColor = "";
          point.innerText = '';
     });
   
}

     
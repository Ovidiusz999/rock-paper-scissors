//variables

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scrissor = document.getElementById("scrissor");
let result = document.getElementById("result");
let userP = document.getElementById("user");
let computerP = document.getElementById("computer");
let user = '';
let computer = '';

// function

function game (){

   // random choiche

   let x = Math.floor(Math.random()*3);

   if (x >= 0 && x < 1){
      computer = "rock"
   } else if (x >= 1 && x < 2){
      computer = "paper"
   } else if (x >= 2 && x < 3){
      computer = "scrissor"
   }

   // computer chouche show

   if (computer === "rock"){
      computerP.innerHTML = "The Computer chosed rock"
   } else if (computer === "paper"){
      computerP.innerHTML = "The Computer chosed paper"
   } else {
      computerP.innerHTML = "The Computer chosed scrissor"
   }

   // game logic

   if (user === 'rock' && computer === 'paper') {
      result.innerHTML = "You have lost -_-";
   } else if (user === 'rock' && computer === 'scrissor') {
      result.innerHTML = "You have won >_<";
   } else if (user === 'rock' && computer === 'rock') {
      result.innerHTML = "Its a draw O_O";


   } else if (user === 'paper' && computer === 'rock') {
      result.innerHTML = "You have won >_<";
   } else if (user === 'paper' && computer === 'paper') {
   result.innerHTML = "Its a draw O_O";
   } else if (user === 'paper' && computer === 'scrissor') {
      result.innerHTML = "You have lost -_-";


   } else if (user === 'scrissor' && computer === 'rock') {
      result.innerHTML = "You have lost -_-";
   } else if (user === 'scrissor' && computer === 'paper') {
      result.innerHTML = "You have won >_<";
   } else if (user === 'scrissor' && computer === 'scrissor') {
      result.innerHTML = "Its a draw O_O";
   }
}

// onclick events

rock.addEventListener("click", function() {
   user = "rock";
   userP.innerHTML = "You have chosed rock"
   game()
});

paper.addEventListener("click", function() {
   user = "paper";
   userP.innerHTML = "You have chosed paper"
   game()
});

scrissor.addEventListener("click", function() {
   user = "scrissor";
   userP.innerHTML = "You have chosed scrissor"
   game()
});

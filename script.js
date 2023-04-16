"use strict";
//Selecting Elements

const PlayerEl1 = document.querySelector(".player--0");
const PlayerEl12 = document.querySelector(".player--1");
const NweGamebtn = document.querySelector(".btn--new");

const scoreEl0 = document.getElementById("score--0");
const scoreEl1 = document.getElementById("score--1");
const CurrentScoreEl0 = document.getElementById("current--0");
const CurrentScoreEl1 = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRol = document.querySelector(".btn--roll");
const btnhld = document.querySelector(".btn--hold");

//Initaling the values
let scores, CurentScore, ActiveUSer, playable;
//Restarting func
const init1 = function () {
  scores = [1, 0];
  CurentScore = 0;
  ActiveUSer = 0;
  playable = true;

  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  CurrentScoreEl0.textContent = 0;
  CurrentScoreEl1.textContent = 0;

  diceEl.classList.add("hidden");
  PlayerEl1.classList.remove("player--winner");
  PlayerEl12.classList.remove("player--winner");
  PlayerEl1.classList.add("player--active");
  PlayerEl12.classList.remove("player--active");
};
init1();
//Switich player function
const SwitchPlayer = function () {
  document.getElementById(`current--${ActiveUSer}`).textContent = 0;

  CurentScore = 0;
  ActiveUSer = ActiveUSer === 0 ? 1 : 0;
  PlayerEl1.classList.toggle("player--active");
  PlayerEl12.classList.toggle("player--active");
};

//Dice Functions

btnRol.addEventListener("click", function () {
  if (playable) {
    //creating random numbers
    const DiceNumber = Math.trunc(Math.random() * 6) + 1;
    //Displaying the Dice Number
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${DiceNumber}.png`;

    //if diceNmber is not equals one
    if (DiceNumber !== 1) {
      CurentScore += DiceNumber;
      document.getElementById(`current--${ActiveUSer}`).textContent =
        CurentScore;
    }
    //if it is one the Switch to the nxt user
    else {
      SwitchPlayer();
    }
  }
});
//Adding event to hold btn
btnhld.addEventListener("click", function () {
  if (playable) {
    //asing the scores
    scores[ActiveUSer] += CurentScore;
    document.getElementById(`score--${ActiveUSer}`).textContent =
      scores[ActiveUSer];

    //checking if their score is more than 100
    if (scores[ActiveUSer] >= 30) {
      playable = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${ActiveUSer}`)
        .classList.add("player--winner");
      PlayerEl12.classList.remove("player--active");
    }
    //Switch the player
    else {
      SwitchPlayer();
    }
  }
});

NweGamebtn.addEventListener("click", init1);
// playable = true;
//   scores[ActiveUSer] = 0;
//   CurentScore = 0;
//   document.getElementById(`current--${ActiveUSer}`).textContent = CurentScore;
//   document.getElementById(`score--${ActiveUSer}`).textContent =
//     scores[ActiveUSer];
//   document
//     .querySelector(`.player--${ActiveUSer}`)
//     .classList.remove("player--winner");
//   PlayerEl12.classList.add("player--active");

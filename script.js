// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "correct Number 🎉🎉🎉";
// console.log(
//   (document.querySelector(".message").textContent = "correct Number 🎉🎉🎉")
// );
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 14;
// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;
const sceretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("Guess the number....");
  } else if (guess === sceretNumber) {
    document.querySelector(".number").textContent = sceretNumber;
    displayMessage(" 👏👏Congrulation!! You guess a correct number!!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== sceretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =guess > sceretNumber ? "☝️☝️ TOO HIGH!!!!":" 👇👇TOO LOW!!!!";
      displayMessage(
        guess > sceretNumber ? "☝️☝️ TOO HIGH!!!!" : " 👇👇TOO LOW!!!!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(" 🙇 🙇 🙇Sorry You lose the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  let score = 20;
  const sceretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing....");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

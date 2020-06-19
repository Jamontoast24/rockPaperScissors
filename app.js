var score = 0;
var computerScore = 0;
var finalScore = 5;



function playerPlaysRock(){
var playRock = document.getElementById("playRock").addEventListener("click", function() {
  var random = Math.floor(Math.random() * 3) + 1;
  if (score === finalScore || computerScore === finalScore) {
    return;
  }
  if (random === 1) {
    computer = "rock";
  } else if (random === 2) {
    computer = "paper";
  } else if (random === 3) {
    computer = "scissors";
  }
  document.getElementById("displayUserChoice").innerHTML = "You picked rock!";
  if (computer === "rock") {
    document.getElementById("displayCpuChoice").innerHTML = "It's a draw!";
  } else if (computer === "paper") {
    document.getElementById("displayCpuChoice").innerHTML = "Computer picked paper! You lose!";
    computerScore +=1;
    document.getElementById("displayCpuScore").innerHTML = "Computer score: " + computerScore;
  } else if (computer === "scissors") {
    document.getElementById("displayCpuChoice").innerHTML = "Computer played scissors! You win!";
    score +=1;
    document.getElementById("displayPlayerScore").innerHTML = "Your score: " + score;
  }
});
};

playerPlaysRock();

function playerPlaysPaper(){
  var playPaper = document.getElementById("playPaper").addEventListener("click", function() {
    var random = Math.floor(Math.random() * 3) + 1;
    if (score === finalScore || computerScore === finalScore) {
      return;
    }
    if (random === 1) {
      computer = "rock";
    } else if (random === 2) {
      computer = "paper";
    } else if (random === 3) {
      computer = "scissors";
    }
    document.getElementById("displayUserChoice").innerHTML = "You picked paper!";
    if (computer === "rock") {
      document.getElementById("displayCpuChoice").innerHTML = "Computer picked rock! You win!";
      score += 1;
      document.getElementById("displayPlayerScore").innerHTML = "Your score: " + score;
    } else if (computer === "paper") {
      document.getElementById("displayCpuChoice").innerHTML = "It's a draw !";
    } else if (computer === "scissors") {
      document.getElementById("displayCpuChoice").innerHTML = "Computer played scissors! You lose!";
      computerScore +=1;
      document.getElementById("displayCpuScore").innerHTML = "Computer score: " + computerScore;
    }
  });
};

playerPlaysPaper();

function playerPlaysScissors(){
  var playPaper = document.getElementById("playScissors").addEventListener("click", function() {
    var random = Math.floor(Math.random() * 3) + 1;
    if (score === finalScore || computerScore === finalScore) {
      return;
    }
    if (random === 1) {
      computer = "rock";
    } else if (random === 2) {
      computer = "paper";
    } else if (random === 3) {
      computer = "scissors";
    }
    document.getElementById("displayUserChoice").innerHTML = "You picked scissors!";
    if (computer === "rock") {
      document.getElementById("displayCpuChoice").innerHTML = "Computer picked rock! You lose!";
      computerScore += 1;
      document.getElementById("displayCpuScore").innerHTML = "Computer score: " + computerScore;
    } else if (computer === "paper") {
      document.getElementById("displayCpuChoice").innerHTML = "Computer picked paper! You win !";
      score +=1;
      document.getElementById("displayPlayerScore").innerHTML = "Your score: " + score;
    } else if (computer === "scissors") {
      document.getElementById("displayCpuChoice").innerHTML = "It's a draw!";
    }
  });
};

playerPlaysScissors();

function resetScore() {
  var resetScore = document.getElementById("resetScore").addEventListener("click", function() {
    document.getElementById("displayUserChoice").innerHTML = "";
    document.getElementById("displayCpuChoice").innerHTML = "";
    score = 0;
    document.getElementById("displayPlayerScore").innerHTML = "Your score: " + score;
    computerScore = 0;
    document.getElementById("displayCpuScore").innerHTML = "Computer score: " + score;
  })
};
resetScore();

// function displayWinner() {
//   finalScore = 5;
//   computerScore = 0;
//   if (score === finalScore) {
//     document.getElementById("cpuWins").innerHTML = "Computer wins";
//   }
// };
// displayWinner();

if (score === 5) {
  document.getElementById("cpuWins").innerHTML = "computer wins"
}
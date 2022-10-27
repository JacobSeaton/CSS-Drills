let cells = document.querySelectorAll(".square");
let currentPlayer = "X";
let gameOver = false;
let currentTurn = 1;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function cellClicked(event) {
  if (gameOver === true) {
    resetGame();
    return;
  }
  if (event.target.textContent !== "") {
    return;
  }
  event.target.textContent = currentPlayer;
  checkGame();
  togglePlayer();
  ++currentTurn;
}

function checkGame() {
  if (
    checkTop() ||
    checkMiddle() ||
    checkBottom() ||
    checkLeft() ||
    checkCenter() ||
    checkRight() ||
    checkLeftDiagonal() ||
    checkRightDiagonal()
  ) {
    results.textContent = currentPlayer + " Wins!";
    gameOver = true;
  } else if (currentTurn == 9) {
    results.textContent = "Draw!";
    gameOver = true;
  } else {
    gameOver = false;
  }
}

function checkTop() {
  if (
    cells[0].textContent === cells[1].textContent &&
    cells[1].textContent === cells[2].textContent &&
    !isEmpty(0, 1, 2)
  ) {
    return true;
  } else {
    return false;
  }
}

function checkMiddle() {
  if (
    cells[3].textContent === cells[4].textContent &&
    cells[4].textContent === cells[5].textContent &&
    !isEmpty(3, 4, 5)
  ) {
    return true;
  } else {
    return false;
  }
}

function checkBottom() {
  if (
    cells[6].textContent === cells[7].textContent &&
    cells[7].textContent === cells[8].textContent &&
    !isEmpty(6, 7, 8)
  ) {
    return true;
  } else {
    return false;
  }
}

function checkLeft() {
  if (
    cells[0].textContent === cells[3].textContent &&
    cells[3].textContent === cells[6].textContent &&
    !isEmpty(0, 3, 6)
  ) {
    return true;
  } else {
    return false;
  }
}

function checkCenter() {
  if (
    cells[1].textContent === cells[4].textContent &&
    cells[4].textContent === cells[7].textContent &&
    !isEmpty(1, 4, 7)
  ) {
    return true;
  } else {
    return false;
  }
}

function checkRight() {
  if (
    cells[2].textContent === cells[5].textContent &&
    cells[5].textContent === cells[8].textContent &&
    !isEmpty(2, 5, 8)
  ) {
    return true;
  } else {
    return false;
  }
}

function checkLeftDiagonal() {
  if (
    cells[0].textContent === cells[4].textContent &&
    cells[4].textContent === cells[8].textContent &&
    !isEmpty(0, 4, 8)
  ) {
    return true;
  } else {
    return false;
  }
}

function checkRightDiagonal() {
  if (
    cells[2].textContent === cells[4].textContent &&
    cells[4].textContent === cells[6].textContent &&
    !isEmpty(2, 4, 6)
  ) {
    return true;
  } else {
    return false;
  }
}

function isEmpty(a, b, c) {
  if (
    cells[a].textContent === "" ||
    cells[b].textContent === "" ||
    cells[c].textContent === ""
  ) {
    return true;
  } else {
    return false;
  }
}

function togglePlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function resetGame() {
  document.getElementById("results").textContent = "";
  cells.forEach(function (cells) {
    cells.textContent = "";
  });
  gameOver = false;
  currentTurn = 1;
}

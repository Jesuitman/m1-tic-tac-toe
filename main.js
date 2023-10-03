var frogEomji = "🐸"
var crabEmoji = "🦀"

var currentPlayer = frogEomji
var gameBoard = ["","","","","","","","",""]
var gameActive = true

var buttons = document.querySelectorAll('.cell')

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      clickButton(index);
    });
});

function checkWin() {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
  
    return winPatterns.some(pattern => {
      const [a, b, c] = pattern;
      return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
    });
  }

function clickButton(buttonIndex) {
    if (!gameActive || !playerNamesFilled() || gameBoard[buttonIndex] === !"") {
        return
    }
    gameBoard[buttonIndex] = currentPlayer
    var button = document.getElementById(`button${buttonIndex + 1}`)
    button.textContent = currentPlayer

    if (checkWin()) {
        announceResult(`${currentPlayer} wins!`)
        updatePlayerWins(currentPlayer)
        gameActive = false
        autoResetGame()
    } else if (gameBoard.includes("")) {
        currentPlayer = currentPlayer === frogEomji ? crabEmoji : frogEomji
        updatePlayerTurn()
    } else {
        announceResult("Draw!!!!")
        gameActive = false
        autoResetGame()
    }
}

function resetGame() {
    currentPlayer = currentPlayer === frogEomji ? crabEmoji : frogEomji;
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
  
    document.querySelectorAll(".cell").forEach(button => button.textContent = "");
    
    updatePlayerTurn();
    announceResult("");
}

function autoResetGame() {
    setTimeout(resetGame, 2000);
  }

function playerNamesFilled() {
    const player1Name = document.getElementById('player1').value;
    const player2Name = document.getElementById('player2').value;
  
    return !!player1Name && !!player2Name;
}
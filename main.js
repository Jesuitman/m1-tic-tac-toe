var frogEomji = "🐸"
var crabEmoji = "🦀"

var currentPlayer = frogEomji
var gameBoard = ["","","","","","","","",""]
var gameActive = true

function clickButton(buttonIndex) {
    if (!gameActive || !playerNamesFilled() || gameBoard[buttonIndex] === !"") {
        return;
    }
        gameBoard[buttonIndex] = currentPlayer
        document.getElementById(`button${buttonIndex + 1}`).textContent = currentPlayer

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


function checkWin() {
    var winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for (var i = 0; i < winPatterns.length; i++) {
        var pattern = winPatterns[i];
        var a = pattern[0];
        var b = pattern[1];
        var c = pattern[2];
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

function announceResult(result) {
    document.getElementById("current-player-name").textContent = result
}

function updatePlayerTurn() {
    document.getElementById("current-player-name").textContent = `Current Player Turn is: ${currentPlayer} `
}

function updatePlayerWins(player) {
    if (player === frogEomji) {
        var player1Wins = parseInt(document.getElementById('player1-wins').textContent) + 1
        document.getElementById('player1-wins').textContent = player1Wins
    } else if (player === crabEmoji) {
        var player2Wins = parseInt(document.getElementById("player2-wins").textContent) + 1
        document.getElementById("player2-wins").textContent = player2Wins
    }
}

const buttons = document.querySelectorAll('.cell');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (function(index) {
        return function() {
            clickButton(index);
        };
    })(i));
}
function resetGame() {
    currentPlayer = frogEomji
    gameBoard = ["","","","","","","","",""]
    gameActive = true

    var buttons = document.querySelectorAll(".cell")
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].textContent = ""
    }
    updatePlayerTurn()
    announceResult("")
}

function autoResetGame() {
    setTimeout(function() {
        resetGame();
    }, 5000); // 5000 milliseconds = 5 seconds
}

document.getElementById('start-button').addEventListener('click', (event) => {
    event.preventDefault();

    if (playerNamesFilled()) {

        var player1Name = document.getElementById('player1').value;
        var player2Name = document.getElementById('player2').value;

        document.getElementById("player1-name").textContent = player1Name
        document.getElementById("player2-name").textContent = player2Name
        // Show player information and hide the setup form
        document.getElementById('player-info').classList.remove('hidden');
        document.getElementById('front-page').classList.add('hidden');
        document.getElementById('game-board').classList.remove('hidden');
        resetGame();
    } else {
        alert('Please enter names for both players.');
    }
});

function playerNamesFilled(){
    var player1Name = document.getElementById('player1').value;
    var player2Name = document.getElementById('player2').value;

    if (!player1Name || !player2Name){
        return false
    }
    return true
}

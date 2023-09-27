var frogEomji = "🐸"
var crabEmoji = "🦀"

var currentPlayer = frogEomji
var gameBoard = ["","","","","","","","",""]
var gameActive = true

var buttons = document.querySelectorAll('.cell')

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (function(index) {
        return function() {
            clickButton(index)
        }
    })(i))
}

function checkWin() {
    var winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for (var i = 0; i < winPatterns.length; i++) {
        var pattern = winPatterns[i]
        var a = pattern[0]
        var b = pattern[1]
        var c = pattern[2]
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
            return true
        }
    }
    return false
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
        document.querySelector("head").classList.add('draw-state')
        document.querySelector("body").classList.add('draw-state')
    }
}

function resetGame() {
    if (currentPlayer === frogEomji){
    currentPlayer = crabEmoji
    } else {
        currentPlayer = frogEomji
    }
    gameBoard = ["","","","","","","","",""]
    gameActive = true
    
    var buttons = document.querySelectorAll(".cell")
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].textContent = ""
    }
    updatePlayerTurn()
    announceResult("")
    document.querySelector("head").classList.remove('draw-state')
    document.querySelector("body").classList.remove('draw-state')
}

function autoResetGame() {
    setTimeout(function() {
        resetGame()
    }, 2000)
}

function playerNamesFilled(){
    var player1Name = document.getElementById('player1').value
    var player2Name = document.getElementById('player2').value

    if (!player1Name || !player2Name){
        return false
    }
    return true
}
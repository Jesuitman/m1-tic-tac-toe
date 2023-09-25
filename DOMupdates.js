
function announceResult(result) {
    document.getElementById("current-player-name").textContent = result
}

function updatePlayerTurn() {
    document.getElementById("current-player-name").textContent = `Current Player Turn is: ${currentPlayer} `
}

updatePlayerTurn()

var updatePlayerWins = (player) => {
    var winsElement = document.getElementById(player === frogEomji ? 'player1-wins' : 'player2-wins');
    var playerWins = parseInt(winsElement.textContent) + 1;
    winsElement.textContent = playerWins;
}

document.getElementById('start-button').addEventListener('click', (event) => {
    event.preventDefault();

    if (playerNamesFilled()) {

        var player1Name = document.getElementById('player1').value;
        var player2Name = document.getElementById('player2').value;

        document.getElementById("player1-name").textContent = player1Name
        document.getElementById("player2-name").textContent = player2Name

        resetGame();
    } else {
        alert('Please enter names for both players.');
    }
})
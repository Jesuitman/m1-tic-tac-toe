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

var nightmareModeActive = false
var chaosModeActive = false

var systemFonts = ['American Typewriter','Andale Mono','Arial','Arial Black','Arial Narrow','Arial Rounded MT Bold','Arial Unicode MS',
'Avenir','Avenir Next','Avenir Next Condensed','Baskerville','Big Caslon','Bodoni 72','Bodoni 72 Oldstyle','Bodoni 72 Smallcaps',
'Bradley Hand','Brush Script MT','Chalkboard','Chalkboard SE','Chalkduster','Charter','Cochin','Comic Sans MS','Copperplate','Courier',
'Courier New','Didot','DIN Alternate','DIN Condensed','Futura','Geneva','Georgia','Gill Sans','Helvetica','Helvetica Neue','Herculanum',
'Hoefler Text','Impact','Lucida Grande','Luminari','Marker Felt','Menlo','Microsoft Sans Serif','Monaco','Noteworthy','Optima','Palatino',
'Papyrus','Phosphate','Rockwell','Savoye LET','SignPainter','Skia','Snell Roundhand','Tahoma','Times','Times New Roman','Trattatello','Trebuchet MS',
'Verdana','Zapfino',]

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
    currentPlayer = frogEomji
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
    }, 5000)
}

function playerNamesFilled(){
    var player1Name = document.getElementById('player1').value
    var player2Name = document.getElementById('player2').value

    if (!player1Name || !player2Name){
        return false
    }
    return true
}

function randomizeFont() {
    document.body.style.fontFamily = "serif"
    var fontIndex = Math.floor(Math.random() * systemFonts.length);
    var randomFont = systemFonts[fontIndex];

    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)

    document.body.style.fontFamily = randomFont;
    document.head.style.fontFamily = randomFont
    document.body.style.color = randomColor
    document.head.style.color = randomColor
}

document.getElementById("nightmare-button").addEventListener("click",function(){
    if(!nightmareModeActive){
        intervalId = setInterval(randomizeFont, 50)
        nightmareModeActive = true
        document.getElementById("nightmare-button").textContent = "Stop Nightmare Mode"
    } else {
        clearInterval(intervalId)
        nightmareModeActive = false
        document.getElementById("nightmare-button").textContent = "Nightmare Mode"
    }
})

function randomizeElementSizes() {
    var elements = document.querySelectorAll('*'); 

    for (var i=0;i<elements.length;i++){
        var element = elements[i]
        var randomSize = Math.floor(Math.random() * 91) + 10;

        element.style.width = randomSize + 'px';
        element.style.height = randomSize + 'px';
    }
}

document.getElementById("chaos-button").addEventListener("click",function(){
    if (!chaosModeActive){
        intervalId = setInterval(randomizeElementSizes,50)
        chaosModeActive = true
        document.getElementById("chaos-button").textContent = "Disable Chaos Mode"
    } else {
        clearInterval(intervalId)
        chaosModeActive = false
        document.getElementById("chaos-button").textContent = "Chaos Mode"
    }
})
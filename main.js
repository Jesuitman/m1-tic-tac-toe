var startButton = document.querySelector("#start-button");

function hideElement(elementId){
    document.querySelector(elementId).classList.add("hidden")
}
function showElement(elementId){
    document.querySelector(elementId).classList.remove("hidden")
}

startButton.addEventListener("click", function(event) {
    var player1Name = document.querySelector("#player1").value 
    var player2Name = document.querySelector("#player2").value 
    event.preventDefault()

    if (player1Name === "" || player2Name === "") {
        alert("Both player names are required!");
    } else {
        hideElement("#front-page");
        showElement("#game-board");
    }
});

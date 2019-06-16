// array that holds the moves that the user entered
var userInput = [];
// array that holds the sequence of correct moves
var sequence = [];

var boxes = [document.getElementById("boxOne"), document.getElementById("boxTwo"), document.getElementById("boxThree"), document.getElementById("boxFour")];
console.log(boxes);
//var endGame = false;
function returnRandomNum() {
    return Math.floor(Math.random() * 4);
}

function gameStart() {
    endGame = false;
    while (!endGame) {
        var gameCounter = 0;
        // populating the correct sequence
        for (var i = 0; i < 40; i++) {
            sequence.push(returnRandomNum());
        }
        console.log(sequence);
        // displaying the sequence based on the counter
        for (var i = 0; i <= gameCounter; i++) {
            var toBeChanged = boxes[sequence[gameCounter]];
            toBeChanged.style.opacity = 0.4;
            console.log(toBeChanged);
            setTimeout(function() {
            toBeChanged.style.opacity = 1;
            }, 300)
        }
        // listen for the correct sequence (6/16/2019)
        for (var i = 0; i < gameCounter + 1; i++) {
            document.getElementById("boxOne").addEventListener("click", function(e){
                userInput.push(0);
            });
            document.getElementById("boxTwo").addEventListener("click", function(e){
                userInput.push(1)
            });
            document.getElementById("boxThree").addEventListener("click", function(e){
                userInput.push(2);
            });
            document.getElementById("boxFour").addEventListener("click", function(e){
                userInput.push(3);
            });
        }
        console.log(userInput);
        // clear the sequence and end the game if user input isn't correct
        
        sequence = [];
        endGame = true;
    }
}

var controller = {
    handleBoxOne: function() {
        var el = document.getElementById("boxOne");
        gameStart();
    }
}
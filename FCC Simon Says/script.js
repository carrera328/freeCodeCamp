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
                console.log("box one has been clicked");
                console.log("shit " + sequence[gameCounter - 1]);
                if (sequence[gameCounter - 1] != 0) {
                    endGame = true;
                    console.log(endGame);
                    console.log("the game is ending");
                    return;
                }
                userInput.push(0);
                console.log("fighting!!!!");
                return;
                
            });
            document.getElementById("boxTwo").addEventListener("click", function(e){
                console.log("box two has been clicked");
                console.log("shit " + sequence[gameCounter - 1]);
                if (sequence[gameCounter - 1] != 1) {
                    endGame = true;
                    console.log("the game is ending");
                    return;
                }
                userInput.push(1);
                console.log("fighting!!!!");
                return;
            });
            document.getElementById("boxThree").addEventListener("click", function(e){
                console.log("box three has been clicked");
                console.log("shit " + sequence[gameCounter - 1]);
                if (sequence[gameCounter - 1] != 2) {
                    endGame = true;
                    console.log("the game is ending");
                    return;
                }
                userInput.push(2);
                console.log("fighting!!!!");
                return;
            });
            document.getElementById("boxFour").addEventListener("click", function(e){
                console.log("box four has been clicked");
                console.log("shit " + sequence[gameCounter - 1]);
                if (sequence[gameCounter] - 1 != 3) {
                    endGame = true;
                    console.log("the game is ending");
                    return;
                }
                userInput.push(3);
                console.log("fighting!!!!");
                return;
            });
        }
        console.log("madd dogg");
        console.log(userInput);
        // clear the sequence and end the game if user input isn't correct
        console.log("value of engame: " + endGame);
        gameCounter++;
        
        endGame = true;
    }
}

var controller = {
    handleBoxOne: function() {
        var el = document.getElementById("boxOne");
        gameStart();
    }
}
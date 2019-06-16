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
        for (var i = 0; i <= gameCounter; i++) {
            boxes[sequence[gameCounter]].style.opacity = 0.4;
            setTimeout(function() {

            console.log(boxes[sequence[gameCounter]]);
            }, 100)
            // setTimeout(function() {
            //     el.style.opacity = 1;
            // }, 100)

        }
        for (var i = 0; i < gameCounter + 1; i++) {
            // listen for the correct sequence
        }
        // listen for correct sequence
        sequence = [];
        endGame = true;
    }
}

var controller = {
    handleBoxOne: function() {
        var el = document.getElementById("boxOne");
        console.log(el);
        el.style.opacity = 0.4;
        setTimeout(function() {
            el.style.opacity = 1;
        }, 100)

        gameStart();
    }
}
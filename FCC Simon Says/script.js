// game board
var userInput = [];


var controller = {
    handleBoxOne: function() {
        var el = document.getElementById("boxOne");
        console.log(el);
        el.style.opacity = 0.4;
        setTimeout(function() {
            el.style.opacity = 1;
        }, 100)
    }
}
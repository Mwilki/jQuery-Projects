var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    var numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    var numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();  
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#232323";

});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    // initialize colors
    squares[i].style.background = colors[i];
    // click listeners
    squares[i].addEventListener("click", function(){
        // save clicked color
        var clickedColor = this.style.background;
        // compare clicked to picked
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            messageDisplay.textContent = "Try Again";
            this.style.background = "#232323";
        }
    });
}

function changeColors(color){
    // loop through all squares
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    // make an array
    // add num random colors ro array
    for (var i = 0; i < num; i++){
        // get random color and push into arr
        arr.push(randomColor());
    }
    // return the array
    return arr;
}

function randomColor(){
    // pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


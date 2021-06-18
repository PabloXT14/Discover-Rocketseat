// Getting and Creating all required elements and variables
let numSquares = 6;
let colors = [];
let pickedColor;

const squares = document.querySelectorAll(".square");
const colorDisplay = document.querySelector("#color-display");
const messageDisplay = document.querySelector(".message-result span");
const h1 = document.querySelector("h1");
const resetBtn = document.querySelector("#reset");
const modeBtns = document.querySelectorAll(".mode");
const easyBtn = document.querySelector(".mode");

init();

// Function that init the game
function init() {
    colorDisplay.textContent = pickedColor;
    setupSquares();
    setupMode();
    reset();
}

// If clicked in reset button
resetBtn.addEventListener("click", function() {
    reset();
});


// Function to set colors in squares
function setupSquares() {
    for(let i=0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function() {
            let clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetBtn.textContent = "Play Again";
                changeColors(pickedColor);
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

// Function that selected the mode game
function setupMode() {
    for (let i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function() {
            for (let i = 0; i < modeBtns.length; i++) {
                modeBtns[i].classList.remove("selected");
            }
            this.classList.add("selected");
            console.log(this.textContent)
            if(this.textContent == "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
        });
    }
}

// Function reset colors
function reset() {
    colors = genRandomColors(numSquares);
    pickedColor = chooseColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#2C8E99";
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(let i=0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

function changeColors(color) {
    for(let i=0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        h1.style.backgroundColor = color;
    }
}

function chooseColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function genRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(makeColor());
    }
    return arr
}

function makeColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
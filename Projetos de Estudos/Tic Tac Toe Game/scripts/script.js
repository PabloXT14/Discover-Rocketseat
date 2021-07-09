//Selecting all required elements
const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span"),
players = document.querySelector(".players");

window.onload = ()=> {//once window loaded

    //add onclick attribute in all avaliable section's span
    for(let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick", "clickedBox(this)");
    }

    selectXBtn.onclick = ()=> {
        
        selectBox.classList.add("hide");//hide the select box on playerX button clicked
        playBoard.classList.add("show");//show the playboard section on playerX button clicked
    }
    selectOBtn.onclick = ()=> {
        
        selectBox.classList.add("hide");//hide the select box on playerO button clicked
        playBoard.classList.add("show");//show the playboard section on playerO button clicked
        players.setAttribute("class", "players active player");//adding three class name in player element
    }

    
}

let playerXIcon = "fas fa-times";//class name of fontawesome cross icon
let playerOIcon = "far fa-circle";//class name of fontawesome circle icon


/* ========== User Click Function ========== */
function clickedBox(element) {
    if(players.classList.contains("player")) {
        //adding circle icon tag inside user clicked element
        element.innerHTML = `<i class="${playerOIcon}"></i>`
        players.classList.add("active")
    } else {
        //adding cross icon tag inside user clicked element
        element.innerHTML = `<i class="${playerXIcon}"></i>`
        players.classList.add("active")
    }

    element.style.pointerEvents = "none"//once user select any box then that box can't be selected again
}

/* ========== Bot click function ========== */
function bot() {
    
}
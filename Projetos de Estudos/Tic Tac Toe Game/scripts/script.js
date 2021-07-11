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
let playerSign = "x"; //suppose player will be x

/* ========== User Click Function ========== */
function clickedBox(element) {
    if(players.classList.contains("player")) {
        //adding circle icon tag inside user clicked element
        element.innerHTML = `<i class="${playerOIcon}"></i>`
        players.classList.add("active")

        //if player select O then we'll change the playerSign value to O
        playerSign = "O"
        element.setAttribute("id", playerSign)
    } else {
        //adding cross icon tag inside user clicked element
        element.innerHTML = `<i class="${playerXIcon}"></i>`
        players.classList.add("active")

        element.setAttribute("id", playerSign)
    }

    element.style.pointerEvents = "none"//once user select any box then that box can't be selected again
    let randmDelayTime = ((Math.random() * 1000) + 200).toFixed();//generating random time delay so bot will delay randomly to select box

    setTimeout(()=> {
        bot();// calling bot function 
    }, randmDelayTime);//passing random delay time
}

/* ========== Bot click function ========== */
function bot() {
    let array = [];//creating empty array...we'll store unselected box index in this array

    for(let i = 0; i < allBox.length; i++) {
        if(allBox[i].childElementCount == 0) {//if span has no any child element
            array.push(i);//inserting unclicked or unselected boxes inside array means that span has no children
            // console.log(`${i} has no children`);
        }
    }

    //getting random index from array so bot will select random unselected box
    let randomBox = array[Math.floor(Math.random() * array.length)]
    //console.log(randomBox)
    if(array.length > 0) {
        if(players.classList.contains("player")) {
            allBox[randomBox].innerHTML = `<i class="${playerXIcon}" ></i>`
            players.classList.remove("active");
        } else {
            allBox[randomBox].innerHTML = `<i class="${playerOIcon}" ></i>`
            players.classList.remove("active");
        }
    }
    //once bot select any box then user can't select or click on that box
    allBox[randomBox].style.pointerEvents = "none";

}
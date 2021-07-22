//Selecting all required elements
const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span"),
players = document.querySelector(".players"),
resultBox = document.querySelector(".result-box"),
wonText = resultBox.querySelector(".won-text"),
replayBtn = resultBox.querySelector("button");

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
let playerSign = "X"; //suppose player will be x
let runBot = true;

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

    selectWinner();//calling the winner function
    playBoard.style.pointerEvents = "none"//once user select then user can't select any other box untill box select

    element.style.pointerEvents = "none"//once user select any box then that box can't be selected again
    let randmDelayTime = ((Math.random() * 1000) + 200).toFixed();//generating random time delay so bot will delay randomly to select box

    setTimeout(()=> {
        bot(runBot);// calling bot function 
    }, randmDelayTime);//passing random delay time
}

/* ========== Bot click function ========== */
function bot(runBot) {
    if(runBot) {//if runBot is true then run the following codes
        //if change the playerSign..so if user has X value in id then bot will have O
        playerSign = "O";

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
                //if user is O then the box id value will be X
                playerSign = "X"
                allBox[randomBox].setAttribute("id", playerSign);
            } else {
                allBox[randomBox].innerHTML = `<i class="${playerOIcon}" ></i>`
                players.classList.remove("active");
                allBox[randomBox].setAttribute("id", playerSign);
            }
            selectWinner();//calling the winner function
        }
        //once bot select any box then user can't select or click on that box
        allBox[randomBox].style.pointerEvents = "none";
        playBoard.style.pointerEvents = "auto"
        playerSign = "X"; // passing the X value
    }
}

/* ========== Let work on select the winner ========== */
function getClass(idname) {
    return document.querySelector(".box" + idname).id;//return id name
}

function checkClasses(val1, val2, val3, sign) {
    if(getClass(val1) == sign && getClass(val2) == sign && getClass(val3) == sign) {
        return true
    }
}

function selectWinner() {
    //if one combination of them matched then select the winner
    if(checkClasses(1,2,3, playerSign) || 
       checkClasses(4,5,6, playerSign) ||
       checkClasses(7,8,9, playerSign) ||
       checkClasses(1,4,7, playerSign) ||
       checkClasses(2,5,8, playerSign) ||
       checkClasses(3,6,9, playerSign) ||
       checkClasses(1,5,9, playerSign) ||
       checkClasses(3,5,7, playerSign)) {

        console.log(`${playerSign} is the winner!`)
        //once match won by someone then stop the bot
        runBot = false;
        bot(runBot)

        //let show the result box with winner sign
        setTimeout(()=> {//we'll delay to show result box
            playBoard.classList.remove("show")
            resultBox.classList.add("show")
        }, 700)
        
        wonText.innerHTML = `Player <p>${playerSign}</p> won the game!`
    } else {
        // if match has drawn
        // first we'll check all id... if all span has id and no one won the game then we'll drawn the game
        if(getClass(1) != "" &&
           getClass(2) != "" &&
           getClass(3) != "" &&
           getClass(4) != "" &&
           getClass(5) != "" &&
           getClass(6) != "" &&
           getClass(7) != "" &&
           getClass(8) != "" &&
           getClass(9) != "") {

            runBot = false;
            bot(runBot)
            //let show the result box with winner sign
            setTimeout(()=> {//we'll delay to show result box
                playBoard.classList.remove("show")
                resultBox.classList.add("show")
            }, 700)
            wonText.textContent = `Match has been drawn!`
        }
    }
}

//Reload Game
replayBtn.onclick = ()=> {
    window.location.reload();//reload the current page
}
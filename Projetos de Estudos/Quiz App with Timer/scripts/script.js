// Getting all required elements
const start_btn = document.querySelector(".start_btn")
const info_box = document.querySelector(".info_box")
const exit_btn = info_box.querySelector(".buttons .quit")
const continue_btn = info_box.querySelector(".buttons .restart")
const quiz_box = document.querySelector(".quiz_box")
const timeCount = quiz_box.querySelector(".timer .timer_sec")
const timeLine = quiz_box.querySelector("header .time_line")
const timeOff = quiz_box.querySelector("header .time_text")

const option_list = document.querySelector(".option_list")


// If Start Quiz Button Clicked
start_btn.onclick = ()=> {
    info_box.classList.add("activeInfo") //show the info box
}

// If Exit Button Clicked
exit_btn.onclick = ()=> {
    info_box.classList.remove("activeInfo") // hide the info box
}

// If Continue Button Cliked
continue_btn.onclick = ()=> {
    info_box.classList.remove("activeInfo") // hide the info box
    quiz_box.classList.add("activeQuiz")    // show the quiz box
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

let que_count = 0
let que_numb = 1
let counter
let counterLine
let timeValue = 15
let widthValue = 0
let userScore = 0

const next_btn = quiz_box.querySelector(".next_btn")

// Result_box elements
const result_box = document.querySelector(".result_box")
const restart_quiz = result_box.querySelector(".buttons .restart")
const quit_quiz = result_box.querySelector(".buttons .quit")


// If Quit Button Clicked
quit_quiz.onclick = ()=> {
    window.location.reload()
}

// If Restart Button Clicked
restart_quiz.onclick = ()=> {
    quiz_box.classList.add("activeQuiz")
    result_box.classList.remove("activeResult")

    que_count = 0
    que_numb = 1
    timeValue = 15
    widthValue = 0
    userScore = 0

    showQuestions(que_count)
    queCounter(que_numb)

    clearInterval(counter)
    startTimer(timeValue)

    clearInterval(counterLine)
    startTimerLine(widthValue)

    next_btn.style.display = "none"
    timeOff.textContent = "Time Left"
}

// If Next Button Clicked
next_btn.onclick = ()=> {
    if(que_count < questions.length -1){
        que_count++;
        que_numb++;
        showQuestions(que_count)
        queCounter(que_numb)

        clearInterval(counter)
        startTimer(timeValue)

        clearInterval(counterLine)
        startTimerLine(widthValue)
        next_btn.style.display = "none" // desativating button after clicked
        timeOff.textContent = "Time Left"
    } else {
        clearInterval(counter)
        clearInterval(counterLine)
        console.log("Questions Completed")
        showResultBox();
    }

}

// Getting questions and options from array
function showQuestions(index) {
    const que_text = document.querySelector(".que_text")

    let que_tag = `<span>${questions[index].numb}. ${questions[index].question}</span>`
    let option_tag = `
    <div class="option">
        <span>${questions[index].options[0]}</span>
    </div>
    <div class="option">
        <span>${questions[index].options[1]}</span>
    </div>
    <div class="option">
        <span>${questions[index].options[2]}</span>
    </div>
    <div class="option">
        <span>${questions[index].options[3]}</span>
    </div>`

    que_text.innerHTML = que_tag
    option_list.innerHTML = option_tag

    // Check selected option
    const option = option_list.querySelectorAll(".option")
    for(let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
}

// Icons of correct and incorrect options
let tickIcon = `<div class="icon tick"><i class="fas fa-check"></i></div>` 
let crossIcon = `<div class="icon cross"><i class="fas fa-times"></i></div>`

// Function check selected option
function optionSelected(answer) {
    clearInterval(counter)// parando temporizador
    clearInterval(counterLine)// parando time line

    let userAns = answer.querySelector("span").textContent
    let correctAns = questions[que_count].answer
    let allOptions = option_list.children.length

    if(userAns == correctAns) {
        userScore += 1
        console.log(userScore)
        answer.classList.add("correct")
        console.log("Answer is correct")
        answer.insertAdjacentHTML("beforeend", tickIcon)
        // answer.innerHTML += tickIcon // outra forma de fazer
    } else {
        answer.classList.add("incorrect")
        console.log("Answer is wrong")
        answer.insertAdjacentHTML("beforeend", crossIcon)
        // if answers is incorrect then automatically selected the correct answer
        for(let i=0; i < allOptions; i++) {
            if(option_list.children[i].querySelector("span").textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct")
                // option_list.children[i].classList.add("correct") // outra forma de fazer
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon)
            }
        }
    }

    // once user selected disabled all options
    for(let i=0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled")
    }

    // activate button for the next question
    next_btn.style.display = "block"
}

// Showing the result box
function showResultBox() {
    info_box.classList.remove("activeInfo") // hide the info box
    quiz_box.classList.remove("activeQuiz") // hide the quiz box
    result_box.classList.add("activeResult") // show the result box
    const scoreText = result_box.querySelector(".score_text")
    let scoreTag = ""

    if(userScore > 3) {
        scoreTag = `<span>and congrants 🎉! You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`
    }
    else if(userScore > 1) {
        scoreTag = `<span>and nice 😎, You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`
    }
    else {
        scoreTag = `<span>and sorry 😥, You got only <p>${userScore}</p> out of <p>${questions.length}</p></span>`
    }

    scoreText.innerHTML = scoreTag
}


// Timer Settings for question
function startTimer(time) {
    counter = setInterval(timer, 1000)// execute function timer each 1s

    function timer() {
        timeCount.textContent = time
        time--;

        // Adding zero at the numbers that  not have
        if(time < 9) {
            let addZero = timeCount.textContent
            timeCount.textContent = "0" + addZero
        }
        if(time < 0) { // Quando o tempo de resposta acabar
            clearInterval(counter)
            timeCount.textContent = "00"
            timeOff.textContent = "Time Off"

            let correctAns = questions[que_count].answer
            let allOptions = option_list.children.length

            // showing what's the correct answer
            for(let i=0; i < allOptions; i++) {
                if(option_list.children[i].querySelector("span").textContent == correctAns) {
                    option_list.children[i].setAttribute("class", "option correct")
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon)
                }
            }

            // once user selected disabled all options
            for(let i=0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled")
            }

            // activate button for the next question
            next_btn.style.display = "block"
        }
    }
}

// Time line loading
function startTimerLine(time) {
    counterLine = setInterval(timer, 29)
    function timer() {
        time += 1
        timeLine.style.width = time + "px"
        if(time > 549) {
            // 550 = width da quiz_box
            clearInterval(counterLine)
        }
    }
}




// Indicating number of questions already answered
function queCounter(index) {
    const bottom_ques_counter = quiz_box.querySelector(".total_que")
    let totalQuesCountTag = `<span><p>${index}</p>of<p>${questions.length}</p>Questions</span>`
    bottom_ques_counter.innerHTML = totalQuesCountTag
}

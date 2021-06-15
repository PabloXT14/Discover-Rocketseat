// Getting al required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoListBox = document.querySelector(".todoList");

let userDataValue

inputBox.onkeyup = ()=> {
    let userData = inputBox.value;// getting user entered value
    userDataValue = userData

    if(userData.trim() != 0) { //if user values aren't only spaces 
        addBtn.classList.add("active") //active the add button 
    } else {
        addBtn.classList.remove("active") //unactive the add button 
    }
}

//If user click on the add button 
addBtn.onclick = ()=> {
    let newTask = `<li>${userDataValue}<span><i class="fas fa-trash"></i></span></li>`

    todoListBox.innerHTML += newTask
}
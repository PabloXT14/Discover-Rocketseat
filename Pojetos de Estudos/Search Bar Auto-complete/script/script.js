// Getting all required elements
const searchWrapper = document.querySelector(".search-input")
const inputBox = searchWrapper.querySelector("input")
const suggBox = searchWrapper.querySelector(".autocom-box")

// If user press any key and release
inputBox.onkeyup = (e) => {
    // console.log(e.target.value) // pegando é digitado pelo teclado
    let userData = e.target.value;// user enetered data (dados inseridos pelo usuário)
    let emptyArray = []
    if(userData) {
        emptyArray = suggestion.filter( (data) => {
            // filtering array value and user char to lowercase and return only those word/sentc which are starts with user entered word
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase())
            
        })
        emptyArray = emptyArray.map((data) => {
            return data = '<li>'+ data +'</li>'
        })
        console.log(emptyArray)
        searchWrapper.classList.add("active")// ativando caixa de sugestão caso o usuário digite algo
    } else {

    }
    showSuggestions(emptyArray);
}


function showSuggestions(list) {
    let listData
    if(!list.lenght) {

    } else {
        listData = list.join('')
    }
    suggBox.innerHTML = listData
}
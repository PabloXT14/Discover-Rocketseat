// Getting all required elements
const searchWrapper = document.querySelector(".search-input")
const inputBox = searchWrapper.querySelector("input")
const suggBox = searchWrapper.querySelector(".autocom-box")

// If user press any key and release
inputBox.onkeyup = (e) => {
    // console.log(e.target.value) // pegando é digitado pelo teclado
    let userData = e.target.value;// user enetered data
    let emptyArray = []
    if(userData) {
        emptyArray = suggestion.filter( (data) => {
            return data.toLocaleLowerCase()
            
        })
        console.log(emptyArray)
    }
}
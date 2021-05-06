/* Selecting all required elements */
const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input")


// if user click on the button then the input also cliked
button.onclick = () => {
    input.click()
}

input.addEventListener("change", function(){
    // getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = this.files[0]
    showFile() // calling function
    dropArea.classList.add("active")
}) 


// this is a global variable and we'll use it inside multiple functions
let file


/* If user Drag File Over DragArea */
dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();// preventing from default behaviour = evitando comportamento padrão
    // console.log("File is over DragArea")
    dropArea.classList.add("active")
    dragText.textContent = "Release to Upload File"
});


/* If user leave dragged File from DragArea */
dropArea.addEventListener("dragleave", () => {
    // console.log("File is outside from DragArea")
    dropArea.classList.remove("active")
    dragText.textContent = "Drag & Drop to Upload File"
});


/* If user drop File on DropArea */
dropArea.addEventListener("drop", (event) => {
    event.preventDefault(); // preventing from default behaviour = evitando comportamento padrão
    // console.log("File is dropped on DropArea")

    // getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    showFile() // calling function
});

function showFile() {
    let fileType = file.type // pegando tipo do arquivo dropado 
    // console.log(fileType)

    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]//adding some valid image extensions in array
    if(validExtensions.includes(fileType)) {// if user selected file is an image file
        let fileRender = new FileReader() // creating new FileRender object
        fileRender.onload = () => {
            let fileURL = fileRender.result // passing user file source in fileURL variable
            console.log(fileURL)
            // creating an img tag and passing user selected file source inside src attribute
            let imgTag = `<img src="${fileURL}"  alt="">` 
            dropArea.innerHTML = imgTag
        }

        fileRender.readAsDataURL(file)
        

    } else {
        alert("This is not an Image File!")
        dropArea.classList.remove("active")
        dragText.textContent = "Drag & Drop to Upload File"
    }
}
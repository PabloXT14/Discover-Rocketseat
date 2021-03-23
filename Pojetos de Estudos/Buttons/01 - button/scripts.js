const button = document.querySelector("button");

button.addEventListener('click', () => {
    button.parentElement.classList.add("active")

    // Success
    setTimeout(function(){
        button.classList.add("success")
    }, 3400)


    // Reload
    setTimeout(function(){
        alert("Your file upload successfully!")
        button.parentElement.classList.remove("active")
        button.classList.remove("success")
    }, 4200)
})
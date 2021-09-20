const btn = document.querySelector("button")
const h1 = document.querySelector("h1")

const greeting1 = {
    id: 1,
    msg: "olá, tudo bem!",
}

const greeting2 = {
    id: 2,
    msg: "Tchau, até outro dia!",
}

let g = 1


btn.addEventListener("click", ()=> {
    
    if(g == 1) {
        newText = changeText.bind(greeting1);
        g = 2
    } else {
        newText = changeText.bind(greeting2);
        g = 1
    }

    newText()
})

function changeText() {
  h1.innerHTML = this.msg;
}
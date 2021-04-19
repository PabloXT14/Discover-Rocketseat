// Quando o document(html) estiver pronto execute uma função
function ready(callback) {
    // In case the document is already rendered
    if(document.readyState === "complete") callback()
    else if(document.addEventListener) document.addEventListener('DOMContentLoaded', callback)
}

ready(function() {
    // Executando uma função para verificar certo ponto do scroll da janela/viewport
    if (window.scrollY > 20) {
        document.querySelector(".navbar").classList.add("sticky")
        console.log("OI")
    } else {
        document.querySelector(".navbar").classList.remove("sticky")
    }
})






const menu = document.querySelector('div.items')
const menuMobile = document.querySelector('.btn')

menuMobile.addEventListener('click', function() {
    // Fazendo menu aparecer
    menu.classList.toggle("show")
    // Icone fechar aparecer
    menuMobile.firstElementChild.classList.toggle("show")
})


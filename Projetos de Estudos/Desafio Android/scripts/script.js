/* Select all required elements */
const iconMenu = document.querySelector("nav ul li.btn")
const menu = document.querySelector("div.items")

iconMenu.addEventListener('click', function() {
    iconMenu.firstElementChild.classList.toggle('show')
    menu.classList.toggle('show')
});




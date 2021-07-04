/* Select all required elements */
const iconMenu = document.querySelector(".btn i")
const menu = document.querySelector("div.items")

iconMenu.addEventListener('click', function() {
    iconMenu.classList.toggle('show')
    menu.classList.toggle('show')
});




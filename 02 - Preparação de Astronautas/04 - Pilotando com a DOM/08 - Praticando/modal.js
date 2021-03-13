const modal = document.querySelector('.modal-wrapper')
const button = document.querySelector('button')

// Funções desativar e ativar modal
function createModal() {
    modal.classList.remove('invisible')
}
function removeModal() {
    modal.classList.add('invisible')
}


button.addEventListener('click', createModal)

document.onkeydown = function(event) {
    const isEscKey = event.key === 'Escape'
    if(isEscKey) {
        removeModal()
        
    }
    console.log(event.key)
}



/* Outra modo para criar o modal na tela */
// document.addEventListener('keydown', function(event) {
//     const teclaEnter = event.key === 'Enter'
//     if(teclaEnter) {
//         createModal()
//     }
// })


/* Adicionando mais uma opção de verificação */
// function verifyClassInvisible() {
//     const classInvisible = modal.getAttribute('class')
//     if(classInvisible.indexOf('invisible') !== -1) {
//         console.log('existe')
//     }
//     else {
//         console.log('não existe')
//     }
// }
// verifyClassInvisible()
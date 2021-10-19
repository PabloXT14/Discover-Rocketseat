/* ===== Window Object =====
- Definição:
    * O objeto <window> representa uma janela aberta em um navegador.
    * Se um documento(DOM) contiver quadros (tags <iframe>), o navegador criará um objeto de janela para o documento HTML e um objeto de janela adicional para cada quadro.
    * NOTE: Não existe um padrão público que se aplique ao objeto <window>, mas todos os principais navegadores o suportam.
    * NOTE: para acessar as campos/métodos/propriedade do objeto <window> muitas das vezes não é preciso declarar o window antes
        ex: window.console.log() = console.log()

- Propriedades/Métodos do Window:
    * defaultStatus: mensagem exibida na barra de status
    * status: mensagem temporária exibida na barra de status
    * name: nome da janela. Útil no caso de ser necessária uma referência a janela com target.
    * alert(): cria uma janela de aviso
    * confirm(): cria uma janela de confirmação com duas respostas possíveis
    * prompt(): cria uma janela onde é solicitada uma resposta ao usuário
    * blur(): retira o foco de uma janela
    * focus(): coloca o foco numa janela, movendo-a para a frente de todas

    * Mais propriedades e métodos em: https://www.w3schools.com/jsref/obj_window.asp

*/

// let name = window.prompt("Digite your name, please")
let name = prompt("Digite your name, please")

// window.alert("Hey there!")
alert("Hey there!")
alert(`Hi ${name}`)

window.onload = () => {
    document.querySelector('body').innerHTML += `Nice to meet you ${name} <br>`
    document.querySelector('body').innerHTML += `<button onclick="reload()">Reload Page</button>`
}

function reload() {
    window.location.reload();
}
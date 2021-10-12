const player = document.querySelector(".player")
const screen = document.querySelector(".screen");

/* === Pegando styles computados ===
- If your styles are written in the CSS file, you need to get the computed style. To do so, you can use getComputedStyle.
- It takes in two values:
    const style = getComputedStyle(Element, pseudoElement);
    * Element: aqui se refere ao elemento que você selecionou
    * pseudoElement: aqui se refere à string do pseudo elemento que você está tentando obter (se houver). Você pode omitir esse valor se não estiver selecionando um pseudoelemento
- Primeiro, você precisa selecionar o elemento com <querySelector>. Em seguida, você usa <getComputedStylepara> obter os estilos do elemento:
    const element = document.querySelector('.element')
    const style = getComputedStyle(element)

    const backgroundColor = style.backgroundColor
    console.log(backgroundColor) // rgb(0, 0, 0)
*/

const playerWidth = parseInt(getComputedStyle(player).width);//pegando largura do player para quando gerar a posição aleatoria não ser fora do limite de tela

const maxWidth = parseInt(getComputedStyle(screen).width)-playerWidth;
const maxHeight = parseInt(getComputedStyle(screen).height)-playerWidth;//neste caso o width do player é igual ao height


let xInicial = 0;
let yInicial = 0;


function movePlayer(x, y) {
    let posX = `${x}px`;
    let posY = `${y}px`;

    player.style.top = posX;
    player.style.left = posY;
}

function randomPosition(limit) {
    let min = 0;
    let max = Math.floor(limit)
    let resultNumb = Math.floor(Math.random() * (max-min+1) + min);
    return resultNumb;
}

setInterval(()=> {
    movePlayer(randomPosition(maxWidth), randomPosition(maxHeight))
}, 500)

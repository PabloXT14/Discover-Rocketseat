const image = document.querySelector("#thumb")
const btnDelete = document.querySelector("button")
const list = document.querySelector(".numbers")

/* 
/===== setAttribute() =====/
- Definição/Uso: 
    * O método setAttribute() adiciona o atributo especificado a um elemento e fornece o valor especificado.
    * Se o atributo especificado já existe, apenas o valor é definido / alterado.
- Sintaxe: 
element.setAttribute(attributename, attributevalue)
    * attributename(string): nome do atributo que você quer adicionar
    * attributevalue(string): valor do atributo que você quer adicionar


/ ===== getAttribute() ===== /
- Definição/Uso:
    * O método getAttribute() retorna o valor do atributo com o nome especificado de um elemento.
- Sintaxe:
element.getAttribute(attributename)
    * attributename(string): nome do atributo que você deseja pegar o valor


/ ===== hasAttribute() ===== /
- Definição/Uso:
    * O método hasAttribute() retorna true se o atributo especificado existir, caso contrário, retorna false.
- Sintaxe:
element.hasAttribute(attributename)
    * attributename(string): nome do atributo que você quer checar se existe

/ ===== removeAttribute() ===== /
- Definição/Uso:
    * O método removeAttribute () remove o atributo especificado de um elemento.
- Sintaxe: 
element.removeAttribute(attributename)
    * attributename(string): nome do atributo que você quer remover
*/


image.addEventListener("click", (elem)=> {
    setarAtributo(elem.target);
    // setarAtributo(image)

    pegarAtributo(elem.target)
    checarAtributo(elem.target)
})


function setarAtributo(elem) {
    elem.setAttribute("src", "./images/thumb-down.png")
}

function pegarAtributo(elem){
    console.log(elem.getAttribute("src"))
}

function checarAtributo(elem) {
    let status = elem.hasAttribute("src") ? "o elemento contêm o atributo src" : "o elemento não contêm o atributo src"
    console.log(status)
}

btnDelete.addEventListener("click", ()=> {
    image.removeAttribute("src")
})


//utilizando atribute inventado/criado
let num = parseInt(list.getAttribute("amountNumb"))

let conteudo = ""
for(let i=1; i <= num; i++) {
    conteudo += `<li>Item ${i}</li>`;
}
list.innerHTML = conteudo;
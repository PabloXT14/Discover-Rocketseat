const image = document.querySelector("#thumb")

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

*/


image.addEventListener("click", (elem)=> {
    setarAtributo(elem.target);
    // setarAtributo(image)
    // console.log(elem)
    pegarAtributo(elem.target)
})

function setarAtributo(elem) {
    elem.setAttribute("src", "./images/thumb-down.png")
}

function pegarAtributo(elem){
    console.log(elem.getAttribute("src"))
}
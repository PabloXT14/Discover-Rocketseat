/* # Local Storage

## DEFINIÇÃO E USO
- As propriedades <localStorage> e <sessionStorage> permitem salvar pares de chave/valor em um navegador da web.
- O objeto <localStorage> armazena dados sem data de expiração. Os dados não serão excluídos quando o navegador for fechado e estarão disponíveis no próximo dia, semana ou ano.
- A propriedade <sessionStorage> armazena dados para uma sessão (ou seja, os dados são perdidos quando a guia do navegador é fechada).

## SINTAXE

- window.localStorage: apenas para acessar o localStorage, não é preciso usar neste formato declarando o window
- Sintaxe para SALVAR dados em localStorage:
    localStorage.setItem("key", "value");
- Sintaxe para READING data from localStorage:
    var lastname = localStorage.getItem("key");
- Sintaxe para REMOVER dados de localStorage:
    localStorage.removeItem("key");
- Sintaxe para remover todos os dados do localStorage:
    localStorage.clear();

- ATENÇÃO: o localStorage converte qualquer valor que você colar nele para o formato string, pois ele só salva neste formato. Sendo assim, recomenda-se converter um objeto/elemento para o formato JSON antes de salvar no localStorage, para assim você conseguir acessá-lo de volta no formato que você desejar.
*/

// Previnindo form de carregar a pagina
const form = document.querySelector("form");


/* ============ Utilizando LocalStorage no Form ============= */
const inputName = document.querySelector("#name"),
    inputAge = document.querySelector("#age"),
    inputEmail = document.querySelector("#email"),
    saveBtn = document.querySelector(".saveBtn"),
    loadBtn = document.querySelector(".loadBtn");

let userData = {
    name: '',
    age: '',
    email: ''
}

// Funcão setar dados no form
function setUserInForm(userData) {
    inputName.value = userData.name;
    inputAge.value = userData.age;
    inputEmail.value = userData.email;
}
setUserInForm(userData);

// Salvando dados no LocalStorage
saveBtn.addEventListener("click", (event) => {
    // Pegando dados do form
    userData.name = inputName.value;
    userData.age = inputAge.value;
    userData.email = inputEmail.value;

    // Checando campos do form (vendo se estão todos preenchido)
    for (const input in userData) {
        if (userData[input] === '') return alert("🚨Preencha todos os dados do formulário e de forma correta!")
    }

    // Guardando dados no localStorage

    event.preventDefault();//previnindo form de atualizar a pagina
    localStorage.setItem("userData", JSON.stringify(userData));
    setUserInForm({ name: '', age: '', email: '' });//limpando form
    setTimeout(() => { alert("Usuário salvo com sucesso!") }, 500);

})

// Carregando dados do LocalStorage
loadBtn.addEventListener("click", (event) => {
    event.preventDefault();//previnindo form de atualizar a pagina

    let newUserData = JSON.parse(localStorage.getItem("userData"));

    userData = newUserData
    setUserInForm(userData);

    setTimeout(() => { alert("Usuário carregado com sucesso!") }, 500);
})




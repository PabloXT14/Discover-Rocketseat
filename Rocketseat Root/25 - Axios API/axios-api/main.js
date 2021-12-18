/*
    * axios: objeto que vem do CDN link do axios, que da acesso a todos os métodos do axios
    * No axios ao excutar uma requisição de algum tipo você pode passar dois parâmetros:
        axios.post('rota da api', { body de envio da request/requisição }) 
    * E assim como no método fetch, você consegue as responses do requisição da api, através do then() e com catch() para capturar os erros:
        axios('url', {body request})
        .then(response => {
            console.log(response.data)//no axios os dados enviados pela API ficam salvos em um campo do response chamado data
        })
        .catch(error => console.log(error)) 
*/
const url = "http://localhost:3333/api";// url da nossa api
const newUser = {
    name: "John Doe 2",
    avatar: "https://source.unsplash.com/random",
    city: "Rio do Sul"
}
const userUpdated = {
    name: "Mayk Brito",
    avatar: "https://source.unsplash.com/random",
    city: "Paraná"
}


/* Pegando usuários na API com axios */
function getUsers() {
    axios.get(url)
        .then(response => {
            const data = response.data;// pegando dados do API, e no axios estes dados ficam salvos em um campo do response chamado data
            renderResults.textContent = JSON.stringify(data);
        })
        .catch(error => console.log(error))
}
getUsers();


/* Cadastrando usuários na API com axios */
function addNewUser() {
    axios.post(url, newUser)
        .then(response => {
            alert(response.data)
        })
        .catch(error => console.log(error))
}
//addNewUser();


/* Atualizando usuário na API com axios */
function updateUser() {
    axios.put(`${url}/2`, userUpdated)
        .then(response => {
            alert(JSON.stringify(response.data))
        })
        .catch(error => console.log(error))
}
//updateUser();


/* Deletando usuário na API com axios */
function deleteUser() {
    axios.delete(`${url}/3`)
        .then(response => {
            alert(JSON.stringify(response.data))
        })
        .catch(error => console.log(error))
}
//deleteUser();


/* Pegando um usuário especifico na API com axios */
function getOneUser() {
    axios.get(`${url}/1`)
        .then(response => {
            const data = response.data;
            renderResults.textContent = JSON.stringify(data)
        })
        .catch(error => console.log(error))
}
//getOneUser();



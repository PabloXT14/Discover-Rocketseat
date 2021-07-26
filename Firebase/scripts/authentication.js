// Initialize Firebase
//OBS: esta inicialização só pode ser feita em um dos scripts chamados no index
var firebaseConfig = {
    apiKey: "AIzaSyAv-iggq3mff-3aA08hUFtdMm-wuju3Q14",
    authDomain: "colegio-c2f2d.firebaseapp.com",
    databaseURL: "https://colegio-c2f2d-default-rtdb.firebaseio.com",
    projectId: "colegio-c2f2d",
    storageBucket: "colegio-c2f2d.appspot.com",
    messagingSenderId: "612111524967",
    appId: "1:612111524967:web:d6b940cb3c29bbea07e0c2",
    measurementId: "G-NQ4PY3CXRK"
};
firebase.initializeApp(firebaseConfig);//firebase => variavel que vem da importação do outro script do firebase
var db = firebase.firestore();// acessando banco de dados firestore
var auth = firebase.auth();// acessando area de autenticação do firebase

/* ========== Criando Usuário no Firebase Authentication ========== */
let newUserEmail = "novousuario@gmail.com"
let newUserPassword = "123abc"


// function createUser() {
//     //OBS: vc pode sobre esse método de criação de usuário e muitos outros através da documentação do Firebase
// auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
// .then((user)=> {
//     console.log(user);//retornando user caso ele criado com sucesso
// })
// .catch((err)=> {
//     console.log(err);//retornando algum erro que ocorrer
// })
// }
// createUser();

/* ========== Gerenciando Logins ========== */

// function login() {
//     let userEmail = newUserEmail
//     let userPassword = newUserPassword

//     //método para logar um usuário existente no authentication do firebase
//     auth.signInWithEmailAndPassword(userEmail, userPassword)
//     .then((loggedUser)=> {
//         console.log(loggedUser);//detalhes do usuário que logou/entro
//     })
//     .catch((error)=> {
//         console.log(error);//retornando algum erro que ocorrer
//     })

//     //currentUser: retorna o usuário que está logado no atual momento
//     let userLogged = auth.currentUser;
//     console.log(userLogged)

// }
// login();


// função do authentication que retorna em tempo real o estado de usuários, se algum usuário está logado 
auth.onAuthStateChanged((user)=> {
    if(user) {
        console.log('o(s) seguinte(s) usuário(s) está(ão) logado(s):')
        console.log(user)
    } else {
        console.log(`Ninguém logado`)
    }
})


function logout() {
    //signOut(): método para deslogar o(s) usuário(s)
    auth.signOut()
    .then(()=> {
        console.log("Usuário foi deslogado")
    })
    .catch((error)=> {
        console.log(error)
    })
}
setTimeout(logout, 3000);
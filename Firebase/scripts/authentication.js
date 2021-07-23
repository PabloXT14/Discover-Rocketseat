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

//OBS: vc pode sobre esse método de criação de usuário e muitos outros através da documentação do Firebase
auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
    .then((user)=> {
        console.log(user);//retornando user caso ele criado com sucesso
    })
    .catch((err)=> {
        console.log(err);//retornando algum erro que ocorrer
    })
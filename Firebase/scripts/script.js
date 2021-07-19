// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);//firebase => variavel que vem da importação do outro script do firebase
firebase.analytics();


/* ======= Acessando coleção do nosso firestore ========= */
let db = firebase.firestore();//acessando banco de dados no firestore


// Lendo os dados de todos documentos de uma coleção
// db.collection("turmaA").get().then((snapshot)=>{
//     //snapshot: é uma "foto"/estado da nossa coleção no bando de dados no momento em tentamos acessá-lo

//     snapshot.forEach((doc) => {
//         //doc: é cada um dos documentos que temos na nossa coleção
//         //doc.data(): função para acessar os dados de um documento

//         let aluno = doc.data();
//         console.log(aluno.nome)
//     })
// });

// Lendo os dados de um documento expecífico da coleção
// let docRef = db.collection("turmaA").doc("o6BDJrymTBcwCxvuGhGw")

// docRef.get().then((doc)=> {
//     let aluno = doc.data();
//     console.log(aluno.nome)
//     console.log(aluno.notas)
// })

/* ======= Selecionando um documento de acordo com o valor do campo ======= */
/*
    where(campo, comparador, value): função que seleciona um documento específico segundo os parâmetros
        - campo: nome do campo de um documento a ser comparado
        - comparador: podendo ser somente: "==", "<=", ">=" (para strings funciona na ordem alfabética os <= e >=)
        - value: valor a ser comparado

*/

// db.collection("turmaA").where("nome", ">=", "José").get().then((snapshot)=> {
//     snapshot.forEach((doc)=> {
//         let aluno = doc.data();

//         console.log(`aluno: ${aluno.nome} \n nota1: ${aluno.notas.nota1}`)
//     })

// });

// Pode usar mais de um where() nas mesma busca se você estiver fazendo buscas em um único campo, os where() juntos funcionarão como um AND/&&
// db.collection("turmaA").where("nome", ">", "Alessandro")
//                        .where("nome", "<", "Lucas").get().then((snapshot)=> {
//     snapshot.forEach((doc)=> {
//         let aluno = doc.data();

//         console.log(`Aluno: ${aluno.nome}`)
//     });
// });


// Simulando funções where() funcionando como OR/||
db.collection("turmaA").where("nome", "<", "José").get().then((snapshot)=> {
    snapshot.forEach((doc)=> {
        let aluno = doc.data();

        console.log(`Aluno: ${aluno.nome}`)
    });
});
db.collection("turmaA").where("nome", ">", "José").get().then((snapshot)=> {
    snapshot.forEach((doc)=> {
        let aluno = doc.data();

        console.log(`Aluno: ${aluno.nome}`)
    });
});

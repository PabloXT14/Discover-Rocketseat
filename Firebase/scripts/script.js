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
// db.collection("turmaA").where("nome", "<", "José").get().then((snapshot)=> {
//     snapshot.forEach((doc)=> {
//         let aluno = doc.data();

//         console.log(`Aluno: ${aluno.nome}`)
//     });
// });
// db.collection("turmaA").where("nome", ">", "José").get().then((snapshot)=> {
//     snapshot.forEach((doc)=> {
//         let aluno = doc.data();

//         console.log(`Aluno: ${aluno.nome}`)
//     });
// });




/* ======= Criando e alterando documentos ======= */

const turma = "turmaA"

//Adicionando documento a uma coleção (com id automatico)
// add(object): metodo que recebe um objeto para adicionar como "doc" de uma collection
// db.collection(turma).add({
//     nome: "Paulinho",
//     notas: {nota1: 5.5, nota2: 4.5, nota3: 6.0},
// }).then((doc)=> {
//     console.log("Documento inserido com sucesso:", doc)
// }).catch((err)=> {
//     //catch(): método que capturas os erros que ocorrerem
//     console.log(err)
// });


//Adicionando documento a uma coleção (especificando o id)
// db.collection(turma).doc("AlunoNovo").set({
//     nome: "Mariana",
//     notas: {nota1: 7.0, nota2: 6.5, nota3: 10.0},
// }).then(()=> {
//     console.log("Documento inserido com sucesso!")
// }).catch((err)=> {
//     console.log(err)
// });

//Também utiliza-se o método set() para alterar os dados de um "doc" específico
//ATENÇÃO: o set() sobrescreve tudo que tinha no "doc" determinado, sendo assim, se vc alterar somento um campo com set(), todos os outros campos que não foram alterados, irão desaparecer
// db.collection(turma).doc("AlunoNovo").set({
//     nome: "Mariana",
//     notas: {nota1: 7.0, nota2: 6.5, nota3: 9.5},
// }).then(()=> {
//     console.log("Documento alterado com sucesso!")
// }).catch((err)=> {
//     console.log(err)
// })

//alterando dados de um "doc" com set() sem sobrescrever os antigos dados
// db.collection(turma).doc("9cRGnrNUktZCXT1Xwakf").set({
//     nome: "Alexandro"
// }, {merge: true}).then(()=> {

//     console.log("Documento alterado com sucesso!")

// }).catch((err)=> {
//     console.log(err)
// })

//Alterando/atualizando dados de um "doc" com update(), funciona semelhante ao set({}, {merge: true})
// db.collection(turma).doc("AlunoNovo").update({
//     nome: "Mariana Santos",
//     "notas.nota1": 9.0,
//     //"notas.nota1": essa é nota para alterar um campo do tipo "map"
// }).then(()=> {
//     console.log("Documento atualizado com sucesso!")
// }).catch((err)=> {
//     console.log(err)
// })

//Podemos também adicionar novos campos com o update()
// db.collection(turma).doc("AlunoNovo").update({
//     tarefasConcluidas: ["Ex. de Multiplicação", "Ex. de Divisão"],
//     faltas: 5,
// }).then(()=> {
//     console.log("Documento atualizado com sucesso!")
// }).catch((err)=> {
//     console.log(err)
// })

//como adicionar mais um elemento a um campo array com update()
// db.collection(turma).doc("AlunoNovo").update({

//     tarefasConcluidas: firebase.firestore.FieldValue.arrayUnion("Ex. de Português", "Ex. de Geografia")
//     //para excluir um elemento de um campo array
//     // tarefasConcluidas: firebase.firestore.FieldValue.arrayRemove("Ex. de Português", "Ex. de Geografia")

// }).then(()=> {

//     console.log("Documento alterado com sucesso!")

// }).catch((err)=> {
//     console.log(err)
// })

//Incrementando o valor de um campo com update()
// db.collection(turma).doc("AlunoNovo").update({
//     //increment(valor a ser incrementado)
//     //decrement(valor a ser decrementado)
//     faltas: firebase.firestore.FieldValue.increment(2)
// }).then(()=> {
//     console.log("Documento atualizado com sucesso!")
// }).catch((err)=> {
//     console.log(err)
// })




/* ======= OnSnapshot(atualização em tempo real) ======= */

//onSnapshot(): método semelhante ao get(), só que é executado em tempo real, ou seja, mostra qualquer alteração em tempo real que tivermos no banco de dados
// db.collection(turma).onSnapshot((snapshot)=> {
//     snapshot.forEach((doc)=> {
//         let aluno = doc.data()
//         console.log(aluno)
//     })
// });

//Utilizando onSnapshot() em um "doc" específico
// let docRef = db.collection(turma).doc("AlunoNovo")
// docRef.onSnapshot((doc)=> {
//     // let aluno = doc.data();
//     console.log(doc.data().faltas)
// })

//Utilizando onSnapshot() e where()
// let notaMinima = 6
// db.collection(turma).where("notas.nota1", ">=", notaMinima).onSnapshot(     (snapshot)=> {
//     snapshot.forEach((doc)=> {
//         let aluno = doc.data();
//         console.log(`O aluno(a) ${aluno.nome} atingiu/superol a nota mínima (${notaMinima})`)
//     })
// })




/* ========== Apagando Campos e Documentos ========== */

//Apagando um campo de um "doc" (realizado através do update())
// db.collection(turma).doc("9cRGnrNUktZCXT1Xwakf").update({
//     sobrenome: firebase.firestore.FieldValue.delete(),
// }).then(()=> {
//     console.log("Campo excluido com sucesso!")
// }).catch((err)=> {
//     console.log(err)
// })

//Apagando um "doc" inteiro
// db.collection(turma).doc("ZrD1Dll8NlmH5brfyuUu").delete().then(()=> {
//     console.log("Documento excluido com sucesso!")
// }).catch((err)=> {
//     console.log(err)
// })

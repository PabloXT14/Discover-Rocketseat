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
//     //OBS: vc pode saber mais sobre esse método de criação de usuário e muitos outros através da documentação do Firebase
// auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
// .then((user)=> {
//     console.log(user);//retornando user caso ele tenha criado com sucesso
// })
// .catch((err)=> {
//     console.log(err);//retornando algum erro que ocorrer
// })
// }
// createUser();

/* ========== Gerenciando Logins ========== */

function login() {
    let userEmail = newUserEmail
    let userPassword = newUserPassword

    //método para logar um usuário existente no authentication do firebase
    auth.signInWithEmailAndPassword(userEmail, userPassword)
    .then((loggedUser)=> {
        console.log(loggedUser);//detalhes do usuário que logou/entro
    })
    .catch((error)=> {
        console.log(error);//retornando algum erro que ocorrer
    })

    //currentUser: retorna o usuário que está logado no atual momento
    let userLogged = auth.currentUser;
    console.log(userLogged)

}
// login();


// função do authentication que retorna em tempo real o estado de usuários, se algum usuário está logado 
auth.onAuthStateChanged((user)=> {
    if(user) {
        console.log('o(s) seguinte(s) usuário(s) está(ão) logado(s):')
        console.log(user)
        write();
    } else {
        console.log(`Ninguém logado`)
    }
})


// function logout() {
//     //signOut(): método para deslogar o(s) usuário(s)
//     auth.signOut()
//     .then(()=> {
//         console.log("Usuário foi deslogado")
//     })
//     .catch((error)=> {
//         console.log(error)
//     })
// }
// setTimeout(logout, 3000);



/* ========== Sessão do Usuário ========== */

function checkPersistence() {
    /* 
    setPersistence(): método para determinar qual será o estado de persistência de um usuário logado na página, podendo receber as seguintes as opções como atributo:
    - LOCAL(padrão): nesta em qualquer janela/aba que abrirmos do navegador o usuário vai aparecer logado em todas estas janelas/abas. 
    - SESSION: nesta o usuário só vai aparcer logado na janela/aba atual em que foi feito o login, em outras abas/janelas não aparecerá como logado.
    - NONE: nesta, caso a janela/aba atual seja atualizada o usuário vai ser deslogado.
    */

    auth.setPersistence(firebase.auth.Auth.Persistence.NONE)
    .then(()=> {//checando persistência antes de realizar o login 
        auth.signInWithEmailAndPassword(newUserEmail, newUserPassword)
        .then((logged)=> {
            console.log(logged)//detalhes do usuário que logou/entro
        })
        .catch((error)=> {
            console.log(error)
        })
        //poderia ser chamado a função login() aqui  
    })
    .catch((err)=> {
        console.log(err)
    })
}
// setTimeout(checkPersistence, 2000)



/* ========== O Que São Permissões ========== */
/*
- As permissões ao seu banco de dados podem ser alteradas através da guia "Firestore Database" > Aba "Regras", e você verá um documento semelhante ao seguinte:


rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2021, 8, 15);
    }
  }
}

- Depois do "if" consta a condição para que alguem tenha acesso ao seu banco de dados, você mudar por exemplo para "if false", desta forma ninguêm conseguira ter acesso ao seu banco de dados (obs: você pode colocar outras condições), veja o exemplo:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}


*/


// Caso a permissão esteja como "if false", acontecera um erro de "permissão insuficiente ao banco de dados"
// db.collection("turmaA").get()
//    .then((snapshot)=> {
//         snapshot.forEach((doc)=> {
//             console.log(doc.data());
//         })
//    })
//    .catch((err)=> {
//         console.log(err)
//    })



/* ========== Permissões e Regras ========== */

// Execute estas funções conforme for alterando as Regras do Banco de Dados Firestore
function read() {
  db.collection("turmaA").get()
  .then((snapshot)=> {
    snapshot.forEach((doc)=> {
      console.log(doc.data())
    })
  })
  .catch((error)=> {
    console.log(error)
  })
}

function write() {
  db.collection("turmaA").add({
    nome: `Dom Pedro`,
    sobrenome: `${Math.random()}`,
  })
  .then((doc)=> {
    console.log(doc)
  })
  .catch((error)=> {
    console.log(error)
  })
}

// read();
// write();



// Caso você queira permitir que um usuário só possa ler e não escrever no banco de dados Firestore, ou vice-versa, siga a seguinte lógica de comando na aba Regras: 
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true ;
      allow write: if false;
    }
  }
}
*/


// Agora para permitir um usuário de ler/escrever apenas depois que estiver logado, siga a seguinte lógica de comando na aba Regras:
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth.uid != null;
      
    }
  }
}

*/
//descomente a função login() ou checkPersitence(), e execute função write() dentro do onAuthStateChanged() para testar a logica acima


// Para permitir apenas um usuário especifico (através de seu uid no authenticantion) de escrever, basta seguir a mesma lógica anterior apenas alterando a regra do write, veja:
/*

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth.uid == "HoK1zB1GBFNZX61Pui9XEnmEl4G3";
      
    }
  }
}

*/
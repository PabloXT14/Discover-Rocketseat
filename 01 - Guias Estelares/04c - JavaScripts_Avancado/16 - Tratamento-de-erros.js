/* ===== Tratamento de Erros =====
- Definição:
    * A declaração <try> permite que você teste um bloco de código para erros.
    * A declaração <catch> permite que você lide/manuseie o erro.
    * A declaração <throw> permite você criar erros personalizados.
    * A declaração <finally> permite você executar um código depois do <try> e <catch>, independente do resultado.
     
    * Mas por que tratar erros no seu código?: você deve tratar os erros do seu código para que sua aplicação continue rodando caso ocorra um erro insignificante que não afetará no resultado final. Caso você não trate um erro e supondo que ele ocorrá no começo do seu código, todo as linhas de código seguintes não serão executadas.
    * OBS: o try catch é comunmente utilizados em funções async e await, para tratar os erros de uma Promise.
- Sintaxe:
    * <try> e <catch>:
        try {
            Block of code to try
        } catch(err) {
            Block of code to handle errors
        }
    * <throw>: Tecnicamente, você pode "lançar uma exceção" (lançar um erro). A exceção pode ser um JavaScript <string>, um <number>, um <boolean> um <object>
        let name = ""
        try {
            if(name) {
                throw "The name can't be empty!"
            }
            console.log(name);

        } catch(err) {
            console.log("Error: " + err); // Error: The name can't be empty!
        }
    * <finally>: 
        try {
            Block of code to try
        }
        catch(err) {
            Block of code to handle errors
        }
        finally {
            Block of code to be executed regardless of the try / catch result
        } 
        * Ex:
        try {
            console.log(name); // name don't exist
        }
        catch(err) {
            console.log(err); // message of error
        }
        finally {
            //Block of code to be executed regardless of the try / catch result
            console.log("Good evening!")
        } 
- Propriedades do Objeto de Erro (este é o parâmetro que vai dentro do <catch>, que também pode ser enviado através do <throw>)
    * Propriedades:
        - name: define ou retorna um nome de erro.
        - message: define ou retorna uma mensagem de erro (uma <string>)
    * Ex:
        try {
            console.log(name)
        } catch(err) {
            console.log(err.name);
            console.log(err.message);
        }
- Valore de nome de Erro (seis valores diferentes podem ser retornados pela propriedade do <name> do erro)
    * EvalError: um erro que ocorreu na função eval(), está função faz calculo de expressões (dica: veja projeto calculator)
    * RangeError: um número "fora do intervalo" ocorreu
    * ReferenceError: ocorreu uma referência ilegal/inválida	
    * SyntaxError: uma erro de sintaxe ocorreu	
    * TypeError: um erro de de tipagem ocorreu	
    * URIError: ocorreu um erro de encodeURI() 	
    
- Veja mais sobre tratamento de erros em: https://www.w3schools.com/js/js_errors.asp
*/

//let name = "" // teste descomentar e alterar o valor de name para ver o que ocorre

// try  {
    
//     if(name == "") 
//         throw {name: "NameError", message: "O nome não pode estar vazio."} 

//     console.log(name)

// } catch(err) {
//     console.log(`${err.name}: ${err.message}`)
//     // console.log(err); // esse envia todos os detalhes do erro
// } finally {
//     console.log("Good Evening")
// }


//Other Exemple try catch in <async> and <await>
function multiplos(n) {
    let result = "";

    return new Promise((response, reject)=> {
        if(n != null || n != undefined) {
            for(let i=0; i <= 10; i++) {
                result += `${n} X ${i} = ${n*i} \n` 
            }
            response(result)
        } else {

            // reject("Insirá um valor inteiro válido!")
            reject({name: "NumberNotDefined", message: 'Insirá um valor inteiro válido!'})
        }

    })
}

async function testMultiplos(number) {
    try {
       console.log(await multiplos(number));     

    } catch(err) {
        // console.log(err)
        console.log(`${err.name}: ${err.message}`)

    } finally {
        console.log("Teste finalizado!")
    }

}

testMultiplos();// teste passar ou não um argumento nesta função

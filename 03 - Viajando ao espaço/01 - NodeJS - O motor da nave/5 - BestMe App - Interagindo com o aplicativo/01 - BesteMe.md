# Best me App

Encontre sua melhor versão!

Use o App ao final de cada dia para refletir sobre sua jornada

## O que vamos aprender?

A se comunicar com o processo enquanto ele estiver rodando

* process.stdout
    - `process.stdout.write` imprime (no terminal) continuamente as informações como os dados sendo recuperados e não adiciona uma nova linha/quebra de linha, diferente do console.log() que coloca um `\n`(quebra de linha) automaticamente.
    - O console.log() é basicamente um `process.stdout.write` + `\n`
    - teste:

    ```js
    process.stdout.write("conteúdo sem quebra de linha ")
    console.log("Fazendo a quebra de linha")
    process.stdout.write("Depois da quebra de linha")
    ```
* process.stdin
    - `process.stdin.on `, esse código se refere a emissão e recebimento de dados via eventos, serve basicamente para capturar os dados adicionados no terminal durante a execução de um processo
    - Funciona de forma _assincrona_, ou seja, se não encerrar o processo, este comando vai ficar executando toda hora esperando entrada de dados no terminal
    - Ex:
    ```js
    process.stdin.on("data", data => {
        process.stdout.write(data.toString().trim() + '\n')
        process.exit()
    })
    ```
* process.exit
    - `process.exit()` comando que serve para encerrar um processo.
    - Veja seu uso na demonstração anterior


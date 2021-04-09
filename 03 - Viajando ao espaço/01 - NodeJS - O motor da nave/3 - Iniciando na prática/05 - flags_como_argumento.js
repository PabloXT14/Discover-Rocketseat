/*
    * flags
        - São formas de especificar os argumentos que serão passados no 'process', especificando o nome de uma argumento que será guardado no process.argv
        - para criar um flag digite ( --nome_da_flag + conteúdo da flag que vai aparecer na posição seguinte do array 'process.argv'  no terminal)
        * ex:
            node arquivo.js --name "Pablo" --age 19

        * obs: você pode criar várias flags
*/

console.log(process.argv)


// Apresentando o conteúdo da flag
const index = process.argv.indexOf('--age') + 1
console.log(Number(process.argv[index]))
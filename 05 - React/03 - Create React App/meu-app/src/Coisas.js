/* ===== Import ===== 
- Existem duas maneira de importarmos e exportarmos um script/components de uma script para outro.
- 1º (export default):
    * Esta é a exportação padrão (só pode ter uma em um script)
    * Exporta algum elemento que queiramos, e para importar em outro script podemos colocar qualquer nome para acessar este elemento.
    * Demonstração de Exportação & Importação:
        - Exportação:
            let objetoPrincipal = "Sou Objeto Principal"
            export default objetoPrincipal;
        - Importação:
            import qlqNome from "./localDoElemento.js"//=> no do arquivo com o objetoPrincipal
- 2º (export): 
    * Utilizando somento a palavra-chave <export> podemos enviar quantos elementos quizermos por vez
    * No entanto, para acessar esse elementos em outro script precisamos colocar seu nome específico entre {} para acessá-lo, veja a demonstração:
        - Exportação: 
            let objetoPrincipal = "Sou Objeto Principal"
            let obj1 = "objeto1"

            // exportação padrão
            export default objetoPrincipal;

            // exporta recursos declarados anteriomente
            export { myFunction, myVariable, obj1 };

            //exporta recursos individuais (pode exportar var, let, const, function, class)
            export let obj1 = "objeto1";
            export function myFunction() { ... };

        - Importação:
            import qlqNome, {objetoQualquer} from "./localDoElemento.js"
*/

let objPrincipal = "Sou Objeto Principal"
let obj1 = "objeto1"
let obj2 = "objeto2"

export default objPrincipal;
export { obj1, obj2 };


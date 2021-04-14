# NPM

Node Package Manager (Gerenciador de Pacotes do Node)

__Glossary: Dependencies, Packages, Modules__

- [ ] Verificar se temos o npm instalado `npm -v`(digite no terminal)
- [ ] Criar nosso próprio pacote
    * `npm init` (tem que responder a perguntas)
    * `npm init -y` (preenche todas as perguntas com yes)
    * ambos os comando vão criar o arquivo/pacote package.json
- [ ] O que é o arquivo package.json
    * é um arquivo no formato `json`(Javascript Object Notation - Um arquivo com o formato de um objeto em Javascript)
    * apresenta alguns campos iniciais de base para seu projeto que são auto explicativos (conforme você adiciona mais funcinalidades ao seu projeto aparecem mais campos), vale destacar:
        * "name": "nome-qlq-do-seu-projeto"  
        * "version": "versão do seu projeto"
        * "description": "descrição do projeto"
        * "main": "principal arquivo que será executado pelo package"
        * "scripts": "outros script que serão executados além do main"
        * "keywords": "palavras chave"
        * "author": "autor do pacote/projeto"
        * "license": "licença"
- [ ] Utilizar módulos de terceiros
    * `npm install ` ou `npm i` + (qualquer módulo do repositório do npm, ex: cfonts)
    * `npm i ` + módulo de terceiro + `-D`, instala um módulo como *Dependência de Desenvolvimento*, assim um módulo só vai aparecer para o criador de uma aplicação no seu desenvolvimento, e não para o usuário final (obs: vai aparcer o campo "devDependences" no package.json ao usar o `-D` )
    * Outro modo de transformar um módulo de terceiro em *Dependência de Desenvolvimento* é ir no arquivo package.json e trocar o módulo do campo `dependencies` para o `devDependencies`, ou o contrário se quiser fazer um módulo deixar de ser uma Depen. de Desenl., por fim use o comando `npm update` para as mudanças do package.json irem para o package-lock.json
    * Ao terminar de baixar um módulo de um terceiro irá aparecer a pasta `node_modules` e o arquivo `package-lock.json` na sua aplicação.
- [ ] O que é o diretório node_modules
    * é uma pasta que é criada pelo NodeJS para guardar os módulos de terceiros/baixados (obs: esses módulos também terão um package.json)
    * para o GitHub ignore e não salvar esta pasta basta adicionar no arquivo `.gitignore` a linha `node_modules/`
    * Caso você tenha apagado sem querer a pasta `node_modules`, e não tiver o arquivo `.gitignore`, basta executar o comando `npm install` no terminal que tudo volta como estava.
- [ ] O que é o arquivo package-lock.json
    * Também é um arquivo .json que vai servir parar fazer um mapeamento das dependências que o seu projeto tem, deixando-o assim mais rápido.
    * Recomenda-se não mexer/alterar este arquivo para que o seu projeto não de erro e execute de forma rápida.
    * Caso tenha apagado o arquivo sem querer basta executar no terminal `npm install`
- [ ] Criar scripts para rodar com o npm
    * Basta adicionar no campo `scripts` do arquivo `package.json` do seu projeto uma `palavra-chave` + `node (localização do seu arquivo)`, ex:
    ```js
    "dev": "node index.html"
    ```
    * Depois para rodar no terminal o comando `npm run`+`palavra-chave`
    * Obs: quando a palavra-chave é `start` só é preciso executar no terminal `nmp start`

__Instalando Dependências Globais & Mudando Versão do Pacote__
- [ ] Instalar pacote de maneira global (ná sua máquina, não apenas no projeto)
    * Execute no terminal: `npm i` + `nome do pacote` + `-g`
    * Para saber onde estão os pacote na sua máquina execute:
    `npm root -g`
- [ ] Desistalar pacotes
    * Execute no terminal: `npm uninstall`+`nome do pacote`+`-g`
- [ ] Mudar a versão de pacotes
    * O que significam os três digitos de uma versão
        * ex: "moment": "^2.29.1" => `sinal` + `major.minor.patch`
        * `patch`: resolve algum bug/problema do pacote
        * `minor`: indica que o pacote vai sofrer alterações mas que não vai quebrar a funcionamento do pacote devido as alterações
        * `major`: versão do projeto, que pode quebrar dependendo do que acontece
        * `sinal`: este pode ser de diferentes sinais:
            * `^`: indica que quando o npm atualizar somente o `minor` e o `patch` vão atualizar
            * `~`: somente o `patch` será atualizado
            * `sem sinal`: versão fixa, ou seja, o projeto nunca mudará de versão
            * `*`: este irá aparecer no lugar do (`sinal` + `major.minor.patch`), pois indica que todas as versões vão sofrer alterações
    * Como instalar uma versão especifica:
        * Execute: `npm i `+`nome do pacote`+`@`+`número específico da versão`
        * ex: `npm i moment@1.5.1`
    * Como saber dados sobre as versão dos pacotes instalados:
        * Execute: `npm outdated`
    * Como atualizar as versão dos pacotes para a versão mais requisitada:
        * Execute: `npm upgrade` 
    * Como voltar pacote para a ultima versão que foi instalada: `npm i `+`nome do pacote`+`@latest`
        * ex: `npm i moment@latest`
    * Obs: ao realizar alterações nas versões, caso a alteração não conste no arquivo `package.json` e talvez esteja no `package-lock.json`
__Como Remover Pacotes__
-[ ] Desistalar pacotes
    * Execute no terminal: `npm uninstall`+`nome do pacote a ser desistalado`
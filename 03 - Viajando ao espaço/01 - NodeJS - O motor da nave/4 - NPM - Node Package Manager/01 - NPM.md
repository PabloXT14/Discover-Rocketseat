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
- [ ] O que é o diretório node_modules
- [ ] O que é o arquivo package-lock.json
- [ ] Criar scripts para rodar com o npm
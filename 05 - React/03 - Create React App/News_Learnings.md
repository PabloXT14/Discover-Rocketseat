# News Learnings

## Importar React e JSX para seu projeto sem precisar colocar as tags <scripts>

- Basta você exeutar a seguinte sequencia de comando (no terminal e dentro do diretório do seu projeto):
- obs: será necessário ter *Node >= 10.16 e npm >= 5.6* na sua máquina
```
$ npx create-react-app meu-app
(depois de instalar todos os pacotes na pasta 'meu-app' criada, execute os comandos seguintes para executar o projeto)
$ cd meu-app
& npm start
```

## Como otimizar o Projeto React para um ambiente de produção (ex: publicar no seu servidor na internet)

- Observe que a construção do nosso projeto em React no ambiente desenvolvimento não é otimizada. Para criar uma construção de produção (projeto React mais otmizado para ambiente de construção - ex: publicar no seu servidor na internet), use o seguinte comando dentro do diretório do projeto com React.(depois de executado ele vai gerar uma pasta chamada build, com apenas os arquivos necessários dentro dela)
```
$ npm run build
```
- Mas para você não precisar alterar o localização local das importanções de scripts(que gerenciam o React) dentro do index.html gerado, basta criar a seguinte linha de comando dentro do arquivo package.json antes de executar o *npm run build*. Veja o exemplo:
```
{ 
  "homepage": ".", ====> linha a ser criada
  "name": "meu-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {...}
}
```
- Depois de todas as alterações necessárias feitas todos os arquivos gerados dentro da pasta *build* podem ser enviados daquele geito para seu servidor na internet que vai rodar sem erro.
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

- Observe que a construção do nosso projeto em React no ambiente desenvolvimento não é otimizada. Para criar uma construção de produção (projeto React mais otmizado para ambiente de construção - ex: publicar no seu servidor na internet), use o seguinte comando dentro do diretório do projeto com React.(depois de executado ele vai gerar uma pasta chamada 'build', com apenas os arquivos necessários dentro dela)
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

## Quais são os arquivos principais que você deve editar ao criar um Projeto React com o comando que baixa/prepara o React e o JSX de forma automática?
- **App.js**: que cuidara agora do que irá aparecer na parte do HTML através JS.
- **App.css**: cuidara da estilisação (CSS) da nossa página.

## Componentes e Propriedades
- **Componentes**: Componentes permitem você dividir a UI em partes independentes, reutilizáveis e pensar em cada parte isoladamente, consiste básicamente em armazenar elementos(ex: <header>,<div>,<ul>) em script qualquer que criarmos, exportar os elementos em uma _função_ desse script (_export deafult funcionName_)/ou em uma _classe_ e importar o mesmo script no App.js, para conseguirmos acessar de forma mais organizadas os elementos. Ex:
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- **Propriedades**: _props_ é uma abreviação de properties, ou propriedades, são informações que podem ser passadas para um componente(como argumento). Pode ser uma string, um número, até mesmo uma função. Este valor pode então ser utilizado pelo componente que a recebe
```js
class Welcome extends React.Component {
  constructor(props) {
    super(props)//enviando as <props> para a classe pai, para poderem ser renderizadas depois
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
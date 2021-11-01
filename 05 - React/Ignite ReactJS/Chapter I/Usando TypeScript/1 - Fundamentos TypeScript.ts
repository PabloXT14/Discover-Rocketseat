/* TYPESCRIPT
- Definição:
    * O TypeScript é um superset(conjunto/pacote) do JS, que busca melhorar ainda mais a produtividade de quem trabalha com o JS.
    * Em sua forma simples, o JS não nos permite a utilização de interfaces de forma clara, por exemplo, além de apresentar uma "tipagem fraca", o que prejudica o desenvolvimento em escala de aplicações.
    * O Typescript visa contornar esses problemas adicionando uma série de funcionalidades, que se perderão, uma vez que o código final se torna Javascript quando transpilado posteriormente

    * Basicamente O TypeScript nos permite adicionar tipagens, ou seja, determinar qual será o formato das informações de uma variável ou parâmetro/argumento de uma função.

- Principais vantagens de utilizar TypeScript:
    * "Uma das maiores é descobrir erros durante a sua implementação", uma vez que é possível utilizar o Intellisense da IDE, permitindo visualizar pontos de melhoria e problemas de compilação
    * O principal foco do Typescript é trazer a tipagem estática para o Javascript, juntando também alguns features para facilitar a aplicação dos conceitos de OOP também
    * Podemos considerar o Typescript como um potencializador da linguagem Javascript
- Veja como utilizar o TypeScript:
*/

// type: serve para declarar alguma tipagem
type User = {
    name: string
    email: string
    address: {
        city: string
        state?: string // "?": em typescritp indica que um campo nao e obrigatorio 
    }
}


// Determinando o parâmetro user com a tipagem <User>
function showWelcomeMessage(user: User) {
    return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`;
}

showWelcomeMessage({
    name: 'John Doe',
    email: 'john@doe.com',
    address: {
        city: 'New York',
        state: 'NY',
    }
})
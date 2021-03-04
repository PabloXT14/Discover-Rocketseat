/*
    ### Buscando e contando dados em Arrays

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

        * Contar o número de categorias e o número de livros em cada categoria
        * Contar o número de autores
        * Mostrar livros do autor Augusto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki a Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
    {
        category: "Livros Infantis",
        books: [
            {
                title: "João e o Pé de Feijão",
                author: "Irmãos Grimm",
            },
            {
                title: "Alice no País das Maravilhas",
                author: "Lewis Carroll",
            },
            {
                title: "Branca de Neve",
                author: "Irmãos Grimm",
            },
            {
                title: "O menino maluquinho",
                author: "Ziraldo Alves Pinto",
            },
            {
                title: "Menina Nina: Duas razões para não chorar",
                author: "Ziraldo Alves Pinto",
            }
        ],
    },
];


// Mostrar total de livros e autores de cada categoria
function countedCategory(booksCat) {

    // Calculando qnt de categorias
    const nCategoty = booksCat.length
    console.log(`Nº de Categorias: ${nCategoty} \n`)

    for(let category of booksCat) {
        console.log(`Categoria - ${category.category}`)

        // Calculando qnt de livros por categoria
        console.log(`- Nº total de livros: ${category.books.length}`)
        
        // Calculando qnt de autores por categoria
        console.log(`- Nº total de autores: ${contAuthor(category)} \n`)

    }

}

// Calculando nº de autores por categoria
function contAuthor(category) {
    let authors = []

    for(let book of category.books) {
        // Verificando se autor já existe ou não na lista
        if(authors.indexOf(book.author) == -1) {
            authors.push(book.author)
        }
       
    }

    return authors.length 
}


// Mostrar livros de um determinado autor
function booksByAuthor(name) {
    let books = []

    console.log(`Livros do(a) autor(a) ${name}:`)

    // Salvando quais livros o autor tem
    for(let category of booksByCategory) {
        for(let book of category.books) {

            if(book.author === name) {
                books.push(book.title)
            }
        }
    }

    // Erro para autor não identificado (lembre-se do thruty)
    if(books.length === 0) {
        throw new Error("Não há nenhum livro desse autor em nosso sistema")
    }

    // Mostrando os livros do autor
    for(let book of books) {
        console.log(`- ${book}`)

    }

}


countedCategory(booksByCategory)

try {
    booksByAuthor('Irmãos  e Grimm')
} catch(error) {
    console.log(error.message)
}




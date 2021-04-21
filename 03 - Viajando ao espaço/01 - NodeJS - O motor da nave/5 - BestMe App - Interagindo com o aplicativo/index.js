const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

// Função Realizar perguta/question
const ask = ( index = 0) => {
    process.stdout.write("\n" + questions[index] + " >")
}

ask()

const answers = []

// Captando os dados de entrada do Terminal (Respostas)
process.stdin.on("data", data => {
    // Guardando Resposta da Question
    answers.push(data.toString().trim())

    // Condição Para Realizar/ou não outra Pergunta
    if(answers.length < questions.length) {
        ask(answers.length)
    } else {
        // Encerrando Aplicação e Mostrando todas as respostas
        // console.log(answers)
        process.exit()
    }
    
})

// Retorno ao Finalizar o Processo/Questionario
process.on('exit', () => {
    console.log(`
      Bacana Dev!

      O que você aprendeu hoje foi:
      ${answers[0]}

      O que te aborreceu e você poderia melhorar foi:
      ${answers[1]}

      O que te deixou feliz hoje:
      ${answers[2]}

      Você ajudou ${answers[3]} pessoa(s) hoje!!!

      Volte amanhã para novas reflexões!!!
    `)
})
/* ### Celsius em Fahrenheit

- Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

C = (F - 32) * 5/9

F = C * 9/5 + 32

*/

function transformTemperature(temperature) {

    // Retirando caracteres indevidos da temp (Relembre: expressões regulares)
    temperature = temperature.replace(/\D+[^°C]/gi, "")

    const celsiusExist = temperature.toUpperCase().includes("°C")
    const fahrenheitExist = temperature.toUpperCase().includes("°F")


    // Fluxo de erro
    if(!celsiusExist && !fahrenheitExist) {
        throw new Error('Grau não identificado!')
    }

    // Fluxo ideal C -> F
    let newTemp = Number(temperature.toUpperCase().replace("°C", ""))
    let formula = (celsius) => celsius * 9/5 + 32
    let signal = '°F'


    // Fluxo alternativo F -> C
    if(fahrenheitExist) {
        newTemp = Number(temperature.toUpperCase().replace("°F", ""))
        formula = (fahrenheit) => (fahrenheit - 32) * 5/9
        signal = '°C'
    }

    return formula(newTemp) + signal

}

try {

    console.log(transformTemperature('50safasfafadfdf°c'))

}catch(error) {
    // console.log(error)//mostra mais detalhes sobre o erro
    console.log(error.message)
}

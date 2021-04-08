function getFlagValue(flag) {
    
    // Resolução 1
    // for(let i=0; i < process.argv.length; i++) {

    //     if(process.argv[i] === flag) {
    //         return process.argv[i+1]
    //     }
    // }

    // Resolução 2
    // pegando index do valor da flag => que o items seguinte do array
    const index = process.argv.indexOf(flag) + 1
    // para retornar o valor da flag
    return process.argv[index]
    
}

// Exportando
module.exports = getFlagValue;
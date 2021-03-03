/*
    Lembrando:
    - Type Conversion (typecasting): feito pelo programador ou máquina
    - Type Coersion: feito pela máquina 
*/

/*
    FALSY:
    Quando um valor é considerado false em contextos onde um booleano é obrigratório ( condicionais e loops ) 

    false
    0
    -0
    ""
    null
    undefined
    NaN

    * Obs: todos este valores citados retornaram em uma condição o valor false/falsy (devido ao Type Coersion)
*/

// console.log(NaN ? 'verdadeiro' : 'falso')


/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um Booleano é obrigatório ( condicionais e loops )
    
    true
    {}
    []
    " "
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

    * Obs: todos este valores citados retornaram em uma condição o valor true/truthy (devido ao Type Coersion)
*/

console.log([] ? 'verdadeiro' : 'falso')

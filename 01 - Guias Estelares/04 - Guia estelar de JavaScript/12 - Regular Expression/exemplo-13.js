/*
    # Grupo e Variável
    - Cada grupo do tipo () representará uma variável, para caso você queira utilizar determinado grupo em um local
    - Veja o exemplo de inverter o padrão da data de EN(yyyy/mm/dd) para BR(dd/mm/yyyy)

*/

const date = "2021/03/08"
const regExp = /([0-9]{4})[/-]([0-9]{2})[/-]([0-9]{2})/
//$1(var1) =  ([0-9]{4}) 
//$2(var2) =  ([0-9]{2})
//$3(var3) =  ([0-9]{2})

console.log(date.replace(regExp, '$3/$2/$1'))


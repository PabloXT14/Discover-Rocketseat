const inputMin = document.querySelector("#min"),
    inputMax = document.querySelector("#max"),
    resultNumb = document.querySelector(".resultNumb"),
    textareaNames = document.querySelector("#names"),
    resultName = document.querySelector(".resultName");


/* # DICAS DE FÓRMULAS (GERAR NÚMEROS)

## Gerando um número aleatório entre dois valores
- O valor retornado será maior ou igual a min, e menor que max

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

## Gerando um número inteiro aleatório entre dois valores
- Este exemplo retorna um número inteiro entre dois valores definidos. O valor não poderá ser menor que min (ou do próximo inteiro maior que min, caso min não seja inteiro), e será menor (mas não igual) a max.

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

## Gerando um número inteiro aleatório entre dois valores, inclusive
- A função getRandomInt() acima tem intervalo com o valor mínimo incluído e o máximo excluído. Mas se você precisar que a função inclua, tanto o mínimo quanto o máximo, em seus resultados? A função getRandomIntInclusive() abaixo faz isso

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

*/



function checkTypeRaffle(typeRaffle) {
    // Number Raffle
    if (typeRaffle == 'numb') {

        if (inputMax.value == '' || inputMin.value == '') return resultNumb.innerHTML = ' ';

        let max = Math.ceil(inputMax.value)
        let min = Math.floor(inputMin.value)
        let preResult = Math.floor(Math.random() * (max - min + 1)) + min;

        resultNumb.innerHTML = `${preResult}`;

    }

    // People Raffle
    if (typeRaffle == 'people') {
        if (textareaNames.value == '') return resultName.innerHTML = '';

        let arrayNames = textareaNames.value.split(",").map(name => name.trim());

        let max = arrayNames.length - 1;
        let min = 0;
        let randomIndiceName = Math.floor(Math.random() * (max - min + 1)) + min;
        // let randomIndiceName = Math.floor(Math.random() * arrayNames.length);

        resultName.innerHTML = arrayNames[randomIndiceName];
    }
}
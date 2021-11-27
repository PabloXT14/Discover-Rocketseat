/* # Objeto Math
- Definição:
    O objeto JavaScript Math permite que você execute tarefas matemáticas em números.

# Propriedades/Métodos +comuns do Objecto Math
  ## Propriedades:
  - Math.PI = return number PI
  - Math.E = Constante de Euler e base dos logaritmos naturais, aproximadamente 2.718
  - Math.SQRT2 = Raiz quadrada de 2, aproximadamente 1.414
  - Math.SQRT1_2 = Raiz quadrada de 1/2; Equivale a 1 dividido pela raiz quadrada de 2, aproximadamente 0.707.
  - Math.LN2 = Logaritmo natural de 2, aproximadamente 0.693
  - Math.LN10 = Logaritmo natural de 10, aproximadamente 2.303
  - Math.LOG2E = Logaritmo de E na base 2, aproximadamente 1.443.
  - Math.LOG10E = Logaritmo de E na base 10, aproximadamente 0.434


  ## Métodos:
  - Math.sqrt(x) = Retorna a raiz quadrada positiva de um número "x"
  - Math.pow(x, y) = Retorna a base x elevada à potência y do expoente, ou seja, x^y
  - Math.random() = Retorna um número pseudo-aleatório entre 0 e 1 (obs: mais não inclui o 1)
    Dica:
        Math.random() * 10 => retorna um número aleatório entre 0 e 10, e assim por diante.

  - Math.round(x) = Retorna o valor arrendodado de x, para o valor inteiro mais próximo.
  - Math.floor(x) = Retorna o maior inteiro que é menor ou igual a um número
  - Math.ceil(x) = Retorna o menor inteiro que é maior ou igual a um número
  - Math.trunc(x) = Retorna a parte inteira de x, removendo quaisquer dígitos fracionários
  - Math.sign(x) = Retorna o sinal de x, indicando se é positivo(1), negativo(-1) ou zero(0)
  - Math.abs(x) = Retorna o módulo, ou valor absoluto(positivo), de um número (|x|)
  - Math.sin(x) = Retorna o seno de um número (\sin x).
  - Math.cos(x) = Retorna o coseno de um número (\cos{x}).
  - Math.min([x[,y[,…]]]) = Retorna o menor dentre os parâmetros recebidos
  - Math.max([x[,y[,…]]]) = Retorna o maior dentre os parâmetros recebidos.
  - Math.log(x) = Retorna o logaritmo natural (\log_ex ou \ln{x}) de um número
  - Math.log2(x) = Retorna o logaritmo de x na base 2 (\log_2 x).
  - Math.log10(x) = Retorna o logaritmo de x na base 10 (\log_{10}x).



  ## Dica de Uma Função Aleatória Adequada
  function getRndInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  */

const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const btnCalc = document.querySelector(".calc");
const resultBox = document.querySelector(".result");


btnCalc.addEventListener("click", () => {
  let value1 = n1.value;
  let value2 = n2.value;

  resultBox.innerHTML = Math.pow(value1, value2);
});
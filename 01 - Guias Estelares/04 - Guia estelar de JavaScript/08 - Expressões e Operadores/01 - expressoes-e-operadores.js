/* Expressões e Operadores

- Expressions
  * é um trecho de código que se resolve/"Resulta em um VALOR". Em outras palavras, torna-se um valor.
  * toda expressão pode ou não terminar com ponto e vírgula
  * Ex: let x = 1;
  * EXPRESSIONS != STATEMENTS(declarações): declarações/instruções executam ações e controlam ações, mas não se tornam valores. Como: if, else, while, for, const x, let b, ...

- Operators
    * No geral são classificados como:
        * Binary: precisa de dois elementos. ex: 1 + 1;
        * Unary: precisa só de um elemento. ex: number++ ou number--;
        * Ternary: precisa de 3 elementos, só um desse tipo. 
          ex: x === 1 ? true : false; 
    * Outras classificações:
        # OPERADORES ARITIMÉTICOS (usados para realizar operações aritiméticas em números):
            + (adição)
            - (subtração)
            * (multiplicação)
            ** (exponencial)
            / (divisão)
            % (módulo - restante da divisão)
            ++ (incremento)
            -- (decremento)
        # OPERADORES DE ATRIBUIÇÃO (atribuem valores a variáveis JavaScript)
            = (atribui valor á uma variável) Ex: x = y
            += (atribuição de adição) Ex: x+=y --> x = x + y
            -= (atribuição de subtração) Ex: x-=y --> x = x-y
            *= (atribuição de multiplicação) Ex: x*=y --> x = x * y
            /= (atribuição de divisão) Ex: x/=y --> x = x / y
            %= (atribuição de módulo) Ex: x%y --> x = x % y
            **= (atribuição de exponecial) Ex: x**y --> x = x**y
        # OPERADORES DE STRING
        - O operador '+' também pode ser usado para adicionar (concatenar) strings)
            var txt1 = "John";
            var txt2 = "Doe";
            var txt3 = txt1 + " " + txt2;
/           /Resultado: "John Doe"

        - O operador += de atribuição também pode ser usado para adicionar (concatenar) strings:
            var txt1 = "What a very ";
            txt1 += "nice day";
            //Resultado: "What a very nice day"

            *Obs: Quando usado em strings, o operador + é chamado de operador de concatenação.

        # ADICIONANDO STRINGS & NÚMEROS:
        - Adicionar dois números retornará a soma, mas adicionar um número e uma string retornará uma string:
            var x = 5 + 5;
            var y = "5" + 5;
            var z = "Hello" + 5;
            //Resultado: 
            10 (number)
            55 (string)
            Hello5 (string)

        # OPERADORES DE COMPARAÇÃO:
            == (igual a)
            === (valor igual e tipo igual)
            != (não igual/diferente)
            !== (valor e tipo não igual)
            > (maior que)
            < (menor que)
            >= (maior que ou igual a)
            <= (menor que ou igual a)
            ? (operador ternário)

        # OPERADORES LÓGICOS:
            && (and/e)
            ||  (or/ou)
            !   (not/não)

        # OPERADOR DE TIPO:

            * typeof (retorna o tipo de uma variável)
            * instanceof (retorna true se um objeto é uma instância de um tipo de objeto)

*/

// Ex. Expression
let number = 2;

// Ex. Operator Binary
console.log(number + 2);

// Ex. Operator Unary
console.log(number++);

// Ex. Operator Ternary
console.log(number === 1 ? true : false);

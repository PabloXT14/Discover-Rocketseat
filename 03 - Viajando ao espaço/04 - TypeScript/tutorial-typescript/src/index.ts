// DECLARANDO TIPAGEM DE FORMA BÁSICA (ex: string, boolean, number, ...)
let x: number = 7;

// x = "test";// vai dar erro pois a tipagem de x é number
console.log(x)

// INFERENCIA E ANNOTATION
let y = 12// ineferencia 

let z: number = 12// annotation

// TIPOS BÁSICOS
let firstName: string = "John Doe";
let age: number = 30;
const isAdmin: boolean = true;

// String != string
console.log(typeof firstName)
console.log(firstName)

// OBJECT & ARRAY
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);
// console.log(myNumbers.toUpperCase());// return error

// TUPLAS(setar o formato dos elemetos de um array)
let myTuple: [number, string, string[]];

// myTuple = [7, "test", [1, 2]];// return error
myTuple = [7, "test", ["a", "b"]];

// OBJECT LITERAL -> {prop: tipe}
const user: { name: string, age: number } = {
    name: "John",
    age: 20
}
console.log(user.name);

//ANY (qualquer tipagem) -> má prática
let a: any = 0;
a = "banana"
a = true
a = []

// UNION TYPE (declarando mais de um tipo)
let id: string | number;
id = 100
id = "ajcodncjdvndskvnsdknvkdsnvk"

// TYPE ALIAS (customizando uma tipagem)
type myIdType = number | string;

const useId: myIdType = 10;
const productId: myIdType = '00001';
const shirId: myIdType = 123;

// ENUM (declara valores padrão)
// ex: tamanho de roups (size: Médio, size: Pequeno)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.M
}

console.log(camisa.size);

// LITERAL TYPES (setando um valor único para uma variável)
let teste: "algumvalor" | null;
// teste = "outrovalor";//return error

// FUNÇÕES
function sum(a: number, b: number) {
    return a + b;
}
console.log(sum(1, 2));

// setando tipagem do retorno da função
function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}
console.log(sayHelloTo('Maicon'));

function logger(msg: string): void {
    console.log(msg)
}
logger("Teste!");

// setando parâmetro com opcional (?)
function greeting(name: string, greet?: string): void {
    console.log(`Olá${greet ? (" " + greet) : ""} ${name}`);
}
greeting("José")
greeting("Maria", "Tudo Bem")


// INTERFACE (declara tipagem customizada)
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}
console.log(sumNumbers({ n1: 2, n2: 3 }));

function multiplieNumber(nums: MathFunctionParams) {
    return nums.n1 * nums.n2
}
console.log(multiplieNumber({ n1: 2, n2: 3 }));

const someNumbers: MathFunctionParams = {
    n1: 10,
    n2: 7
}

console.log(multiplieNumber(someNumbers));
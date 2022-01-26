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

// String(texto em si) != string(tipagem)
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

// OBJECT LITERAL -> {prop: type}
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

// TYPE ALIAS (conjunto de tipagens)
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

// NARROWING (checagem de tipos)
function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número")
}
doSomething(7);
doSomething(true);


// GENERICS (passado entre <> representa que uma função pode trabalhar com qualquer tipo de dado)
// É um pouco melhor que o any, pois ainda declaramos um certa tipagem
function showArraysItems<T>(arr: T[]) {//obs: você passar o que quiser no <>
    arr.forEach(item => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["A", "B", "C"];
showArraysItems(a1);
showArraysItems(a2);
// showArraysItems('');// return error

// CLASSES
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName() {
        console.log(`O nome do usuário é: ${this.name}`);
    }

    showUserRole(canShow: boolean): void {
        if (canShow) {
            console.log(`Este usuário é do tipo: ${this.role}`);
            return;
        }
        console.log('Informação restrita');
    }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);


// INTERFACE EM CLASSES
interface IVehicle {
    brand: string;
    showBrand(): void
}

class Car implements IVehicle {// na classe é obrigado chamar os tipos da interface
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}

const fusca = new Car("VW", 4);
fusca.showBrand();

// HERANÇA
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);// É obrigatório passar os parrametros da classe pai, para ela saber qual o tipo e valor das propriedades.
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 4.0);
a4.showBrand();

// DECORATORS (recurso utilizado para validação de dados atravé de eventos)
// NOTE: para usar esse recurso decomente a linha "experimentalDecorators": true no <tsconfig.json>
function BaseParamters() {// gerando "id" e "data" de forma automatica com constructor Decorator
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@BaseParamters()// maneira de declarar DECORATOR em uma classe
class Person {
    name

    constructor(name: string) {
        this.name = name;
    }
}
const sam = new Person("Sam");
console.log(sam);
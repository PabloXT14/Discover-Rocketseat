"use strict";
let x = 7;
console.log(x);
let y = 12;
let z = 12;
let firstName = "John Doe";
let age = 30;
const isAdmin = true;
console.log(typeof firstName);
console.log(firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
let myTuple;
myTuple = [7, "test", ["a", "b"]];
const user = {
    name: "John",
    age: 20
};
console.log(user.name);
let a = 0;
a = "banana";
a = true;
a = [];
let id;
id = 100;
id = "ajcodncjdvndskvnsdknvkdsnvk";
const useId = 10;
const productId = '00001';
const shirId = 123;
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.M
};
console.log(camisa.size);
let teste;
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo('Maicon'));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    console.log(`Olá${greet ? (" " + greet) : ""} ${name}`);
}
greeting("José");
greeting("Maria", "Tudo Bem");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 2, n2: 3 }));
function multiplieNumber(nums) {
    return nums.n1 * nums.n2;
}
console.log(multiplieNumber({ n1: 2, n2: 3 }));
const someNumbers = {
    n1: 10,
    n2: 7
};
console.log(multiplieNumber(someNumbers));

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(7);
doSomething(true);
function showArraysItems(arr) {
    arr.forEach(item => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["A", "B", "C"];
showArraysItems(a1);
showArraysItems(a2);
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é: ${this.name}`);
    }
    showUserRole(canShow) {
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
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 4.0);
a4.showBrand();
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamters()
], Person);
const sam = new Person("Sam");
console.log(sam);

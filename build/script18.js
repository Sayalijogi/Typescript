"use strict";
//Generics
//Program 1
function identity(arg) {
    return arg;
}
function identity2(a) {
    return a;
}
//Program 2
function identityGenerics(arg) {
    return arg;
}
let a11 = identityGenerics(124);
console.log(a11);
let b11 = identityGenerics('123');
console.log(b11);
//Program 3
class Box {
    constructor(x) {
        this.content = x;
    }
    getContent() {
        return this.content;
    }
}
let numberBox = new Box(123);
console.log(numberBox);
let stringBox = new Box("hello");
console.log(stringBox);
let q8 = numberBox.getContent();
console.log(q);
let qA = stringBox.getContent();
console.log(qA);
//Program 4
class BoxR {
    constructor(x, y) {
        this.content = x;
        this.content2 = y;
    }
    getContent() {
        return this.content;
    }
    getContent2() {
        return this.content2;
    }
}
let numberStringBox = new BoxR(123, "hello");
console.log(numberStringBox);
let numberStringBoxE = new BoxR(123, 235);
console.log(numberStringBoxE);
let numberStringBoxE2 = new BoxR("hello", "hello");
console.log(numberStringBoxE2);
let qS = numberStringBox.getContent();
console.log(qS);
let qR = numberStringBox.getContent2();
console.log(qR);

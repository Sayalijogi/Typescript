"use strict";
//Program 1
function indentity(arg) {
    return arg;
}
let q9 = indentity(34);
console.log(q9);
//Program 2
function indentity2(arg) {
    return arg;
}
let A21 = indentity(23);
console.log(A21);
//Program 3
//T => number
//Y => String
function indentity3(arg) {
    return arg;
}
let q12 = indentity3(12);
let q13 = indentity3("hello");
console.log(q12);
console.log(q13);
//Program 4
function indentity4(arg1, arg2) {
    if (typeof arg1 == 'number' && typeof arg2 == "number") {
        return arg1 + arg2;
    }
    else if (typeof arg1 == "string" && typeof arg2 == "string") {
        return arg1 + arg2;
    }
}
let a6 = indentity4(13, 4);
console.log(a6);
let ab = indentity4("hello", "hello");
console.log(ab);
function indentity5(arg) {
    arg.length;
    return arg;
}
console.log(indentity5("hello"));
//Program 6
class Boxe {
    constructor(a) {
        this.varA = a;
    }
    displayVarA() {
        return this.varA;
    }
}
let obj = new Boxe("hello");
console.log(obj);
let obj2 = new Boxe(1);
console.log(obj2);
let q21 = obj.displayVarA();
console.log(q21);
let q23 = obj.displayVarA();
console.log(q23);

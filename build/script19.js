"use strict";
//Program 1
function greetA(par) {
    return par;
}
let o = greetA(1);
console.log(o);
let p = greetA(true);
console.log(p);
let q = greetA("chinmay");
console.log(q);
function greet2(nme) {
    return nme;
}
let rA = greet2("hello");
console.log(rA);
//Program 2
function greet3(arg) {
    return arg;
}
let q11 = greet3("hello");
console.log(q11);
let q22 = greet3(2);
console.log(q22);
//Program 3
function addEE(p1, p) {
    if (typeof p1 == 'number' && typeof p == 'number') {
        console.log(p + p1);
        return p + p1;
    }
    else if (typeof p1 == 'string' && typeof p == 'string') {
        return p + p1;
    }
}
let q11e = addEE(2, 4);
console.log(q11e);
let q11e1 = addEE("hello", "world");
console.log(q11e1);
//let q11f = addEE<string>("hello","world")
//program 3
class BoxA {
    constructor(co) {
        this.content = co;
    }
    getConten() {
        return this.content;
    }
}
let boxNumber = new BoxA(42);
console.log(boxNumber);
let boxString = new BoxA("hello");
console.log(boxString);

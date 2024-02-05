"use strict";
//Program 1
class DogA {
    constructor(bd) {
        this.breed = bd;
    }
    bark() {
        console.log("woof");
    }
}
let gr = new DogA("GR");
console.log(gr.breed);
gr.bark();
//Program 2
class AnimalA {
    constructor(ty) {
        this.type = ty;
    }
    makeSound() {
        console.log("Make some sound..");
    }
}
class Cat extends AnimalA {
}
let kitty = new Cat("Persian");
kitty.makeSound();
console.log(kitty.type);
//Program 3
class AnimalC {
    constructor(ty) {
        this.type = ty;
    }
    makeSound() {
        console.log("Make some Sound..");
    }
}
class Zebra extends AnimalC {
    constructor(ty, lg) {
        super(ty);
        this.legs = lg;
    }
    makeSound2() {
        console.log("Bray Bray");
    }
    makeSound() {
        console.log("Make some sound.. but from child");
    }
}
let Zebra1 = new Zebra('zebra!', 4);
console.log(Zebra1.legs);
console.log(Zebra1.type);
Zebra1.makeSound();
Zebra1.makeSound2();
//Program 4
class BankAccountA {
    // constructor
    constructor(accH, accN) {
        //Properties
        this.balance = 0;
        this.accHolder = accH;
        this.accName = accN;
        this.IFSCCode = 123;
    }
}
let ICICI = new BankAccountA(123, "chinmay");
//console.log(ICICI.balance)    // private access modifier can access only within its class
// console.log(ICICI.accHolder) // private access modifier can access only within its class
// console.log(ICICI.accName)  // Protected access modifier can be access in inherited class 
console.log(ICICI.IFSCCode); // public access modifier can be access anywhere and in any related class

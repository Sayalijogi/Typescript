"use strict";
//Program 1
// class Dog {
//     //Properties
//     breed:string;
//     constructor(breed:string){
//         this.breed = breed
//     }
//     bark():void{
//         console.log("Woof ...!")
//     }
// }
// let myDog = new Dog("Gold Retriever")
// console.log(myDog.breed)
// myDog.bark()
//Program 2
class Animal {
    constructor(ty) {
        this.type = ty;
    }
    //method
    makeSound() {
        console.log("Some generic sound ..");
    }
}
class Dog extends Animal {
    constructor(ty, ag) {
        super(ty);
        this.age = ag;
    }
    makeSound() {
        console.log("Woof ..");
    }
}
let myDog2 = new Dog("GR", 2);
console.log(myDog2.age);
console.log(myDog2.type);
myDog2.makeSound();
//Program 3
class BankAccount {
    //constructor
    constructor(accH) {
        //Properties
        this.balance = 0;
        this.accountHolder = accH;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
    }
    withDrawl(amount) {
        if (amount < this.balance) {
            this.balance = this.balance - amount;
        }
        else {
            console.log('insufficient funds');
        }
    }
    getBal() {
        return this.balance;
    }
}
let SBI = new BankAccount("chinmay deshpande");
SBI.getBal();

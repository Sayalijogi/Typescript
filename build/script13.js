"use strict";
//Program 1
class Myclass {
    constructor() {
        this.myProperty = "hello";
    }
}
let r = new Myclass();
console.log(r.myProperty);
//Program 2
//private
class Myclass2 {
    constructor() {
        this.myPrivateProperty = "Hello form p";
    }
    //access the private field in public method
    getValue() {
        return this.myPrivateProperty;
    }
}
let b = new Myclass2();
//console.log(b.myPrivateProperty)  //not accessible
console.log(b.getValue());
//Program 3
//Protected
class myClass3 {
    constructor(ag) {
        this.age = ag;
    }
    displayBalance() {
        return 10000;
    }
    displayAge() {
        this.displayBalance();
        return this.age;
    }
}
class myClass4 extends myClass3 {
    displayAge2() {
        //private method and properties are not accessible outside class
        //protected methods and properties are accessible within the inherited properties
        return this.age;
    }
}
let ski = new myClass4(12);
let skill = new myClass3(23);
console.log(ski);
console.log(skill);
//Program 4
//interface ---- complete abstraction 
//partially hide -- abstract class 
class WorldBank {
    displayCountryName() {
        return "India";
    }
}
class SBIeee extends WorldBank {
    loan() {
        console.log("I am loan from SBI");
        return 10;
    }
    save() {
        console.log("I am save from SBI");
        return 20;
    }
    branchName() {
        return "Nagpur";
    }
}
//We cannot have instance of abstract class 
let sbiA = new SBIeee();
console.log(sbiA.branchName());
console.log(sbiA.loan());
console.log(sbiA.save());
console.log(sbiA.displayCountryName());

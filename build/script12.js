"use strict";
//Program 1
class PersonR {
    constructor() {
        this.value = 42;
        this.display1 = () => {
            return "hello";
        };
    }
    display2() {
        console.log("hello");
        return "hello";
    }
}
let sayali = new PersonR;
console.log(sayali.display2());
console.log(sayali.display1());
//Program 2
let divi = (a, b) => {
    console.log("DIE");
    return a * b;
};
let s1 = divi(8, 8);
console.log(s1);
//Program 3
class BankAccountR {
    constructor(acch, accN) {
        //Properties
        this.balance = 0;
        this.accholder = acch;
        this.accName = accN;
        this.IFSCcode = 456;
    }
}
let HDFC = new BankAccountR(456, "sayali");
//console.log(HDFC.balance)
//console.log(HDFC.accholder)
//console.log(HDFC.accName)
console.log(HDFC.IFSCcode);
//Program 4
class MyClass {
    constructor() {
        this.myProperty = "Shinchan";
    }
}
let S = new MyClass();
console.log(S.myProperty);
//Program 5
//Private
class MyClass2 {
    constructor() {
        this.myPrivateProp = "Hello from Private";
    }
    //access the private field in public method
    getvalue() {
        return this.myPrivateProp;
    }
}
let Q = new MyClass2();
//console.log(Q.myPrivateProp)   //not accessible
console.log(Q.getvalue());
//Program 6 
//Protected
class MyClass3 {
    constructor(ag) {
        this.age = ag;
    }
    displayBalance() {
        return 25000;
    }
    displayAge() {
        this.displayBalance();
        return this.age;
    }
}
class MyClass4 extends MyClass3 {
    displayAge2() {
        //private method and properties are not accessible outside class
        //protected methods and properties are accessible with the inherited properties
        return this.age;
    }
}
let Sub = new MyClass4(24);
console.log(Sub);
let Subs = new MyClass3(25);
console.log(Subs);

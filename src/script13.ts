//Program 1
class Myclass {
    public myProperty:string;
    constructor(){
        this.myProperty = "hello"
    }
}
let r = new Myclass()
console.log(r.myProperty)

//Program 2
//private

class Myclass2 {
    private myPrivateProperty:string;
    constructor(){
        this.myPrivateProperty = "Hello form p"
    }

    //access the private field in public method

    public getValue(){
        return this.myPrivateProperty
    }
}
let b = new Myclass2()
//console.log(b.myPrivateProperty)  //not accessible
console.log(b.getValue())

//Program 3

//Protected

class myClass3 {
    protected age:number;
    constructor(ag:number){
        this.age = ag
    }
    private displayBalance():number{
        return 10000
    }
    public displayAge(){
        this.displayBalance()
        return this.age
    }
}

class myClass4 extends myClass3{
    public displayAge2(): number {

        //private method and properties are not accessible outside class
        //protected methods and properties are accessible within the inherited properties

        return this.age
    }
}
let ski = new myClass4(12)
let skill = new myClass3(23)
console.log(ski)
console.log(skill)


//Program 4

//interface ---- complete abstraction 
//partially hide -- abstract class 

abstract class WorldBank {
    //abstract method

    abstract loan():number
    abstract save():number
    displayCountryName(){
        return "India"
    }
}

class SBIeee extends WorldBank {
    loan():number{
        console.log("I am loan from SBI")
        return 10
    }
    save():number{
        console.log("I am save from SBI")
        return 20
    }
    branchName(){
        return "Nagpur"
    }
}

//We cannot have instance of abstract class 
let sbiA = new SBIeee()
console.log(sbiA.branchName())
console.log(sbiA.loan())
console.log(sbiA.save())
console.log(sbiA.displayCountryName())


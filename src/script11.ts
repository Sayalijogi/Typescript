//Program 1

class DogA {
    breed:string
    constructor(bd:string){
        this.breed = bd
    }
    bark():void{
        console.log("woof")
    }
}
let gr = new DogA("GR")
console.log(gr.breed)
gr.bark()

//Program 2

class AnimalA {
    type:string;
    constructor(ty:string){
        this.type = ty
    }
    makeSound():void{
        console.log("Make some sound..")
    }
}

class Cat extends AnimalA{

}
let kitty = new Cat("Persian")
kitty.makeSound()
console.log(kitty.type)

//Program 3

class AnimalC {
    type:string;
    constructor(ty:string){
        this.type = ty
    }
    makeSound():void{
        console.log("Make some Sound..")
    }
}

class Zebra extends AnimalC{
    legs:number 
    constructor(ty:string,lg:number){
        super(ty)
        this.legs = lg
    }
    makeSound2(): void {
        console.log("Bray Bray")
    }
    makeSound(): void {
        console.log("Make some sound.. but from child")
    }
}

let Zebra1 = new Zebra('zebra!',4)
console.log(Zebra1.legs)
console.log(Zebra1.type)
Zebra1.makeSound()
Zebra1.makeSound2()

//Program 4

class BankAccountA {
    //Properties
    private balance: number = 0;
    private accHolder:number;
    protected accName:string;
    public IFSCCode:number
    // constructor
    constructor(accH:number,accN:string){
        this.accHolder = accH
        this.accName = accN
        this.IFSCCode = 123
    }
}

let ICICI = new BankAccountA(123,"chinmay")

//console.log(ICICI.balance)    // private access modifier can access only within its class
// console.log(ICICI.accHolder) // private access modifier can access only within its class
// console.log(ICICI.accName)  // Protected access modifier can be access in inherited class 
console.log(ICICI.IFSCCode)    // public access modifier can be access anywhere and in any related class



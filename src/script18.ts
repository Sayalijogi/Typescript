//Generics
//Program 1

function identity(arg:any):any{
    return arg
}

function identity2(a:number):number{
    return a
}


//Program 2

function identityGenerics<T>(arg:T):T {
    return arg
}
let a11 = identityGenerics<number>(124)
console.log(a11)
let b11 = identityGenerics<string>('123')
console.log(b11)


//Program 3
class Box<T>{
    private content:T
    constructor(x:T){
        this.content = x
    }

    getContent():T{
        return this.content
    }
}
let numberBox = new Box<number>(123)
console.log(numberBox)
let stringBox = new Box<string>("hello")
console.log(stringBox)
let q8 = numberBox.getContent()
console.log(q)
let qA = stringBox.getContent()
console.log(qA)

//Program 4
class BoxR<T,U>{
    private content: T
    private content2:U
    constructor(x: T,y:U) {
        this.content = x
        this.content2 = y
    }

    getContent(): T {
        return this.content
    }

    getContent2(): U {
        return this.content2
    }
}
let numberStringBox = new BoxR<number,string>(123,"hello")
console.log(numberStringBox)
let numberStringBoxE = new BoxR<number,number>(123,235)
console.log(numberStringBoxE)
let numberStringBoxE2 = new BoxR<string,string>("hello","hello")
console.log(numberStringBoxE2)

let qS = numberStringBox.getContent()
console.log(qS)
let qR = numberStringBox.getContent2()
console.log(qR)


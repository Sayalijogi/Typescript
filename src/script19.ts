//Program 1
function greetA(par:any):any {
    return par
}
let o = greetA(1)
console.log(o)
let p = greetA(true)
console.log(p)
let q = greetA("chinmay")
console.log(q)

function greet2(nme:string){
    return nme
}
let rA = greet2("hello")
console.log(rA)

//Program 2
function greet3<T>(arg:T):T {
    return arg
}
let q11 = greet3<string>("hello")
console.log(q11)
let q22 = greet3<number>(2)
console.log(q22)

//Program 3
function addEE<T>(p1:T,p:T){
    if (typeof p1 == 'number' && typeof p == 'number') {
        console.log(p+p1)
        return p + p1
    }
    else if(typeof p1 == 'string' && typeof p == 'string'){
        return p+p1
    }
}
let q11e = addEE<number>(2,4)
console.log(q11e)
let q11e1 = addEE<string>("hello","world")
console.log(q11e1)

//let q11f = addEE<string>("hello","world")

//program 3
class BoxA<T>{
    private content:T;
    constructor(co:T){
        this.content = co
    }
    getConten():T{
        return this.content
    }
}
let boxNumber = new BoxA<number>(42)
console.log(boxNumber)
let boxString = new BoxA<string>("hello")
console.log(boxString)



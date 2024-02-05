//Type assertion
//Program 1

let variable3:any = "Hello Javascript";
let length1:number = (variable3 as string).length

//Program 2
let variable4:any = "Hello Js 4";
let length2:number = (<string>variable4).length

//Program 3
type Person4 = {name:string , age:number}
let variable5:any = {name:"john",age:25}
//let variable6:Person4 = variable5 as Person4
let variable6:Person4 = variable5 as {name:string,age:number}

//Program 4
let arr:any[] = ["chinmay","deshpande",7709192441]
let lastName = (arr[1] as string).toLowerCase().length

//Program 5
type Employee3 = {id:number;nameL:string,salary:number}
let data10:any = {id:1,nameL:"sarika",salary:1000}
let variable7:Employee3 = data10 as Employee3

//Program 6
let aa = document.querySelector('input') as HTMLInputElement
console.log(aa.value)

//Guard type
//Enums


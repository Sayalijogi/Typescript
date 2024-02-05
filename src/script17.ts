//enum 
//Program 1
//numeric
enum Direction {
    Up,
    Down,
    Left,
    Right
}
let movement:Direction = Direction.Down
console.log(movement)

//Program 2
enum Color
{
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
let myFv:Color = Color.Red
console.log(myFv)

// let x = 10
// const x = 10

//Program 3
enum Status {
    Active = 1,
    Inactive = 0,
    Pending = 2
}
let currentStatus:Status = Status.Active
console.log(currentStatus)

//Program 4
enum WeekDay {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thrusday,
    Friday,
    Saturday
}
//retrive the value by index
// let a:WeekDay = WeekDay[new Date().getDay()]

//Program 5
enum Shape2 {
    Circle,
    Square,
    Traingle
}
function draw(shape:Shape2){
    if(shape == 0){
        console.log("calculate circle")
    }
    if(shape == 1){
        console.log("calculate sqaure")
    }
    if(shape == 2){
        console.log("calculate Triangle")
    }
}
draw(Shape2.Circle)
draw(Shape2.Square)
draw(Shape2.Traingle)


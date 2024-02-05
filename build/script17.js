"use strict";
//enum 
//Program 1
//numeric
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let movement = Direction.Down;
console.log(movement);
//Program 2
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
let myFv = Color.Red;
console.log(myFv);
// let x = 10
// const x = 10
//Program 3
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 0] = "Inactive";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
let currentStatus = Status.Active;
console.log(currentStatus);
//Program 4
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
    WeekDay[WeekDay["Monday"] = 1] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
    WeekDay[WeekDay["Thrusday"] = 4] = "Thrusday";
    WeekDay[WeekDay["Friday"] = 5] = "Friday";
    WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
})(WeekDay || (WeekDay = {}));
//retrive the value by index
// let a:WeekDay = WeekDay[new Date().getDay()]
//Program 5
var Shape2;
(function (Shape2) {
    Shape2[Shape2["Circle"] = 0] = "Circle";
    Shape2[Shape2["Square"] = 1] = "Square";
    Shape2[Shape2["Traingle"] = 2] = "Traingle";
})(Shape2 || (Shape2 = {}));
function draw(shape) {
    if (shape == 0) {
        console.log("calculate circle");
    }
    if (shape == 1) {
        console.log("calculate sqaure");
    }
    if (shape == 2) {
        console.log("calculate Triangle");
    }
}
draw(Shape2.Circle);
draw(Shape2.Square);
draw(Shape2.Traingle);

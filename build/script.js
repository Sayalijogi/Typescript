"use strict";
let x = 10;
// program 1
function addition(x, y) {
    return x + y;
}
let q1 = addition(1, 4);
// program 2
function additionB(x, y) {
    return x + y;
}
let q2 = additionB(1, 4);
// program 3
function additionC(x, y) {
    console.log(x + y);
}
additionB(1, 4);
// program 4 
function additionD(x, y, avail, msg) {
    if (avail) {
        console.log(`${msg} ${x + y} `);
    }
}
additionD(12, 3, true, "The addition of two numbers");
// program 5
let numbers = [11, 22, 33, 44, 55];
let names = ["chinmay", "deshpande", "shirish"];
let info = ["chinmay", 23, 45];
let info2 = ["chinmay", 34, true];
// program 6
let info6 = {
    firsName: "chinmay",
    lastName: "deshpande"
};
let info7;
info7 = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 12
};
// 
// Manager , manager , MaNager
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["customer"] = 1] = "customer";
    Roles[Roles["support"] = 2] = "support";
    Roles[Roles["manager"] = 3] = "manager";
})(Roles || (Roles = {}));
if (Roles.admin) {
    console.log("I am admin ");
}
else if (Roles.manager) {
    console.log("I am manager");
}
else if (Roles.customer) {
    console.log('I am customer');
}
else if (Roles.support) {
    console.log("I am at support");
}

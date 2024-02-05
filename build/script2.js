"use strict";
//program  1
//admin,Admin,ADMIN
var roles;
(function (roles) {
    roles[roles["ADMIN"] = 0] = "ADMIN";
    roles[roles["CUSTOMER"] = 1] = "CUSTOMER";
    roles[roles["SUPPORT"] = 2] = "SUPPORT";
    roles[roles["MANAGER"] = 3] = "MANAGER";
    roles[roles["EMPLOYEE"] = 4] = "EMPLOYEE";
})(roles || (roles = {}));
if (roles.ADMIN) {
    console.log("admin");
}
else if (roles.SUPPORT) {
    console.log("support");
}
else if (roles.MANAGER) {
    console.log("manager");
}
if (roles.EMPLOYEE) {
    console.log("employee");
}
var Direction;
(function (Direction) {
    Direction[Direction["EAST"] = 5] = "EAST";
    Direction[Direction["SOUTH"] = 6] = "SOUTH";
    Direction[Direction["WEST"] = 7] = "WEST";
    Direction[Direction["NORTH"] = 8] = "NORTH";
})(Direction || (Direction = {}));
if (Direction.NORTH) {
    console.log("Delhi");
    console.log(Direction.NORTH);
}
if (Direction.EAST) {
    console.log("Bengal");
}
if (Direction.WEST) {
    console.log("Mumbai");
}
if (Direction.SOUTH) {
    console.log("Indira point");
}
var statusCode;
(function (statusCode) {
    statusCode[statusCode["NotFound"] = 404] = "NotFound";
    statusCode[statusCode["Success"] = 200] = "Success";
    statusCode[statusCode["Created"] = 201] = "Created";
    statusCode[statusCode["TimeOut"] = 503] = "TimeOut";
})(statusCode || (statusCode = {}));
console.log(statusCode.NotFound);
let amol = {
    firstName: "chinmay",
    lastName: "deshpande",
    rollNo: 23
};

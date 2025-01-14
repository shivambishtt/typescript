"use strict";
// Typescript have same datatype as javascript but there are some data type thaat are not present in js which are :
// tuples, enums, any, unknown, void, never
// 1 Tuples are basically elements for example we have created an array and in that we can like put string number anything etc. But if you use tuple we can simply specify that this will only contain a single data type like number or string etc.And we can tell the particular fixed type 
let array = ["Shivam", true];
// 2 Enums are basically we can say it is like the blueprint
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "super_guest";
})(UserRoles || (UserRoles = {}));
// 3 Any unknown void null 
// any is basically when we just declare the variable but we don't specify the type then the typescript automatically thinks it as data type of any 
let a; // type any
a = "23";
// unknown is basically when we say the type of data which we are not sure about
let b;
b = 12;
b = "SHIVAM";
//void is simply a function when a function does not returns anything then in typescript we must declare it as void
function sayMyName() {
    // console.log("Shivam")
}
// null 
let age;
// undefined
let undef;
//                                  Type Inferences and Type Annotations
// Type Inference is basically when we don't declare the type of variable but typescript automatically declare its type. It basically refers to the type inference
let inference = 12;
// Type annotations is basically when we declare the type of a variable it is called annotation
let annotation;
annotation = 12;
annotation = "none";
annotation = false;
function getData(obj) {
}
getData({ name: "Shivam", email: "shivam123@gmail.com", password: "1234", salary: 1000000 });

// Typescript have same datatype as javascript but there are some data type thaat are not present in js which are :
// tuples, enums, any, unknown, void, never

// 1 Tuples are basically elements for example we have created an array and in that we can like put string number anything etc. But if you use tuple we can simply specify that this will only contain a single data type like number or string etc.And we can tell the particular fixed type 

let array: [string, boolean] = ["Shivam", true]

// 2 Enums are basically we can say it is like the blueprint
enum UserRoles {
    ADMIN = "admin",
    GUEST = "super_guest"
}

// 3 Any unknown void null 
// any is basically when we just declare the variable but we don't specify the type then the typescript automatically thinks it as data type of any 

let a // type any
a = "23"
// unknown is basically when we say the type of data which we are not sure about
let b: unknown
b = 12
b = "SHIVAM"

//void is simply a function when a function does not returns anything then in typescript we must declare it as void

function sayMyName(): void {
    // console.log("Shivam")
}

// null 
let age: null;

// undefined
let undef: undefined


//                                  Type Inferences and Type Annotations

// Type Inference is basically when we don't declare the type of variable but typescript automatically declare its type. It basically refers to the type inference
let inference = 12

// Type annotations is basically when we declare the type of a variable it is called annotation

let annotation : number | string | boolean
annotation=12
annotation="none"
annotation=false

// Interfaces and Type Aliases
// Basically interface is the way to define the shape of an object or it is a blue print of the object. lets take an example we have created a funcion where in the parameter we have obj it does not have any structure so for the structure purpose we can simply create an interface

interface User{
    name:string,
    email:string
    password:string
    employeeId?:number // ? is basically for the optional
    readonly salary : number
}
function getData(obj:User){

}
getData({name:"Shivam",email:"shivam123@gmail.com",password:"1234",salary:1000000})
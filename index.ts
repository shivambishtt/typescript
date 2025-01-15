// Typescript have same datatype as javascript but there are some data type thaat are not present in js which are :
// tuples, enums, any, unknown, void, never

// 1 Tuples are basically elements for example we have created an array and in that we can like put string number anything etc. But if you use tuple we can simply specify that this will only contain a single data type like number or string etc.And we can tell the particular fixed type 

let array: [string, boolean] = ["Shivam", true]

// 2 Enums are basically we can say it is like the blueprint real life use case error code
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

let annotation: number | string | boolean
annotation = 12
annotation = "none"
annotation = false

//                              Interfaces and Type Aliases
// Basically interface is the way to define the shape of an object or it is a blue print of the object. lets take an example we have created a funcion where in the parameter we have obj it does not have any structure so for the structure purpose we can simply create an interface

interface User {
    name: string,
    email: string
    password: string
    employeeId?: number // ? is basically for the optional
    readonly salary: number
}
function getData(obj: User) {

}
getData({ name: "Shivam", email: "shivam123@gmail.com", password: "1234", salary: 1000000  })



interface Laptop {
    MODEL_NUMBER: number
    DEVICE_NAME: string
}

//                              extending interfaces
interface Keyboard extends Laptop {
    PRICE: number
}

function getLaptopDetails(system: Laptop | Keyboard): void {

}
// getLaptopDetails({MODEL_NUMBER:9750917071067,DEVICE_NAME:"HP ELITE BOOK"})

//                                      3  Type aliases
// It is basically a type for example when we create variable we annotate it its type . Type aliases is that we can just name anything we want for example
// it can be used when we have multiple variable types in order to remove the bulkiness and clean code

// type sankhya =number;
// let num: sankhya

type value = number | string | boolean
function abcd(obj: value) {

}
abcd(true)

//                               4 Union and intersection types
// Union is simply a single | when we specify multiple types of variable
// Intersection is when we want to specify something more and it is denoted by &

type Users = {
    name: string,
    email: string,
}
type Admin = Users & {
    getDetails(user: string): void
}

function qwerty(a: Admin) {
    a.getDetails(a.email = "test@123.com")
}

//              Classes and Objects

class BottleMaker {
    constructor(public name: string, public price: number) {

    }


}
let newBottle = new BottleMaker("Milton", 1599)

// This keyword
//  whenever we are accessing ay variable declared in the class in any function then we must use this keyword
class Abcd {
    name = "Shivam"

    changeName() {
        this.name
    }
}

//  Public private and protected access modifier

// class LaptopMaker{
//     constructor(public BRAND_NAME:string){
//     }
// }
// let newLaptop = new LaptopMaker("HP")

//  private access modifier will if we try to modify the basically any property it will show the error and if its declared as private when we will extend the class we will not be able to use that method or variable name in the extended class   
class LaptopMaker {
    public name: string ="Shivam"
    constructor(public BRAND_NAME: string) {
        this.BRAND_NAME = BRAND_NAME;
    }
}
class hpLaptopMaker extends LaptopMaker {
    constructor(BRAND_NAME: string) {
        super(BRAND_NAME)
    }
    getValue() {
        console.log(this.BRAND_NAME,this.name);

    }
}

let newLaptop = new LaptopMaker("HP")

// protected access modifier is similar to private the basic difference is that in protected access modifier we can access it in own class as well as if any class is extended from it

class HumanMaker{
    
}
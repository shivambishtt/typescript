// Typescript have same datatype as javascript but there are some data type thaat are not present in js which are :
// tuples, enums, any, unknown, void, never

// 1 Tuples are basically elements for example we have created an array and in that we can like put string number anything etc. But if you use tuple we can simply specify that this will only contain a single data type like number or string etc.And we can tell the particular fixed type 
// So the basic usae of tuples is that we need to get the things in ordered way like if it is written string in [0] index it should always return the string otherwise it will throw the error

console.log("Typescript running");

let arr3: [string, number]
arr3 = ["Hell", 69]

let array: [string, boolean] = ["Shivam", true]

// If we create an array this way we will only be able to use only single data type either string or number but if we want that in our array both data type shuld work then we should wrap our number | string with the parnthesis ()
const arr1: (number | string)[] = [1, 2, "3"]

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
getData({ name: "Shivam", email: "shivam123@gmail.com", password: "1234", salary: 1000000 })



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

type ID = number | string;

const userId: ID = 123;   // Valid
const productId: ID = "ABC123"; // Valid

type Username = {
    id: number;
    name: string;
    isActive: boolean;
};

const user: Username = {
    id: 1,
    name: "Shivam",
    isActive: true,
};

type value = number | string | boolean
function abcd(obj: value) {

}
// abcd(true)

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
    public name: string = "Shivam"
    constructor(public BRAND_NAME: string) {
        this.BRAND_NAME = BRAND_NAME;
    }
}
class hpLaptopMaker extends LaptopMaker {
    constructor(BRAND_NAME: string) {
        super(BRAND_NAME)
    }
    getValue() {
        console.log(this.BRAND_NAME, this.name);

    }
}

let newLaptop = new LaptopMaker("HP")

// protected access modifier is similar to private the basic difference is that in protected access modifier we can access it in own class as well as if any class is extended from it


//  Abstract classes and methods
// never use new keyword while using the abstract classes because basically the abstract classes is 
class Payment {
    constructor(protected amount: number, protected account: number) { }
    isPaymentValid(amount: number) {
        return this.amount > 0
    }
}
class Paytm extends Payment {

}

// Functions and callback in ts
// if the function is not either returning something or even doing console.log() we annotate it as never


function notDoingSomething(err: string): never {
    throw new Error(err)
}
notDoingSomething("Oops Error occured")

function sayName(name: string, callback: (value: string) => void) {
    // callback("Hey")
}
sayName("Shivam", (value: string) => {
    // console.log(value);

})

// rest operator

function restParam(...args: number[]): void {

}
restParam(1, 2, 3, 4, 5, 6, 7, 8, 9)

// function overloading is typescript is simply that it allows us to create different signature for different use case which can accept different set of arguments
// to be more precised function overloading means that for a single function we can create two different types

function double(value: number): number
function double(value: string): string

function double(value: number | string): number | string {
    if (typeof value === "number") {
        return value * 2
    }
    else {
        return value + value
    }

}

const doubleNumber = double(2)
const doubleString = double("Two")
// console.log(doubleNumber);
// console.log(doubleString);

// Generics functions interfaces and classes

// for example hume ek function banana hia jo koi bhi value ya type ko accept kar sakta hai toh ab hume pta hai hum isey any se achieve toh kar sakte hain but this will remove all the intellisense when we use value. So in order to solve this problem we use generic function that is when we give the param rather than declaring the type there we can use it in the argument. The industry standard is that it is denoted by <T> 

function acceptValue<T>(value: T) {
}

acceptValue<string>("Shivam")
acceptValue<number>(69)

// generic interface

interface Inter<T> {
    name: string
    age: number
    key: T
}

function asdf(obj: Inter<string>) {

}
asdf({ name: "Shivam", age: 22, key: "afnjkakf" })

// generic classes

class LunchMaker<T> {
    constructor(public value: T) {

    }
}
let lunchOne = new LunchMaker("Cello")
let lunchTwo = new LunchMaker(12)

// type assertion and type casting

// type assertion is simply to tell the typescript the type of particular thing for example

let anyy: any = 12
anyy as number // type casting and assertion

// type guards  and typescript utility types
// So type guards are special functions or expressions that allow you to narrow down the type of a variable at runtime for example in the below function the type can be anything so when we use a. we will only be able to access the methods that are common in both string an number but in order to properly use it we need to narrow it down
// the basic use of type guard is when we are not sure about the type

function narrowDown(a: string | number) {
    if (typeof a === "string") {
        console.log(a.length);

    }
    else {
        console.log(a.toFixed);

    }
}

narrowDown("Shivam")
narrowDown(12)



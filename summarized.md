// 38:50

// never
// function that always throws an error

function throwError(msg:string) : never {
    throw new Error(msg)
}

// function that  has an infinite loop

function infiniteLoop (): never {
    while(true){}
}


// variable that can never have a value

let x: never;

function neverReturns(): never {
    while(true) {}
}

x = neverReturns()



// 42:24
// Array Types
const nums: number[] = [12,4,43];
const str: string[] = ['one', 'two'];
console.log(str)

const items: string[] = [];
items.push('string');
console.log(items)

// Array<>

const createArray : Array<string> = ['oneortwo'];
console.log(createArray)

// 49:45
// Multi-dimensional array - nested []
const singleDi: number[] = [12,34,34,32,21];
const multiDi: number[][] = [[1,2,3]];
const tripleDi: number[][][] = [[[54,543,2,3]]];



// 52:23
// Quick intro to OOP 
// Objects

// syntax 
// type varName (annotations/types) = {property:value};

const person: {firstName: string; lastName: string; location: string, timestamp: string} = {
    firstName: "Max",
    lastName: "Doe",
    location: "London, England",
    timestamp: "1/1/2025"
}

console.log(`Name: ${person.firstName} ${person.lastName}, Location: ${person.location} `)

// objects as function return value
function printUser() : { firstName: string; lastName: string; location: string, } {
    return {
        firstName: "John",
        lastName: "Doe",
        location: "Los Angeles",
    }
}

console.log(printUser())

// 59:00
// Type Aliases
// syntax:
// type keyword followed by name of alias with capital letter(by convention) = type it refers to (e.g string)

type User = {
    name:string;
    age:number;
    location:string
}
const printUserInfo = (user:User) => {
    return `Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`;

};

const res = printUserInfo({name:"Barns", age: 54, location: "Virginia"})
console.log(res)

// 1:04:50
// Type aliases, optional properties for object type
//syntax: 
// adding ? to the end of a property that is optinal, kept for future* usage

type Job = {
    position: string;
    salary?: string;
    department: string;
}
const employee: Job  = {
    position: "Manager",
    department: "A05"
}

console.log(`Position: ${employee.position}, Salary: ${employee.salary}, Department: ${employee.department} `)
// salary is = to underfined as it does not have any value in employee

// 1:08:50
// Inserction Types - combining types
// syntax: 
// Adding & between type names

type UserInfo = {
    first: string;
    last: string;
    age: number;
}

type AccountDetails = {
    email: string;
    password?: string;
}

type KeepUser =  UserInfo & AccountDetails;

const dev: KeepUser  = {
    first: "dev",
    last: "007",
    age: 32,
    email: "dev007@alyxom.com",
    password: "7be5mf_34",

}

console.log(`Email: ${dev.email}, FullName: ${dev.first}${dev.last}`)


// 1:14:00
// Unions (or union types)
// Purpose: allow a variable or parameter to accept multiple types
// Syntax: 
// Adding |

// accepts either string or number values
let password: string | number = 20;

type AllUserInfo = {
    first: string;
    last: string;
    age: number;
}

type  AllAccountDetails = {
    email: string;
    password: string;

}
// note that with & we combined 2 types in  one but here we create a varialbe
// that keeps everything,  instead of using type once again

// u should choose between alluserinfo and allaccoundetails properties
let takeAllUserData:  AllUserInfo | AllAccountDetails = {
   email: "someone@gmail.com",
   password: "johndoe21",

}

// Array  with |
// accepts either string or number values
const items: (number | string)[] = [1,2,432, "hey"];


// Blank space for missed sections ------<>













// 1:33:10
// Going back to OOP

// Classes

class Person {
    tellName:string;
    tellAge:number;

    constructor(name:string, age:number){
        this.tellName = name;
        this.tellAge = age;
    }
}

const person = new Person("John", 54)
console.log(person)

// Access Modifiers
// There are 3 types : public, private, protected
// Public:  members can be accessed from anywhere, both inside and outside the class
// Private: members can only be accessed inside the class, but not outside
// Protected: members can be accessed inside the class as well as any subclasses that extend the class

class Indentity {
    private first:string;
    public last:string;
    protected age: number;

    constructor(first:string, last:string, age:number) {
        this.first = first;
        this.last = last;
        this.age = age;
    }
    getName(): string {
        return `${this.first} ${this.last}, Age: ${this.age} `;
    }
}
let spitBack = new Indentity("John", "Doe", 25);

console.log(spitBack.getName())

class User extends Indentity {
    constructor(first:string, last:string, age:number) {
        super(first, last, age)
    }
}

const dev = new User("Max", "WebDev", 32);
console.log(dev);



// 1:46:22
// Getters and Setters

class Run {
    private property: number = 0;

    get myProperty(): number {
        return this.property;
    }
    set myProperty(value: number) {
        this.property = value;
    }
}

const myInstance = new Run();
console.log(`Current value ${myInstance.myProperty}`);
myInstance.myProperty = 10;
console.log(`Current value ${myInstance.myProperty}`);



// 1:49:50
// Interfaces
// Usage: 
// Commonly used to define structure of objects, and also can used to
// describe the shape of functions and classes
// Interface definition
interface JobCollection {
    position: string;
    payCheck: string;
    expereinceRequired: number;
}

// Usage

const exampleJob: JobCollection = {
    position: "Senior Software Developer",
    payCheck:"10k",
    expereinceRequired: 5,
}

// Interface for a function

interface MathOperation {
    (x:number, y:number): number;
}
// Usage
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5,3));
console.log(subtract(7,2))

// specifying methods inside interface

interface Book {
    author: string;
    edition: string;
    yearOfProduction: number;
    sayAcknowledgement() : void;
}

function acknowledge(book:Book){
    console.log(`Book written by ${book.author}, Edition: ${book.edition}, Year: ${book.yearOfProduction}  `)
    book.sayAcknowledgement()
}

const book: Book = {
    author: "Paul Allen",
    edition: "IV",
    yearOfProduction: 2019,
    sayAcknowledgement(){
        console.log('Huge thanks to the contributors')
    }
}

acknowledge(book);

// example

interface Song {
    songName: string;
    singerName: string;
    printSongInfo(songName: string, singerName: string): string
}

const song1: Song = {
    songName: "Wild",
    singerName: "Imagine",
    printSongInfo: (songName, singerName ) => {
        return  `Song: ${songName}, Singer: ${singerName}

        `
    }
}

console.log(song1.printSongInfo('Wild', "Imagine"))



// extedning intefaces

interface MovieDetails {
    readonly name:string;
    ratings: number;
    printMovie(name:string, price:number, ratings:number): number | string;

}

interface MovieGenra extends MovieDetails {
    genra: string;
}

const movie1: MovieGenra = {
    name: "Star Wars",
    genra: "Action",
    ratings: 8.5,
    printMovie: (name:string, price:number, ratings:number): string | number => {
        return `Movie name: ${name}, Price: ${price}, Ratings: ${ratings}`
    }
}
const res = movie1.printMovie("Jacky Chan", 100, 8 )
console.log(res)

// 2:08:50
// Interfaces with classes
// Extending using implements keyword

interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    start(): void {
        console.log('Car is starting...')
    }
    stop(): void {
        console.log('Car is stopped...')
    }
}

const myCar = new Car();
myCar.start()
myCar.stop()

// 2:10:00
// Declaration merging (re-openning) or interface extension
// Once interface is declared, it can not be direcly modified
// Purpose: this can be useful when u want to add new 
// props or methods to an existing interface without modifying the original declaration;

// Origininal 
interface Auto {
    brand: string;
    start(): void;
}

interface Auto {
    model:string;
    stop(): void;
}

const myAuto: Auto = {
    brand: "Mercedes",
    model: "CLC",
    start() {
        console.log("start")
    },
    stop() {
        console.log("stop")
    }
}

myAuto.start()

myAuto.stop()
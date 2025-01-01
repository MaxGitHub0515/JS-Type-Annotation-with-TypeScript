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







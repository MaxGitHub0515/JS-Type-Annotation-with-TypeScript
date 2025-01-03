// Missed sections :
// 1:19:00
// Literal Types

// 1:23:17
// Tuples

// 1:28:32
// Enums


// 2:13:51
// Generics (the best topic in typescript)
// Allow to create reusable components that
// can work with a variety of types.
// Allow to define func, classes and interfaces
// that can work with different data types without 
// having to duplicate  code

// Campraring regular func with generic func

// Regular Func
function printNumber(item:number, defaultValue:number): [number, number] {
    return [item, defaultValue]
}
const num = printNumber(12, 20);
console.log(num)
// type or T
//Generic Func
function uniqueDataTypesFunc<Type>(item:Type, defaultValue:Type): [Type, Type] {
    return [item, defaultValue]
}

const res = uniqueDataTypesFunc<boolean>(true,false);
const respond = uniqueDataTypesFunc<any>(false,"string");
console.log(respond)

// Generics for  function with interfaces

interface SmartPhone {
    name: string;
    company: string;
    yearOfProduction?: number;

}
const phone = uniqueDataTypesFunc<SmartPhone>(
    {name:"IPhone", company:"Apple"},
    {name:"Samsung Galaxy", company:"Samsung"}

)
// 2:31:53
// generics for function with objects
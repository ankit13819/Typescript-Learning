//Type Assignment

// -Explicit
// -Implicit

//Explicit - Explicit type are easier to read and more intentional
let firstname:string='Hello';

console.log(firstname)

//Implicit Type - guess the type, and it is shorter and easy for writing
let lastName = 'Ji'; 
console.log(lastName)

//Note- Having TS "guess" the type of a value is called infer.

//Unable to infer example
const json = JSON.parse('55');
console.log(json)
//most expect json to be an object, but it can be a string or a number like this example

console.log(typeof json)



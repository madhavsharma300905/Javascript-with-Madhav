const accountId = 12345
let accountEmail = "madhav2google.com"
const accountPassword = "madhav2google.com"
accountCity = "Mumbai"

console.log([accountId, accountEmail, accountPassword, accountCity]);
console.table([accountId, accountEmail, accountPassword, accountCity]);

//Generally we do not use var because of issue in block scope and functional scope , We always use Const and Let
//The const keyword declares the variable that cannot be reassigned , It is block scope
//It is used to declare variables whose values need to remain constant throughout the lifetime of the application.
//The let has block scope and cannot be redeclared in the same scope
//The var keyword is used to declare a variable . It has a function scope or globally scoped variable

//Datatypes : Number , String , Boolean , Undefined : A variable that has been declared but not assigned a value.
//Null : Represents an intentional absence of any value.
//Symbol : Represents unique and immutable values, often used as object keys.

/// (===) This means strictly equal
//Both null and undefined represent "empty" values but are distinct types

console.log(null === undefined)
console.log(5 === "5")
console.log(0 === false)
console.log(null == undefined)
console.log(5 == "5")
console.log(0 == false)

//== (Loose Equality)
//   Compares values, after converting types if needed.

//=== (Strict Equality)
//     Compares both value and type.
//     No type conversion. If types differ, return false

//Undefined means we have declared the variable but not assigned any value
//Null is the representation of empty value

console.log(typeof null); //Null is an object
console.log(typeof undefined); //Undefined itself is a type
// //An object in JavaScript is a data structure used to store related data collections. It stores data as key-value pairs, where each key is a unique identifier for the associated value.
//
// let obj = {
//     name: "Sourav",
//     age: 23,
//     job: "Developer",
//     isLoggedIn: true
// };
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const mySym = Symbol("Key1")
//
// const JsUser = {
//     name : "Madhav",
//     age: 23,
//     job: "Developer",
//     isLoggedIn: true,
//     email : "madhav@google.com",
// }
// console.log(JsUser.mySym);
// console.log(typeof(JsUser.mySym));
// console.log(JsUser.name);
// console.log(JsUser.email);
//
// const mySym = Symbol("Key2")
// const User = {
//     [mySym] : "MyKey2"
// }
// console.log(User[mySym]);
// console.log(typeof User[mySym]);
//
// let obj = new Object();
// obj.name= "Sourav",
//     obj.age= 23,
//     obj.job= "Developer"
//
// console.log(obj);
//
// // Accessing Object Properties
// let obj1 = { name: "Sourav", age: 23 };
// // Using Dot Notation
// console.log(obj1.name);
// // Using Bracket Notation
// console.log(obj1["age"]);
//
// const JsUser = {
//     name : "Madhav",
// }
// JsUser.greeting = function () {
//     console.log("Hello World!");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }
// console.log(JsUser.greetingTwo());
// console.log(JsUser.greeting());
// console.log(JsUser.greeting);

// const tinderUser = new Object() //Singleton object
// const InstaUser = {} //Non Singleton object
// console.log(tinderUser);
// console.log(InstaUser);

// const regularuser = {
//     email : "some@gmail.com",
//     fullName : {
//         userFullname : {
//             firstName : "John",
//             lastName : "Doe",
//         }
//     }
// }
// console.log(regularuser.fullName.userFullname);
// console.log(regularuser.email);

//const returnedTarget = Object.assign(target,source);
// const myobj1 = {1:"a",2:"b"}
// const myobj2 = {3:"c",4:"d"}
// const myobj3 = {myobj1,myobj2}
// console.log(myobj3)
// const obj4 = Object.assign({},myobj1,myobj2) // yaha pe empty object{} target ki tarah act kar rha hai baki my obj1 and my obj2 source ki tarah act kar rha hai
// console.log(obj4)
// const obj5 = {...myobj1,...myobj2}
// console.log(obj5)
const score=500;// here js automatically understands that a number is given
const count= new Number(400)//here we explicitly define that this is a number
console.log(score,count);
console.log(score.toString().length);
console.log(typeof score.toString().length);
console.log(score.toString().concat("hello"));

const a=100.5265475
console.log(a.toFixed(2));// Output:100.53
console.log(a.toFixed(1));// Output:100.5
console.log(a.toFixed(0));// Output:101
console.log(a.toFixed(-1)); //Not applicable

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) // // Imp formula to get a random number between two numbers including the min and max number

let mydate= new Date() // Date is an object in js
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
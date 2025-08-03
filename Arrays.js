// Creating an Empty Array
let s = [];
console.log(s);
console.log(typeof s); // Datatype of an array is Object

// Creating an Array and Initializing with Values
let b = [10, 20, 30];
console.log(b);

//Create using new Keyword (Constructor)
// //The "Array Constructor" refers to a method of creating arrays by invoking the Array constructor function.
let c = new Array(10, 20, 30);
console.log(c);

let ab = ["HTML", "CSS", "JS"];
console.log(ab[0]);
console.log(ab[1]);

const arr=[0,1,2,3,4,5]
// const newArr= new Array(1,2,3,45,69) this is also how we declare an array
console.log(arr,typeof arr)
// Array methods
arr.push(10)// adds element at last
console.log(arr);
arr.pop()// remove element from the last
console.log(arr)
arr.unshift(66)// add element at starting
console.log(arr)
arr.shift()// remove element at starting
console.log(arr)

// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];
console.log("Original Array: " + a);

// Removes and returns the last element
let lst = a.pop();
console.log("After Removing the last: " + a);

// Removes and returns the first element
let fst = a.shift();
console.log("After Removing the First: " + a);

// Removes 2 elements starting from index 1
a.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + a);

// Creating an Array and Initializing with Values
let abc = ["HTML", "CSS", "JS"];
let len = abc.length;
console.log("Array Length: " + len);

let d = ["HTML", "CSS", "JS"];
// Iterating through for loop
for (let i = 0; i < d.length; i++) {
    console.log(d[i])
}

let e = ["HTML", "CSS", "JS"];
console.log(e.toString());
console.log(typeof e);

let g=[1,2,[3,4,[5,6]]]
console.log(g)
console.log(g.flat(1))// flat is used to breakdown array inside array and give a new simplified array
console.log(g.flat(2))// the number inside array tells till how much depth the breakdown must go on.
console.log(g)

//A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
//A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.

const arr1=[25,45,21]
const arr2= arr1.join()// convert the array to string with comma separated value
console.log("arr1",arr1,typeof arr1)
console.log("arr2",arr2,typeof arr2)

//slice , splice
const arr5 = [0,1,2,3,4,5]
console.log("A", arr5);
const myn1 = arr5.slice(1,3)
console.log(myn1);
console.log("B",arr5);
const myn2 = arr5.splice(1,3)
console.log("C",arr5);
console.log(myn2); //Splice manipulates or changes the original array whereas slice does not Change the original array
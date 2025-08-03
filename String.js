// Back ticks (String Interpolation)
const name = "Madhav"
const repoCount = 10
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}!`);
console.log(typeof name)
let s = new String1('abcd');
console.log(s);

const a= new String('Madhav Sharma')
console.log(a.charAt(0));
console.log(a.charAt(1));
console.log(a,typeof a);
// Here the string is acting as an object with key value pair
// This is a better way of declaring string because it allows us to use various operations on the strings using prototyping methods

let b1 = 'JavaScript';
let uCase = b1.toUpperCase();
let lCase = b1.toLowerCase();
console.log(uCase);
console.log(lCase);

let a1 = 'JavaScript Tutorial';
let a2 = a1.substring(0, 10);
console.log(a2);

let c1 = '    Learn JavaScript       ';
let c2 = c1.trim();
console.log(c2);

let d1 = 'gfg';
let d2 = `You are learning from ${d1}`;
console.log(d2);

let e1 = 'Learn HTML at GfG and HTML is useful';
let e2 = e1.replace(/HTML/g, 'JavaScript');
console.log(e2);
// Replace occurrences of a substring using the replace() method. By default, replace() only replaces the first occurrence

let f1 = 'Learn JavaScript';
let f2 = f1[6];
console.log(f2);
f3 = f1.charAt(0);
console.log(f3);

let s1 = "Ajay"
let s2 = new String("Ajay");
console.log(typeof s1);
console.log(typeof s2);

console.log(s1 == s2);  // true
console.log(s1 === s2); // false

const str1 = new String("GeeksforGeeks");
const str2 = "GeeksforGeeks";
console.log(typeof str1);
console.log(typeof str2);
console.log(str1 == str2);
console.log(str1 === str2);

// Strings are automatically converted to string objects when using string methods on them.
// This process is called auto-boxing.

let str = "Mind, Power, Soul";
let part = str.substring(6, 11);
console.log(part);

let str5 = "Mind, Power, Power, Soul";
let part1 = str5.replaceAll("Power", "Space");
console.log(part1);

let geeks = 'stands-for-GeeksforGeeks'
console.log(geeks.split('-'))

// some more methods
const f= "   hello         -world "
console.log(f)
console.log(f.trim())// removes the starting and end spaces from the strings
console.log(f.replace("lo",20));
console.log(f.includes("ell"))
console.log(f.split("-"));
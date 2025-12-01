const person1 = {
    name : "Madhav",
    greet(){
        console.log(`Hello , ${this.name} ! `);
    },
    age : 24,
    profession : "Actor",
    Hobby : "Dancing",
    "place" : "India" ,
    address : {
        city : "Mumbai", //Nested Objects example
        ZIP : 400001
    }
};
person1.greet();
console.log(person1);
console.log(person1.Hobby); // Dot Notation
console.log(Object.keys(person1)); // Method involve is object.keys() , It reurns all the keys/property names of an object as an array
console.log(Object.values(person1)); // Method involve is object.values() , Returns all the values of an object as an array.
console.log(Object.entries(person1)); // Method involve is object.entries , Returns key–value pairs of an object as an array of arrays.
person1.Hobby = "Travelling"; 
person1["place"] = "Uttar Pradesh"; //Bracket Notation
console.log(person1);
console.log(`Hello Future Actor , ${person1.name}`);
console.log(person1.address.city);

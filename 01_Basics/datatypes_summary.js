//primitive -- call by value which means the copied value is given from memory not the original one

// 7 types : String, Number, Boolean, undefined, null, BigInt, Symbol


const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 1234765432173213224n;

// Non Primitive - Call by Reference

// this types of data types of those types where  we can allocate reference in the memory

//Array, Objects, functions

//objects and Browser events are important.


// Is javascript is dynamically type language or statically type language?
//javascript is a dynamically typed language, which means the data types of variables are determined by the value they hold at a runtime .


const heros = ["Gagan", "Alex", "Mandolen"];
let obj = {
    name: "Gagan",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
// myFunction();

// console.log(typeof userEmail );
//returns
//Number = Number
//String = String
//Boolean = Boolean
//Null = object
//undefined = undefined
//BigInt = Bigint
//Symbol = Symbol

//Array = object
//Object = object 
//function = function object


/////////////////////////////////////

//Memory type -
//Stack (Primitive), Heap (Non - Primitive)

let myName = "GaganSunar";
let anothername = myName;
anothername = "Billie Armstrong"

console.log(myName);
console.log(anothername);

let userOne = {
    email : "gagan@gmail.com"
}

let userTwo = userOne;
userTwo.email = "something@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

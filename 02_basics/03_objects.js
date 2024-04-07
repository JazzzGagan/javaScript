// singleton
// Object.create

// object literals

const mySymbol = Symbol("key1")


const JsUser = {
    name: "Gagan",
    "full name": "Gagan Sunar",
    [mySymbol]: "mykey1",
    age: 18,
    location: "kathmandu",
    email: "gagan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(typeof JsUser["full name"]);
// console.log(JsUser[mySymbol]);

JsUser.email = "something@gmail.com";
// Object.freeze(JsUser)
// console.log(JsUser);
JsUser.email = "anotheremail@gmail.com";

JsUser.greeting = function(){
console.log("Hello World!");
}
JsUser.greetingTwo = function(){
 console.log(`Hello ${this.name} Sir`);   
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

console.log(JsUser);




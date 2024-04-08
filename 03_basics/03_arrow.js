const user = {
    username: "Gagan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website.`);
        console.log(this);
    }
    
}
// user.welcomeMessage();
// user.username = "Lalit";
// user.welcomeMessage()

//this hold current context
// browser global object is window object

// console.log(this);

// function coffee(){
//     let username = "gagan"
//     console.log(this.username);
// }
// coffee();
//we cannot access value inside the function using this

// const coffee = function(){
//     let username = "gagan"
//     console.log(this.username);
// }
// coffee();

//Arrow function
// const coffee = () => {
//     let username = "gagan"
//      console.log(this.username);
// }
// coffee();

//explictly return function because we use return keyword
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(2, 4));

//implict return funciton

// const addTwo = (num1, num2) =>  num1 + num2;
//or
// when we use curly braces we have write return keyword compulsory 
// const addTwo = (num1 , num2) => (num1 + num2); //important in react 

// console.log(addTwo(3, 4));

//to return object we use parenthesis also

const addTwo = (num1 , num2) => ({
    username: "gagan"
})

 console.log(addTwo(3, 4));

//  const myArray = [2, 3, 5, 6, 7, 8];
//  myArray.forEach(() => )
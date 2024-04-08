//if
// const temperature = 41

// const isUserLoggedIn = true
// if(temperature < 50){
//     console.log("less then 50");
// }else{
//     console.log("temperature is greater then 50");
// }

//<, > <=, >= , ==, !=, ===, !==

// const score = 200

// if(score > 100){
//     const power = "invisible"
//     console.log(`User power: ${power}`)
// }
//  console.log(`User power: ${power}`);

//shorthand notation

// const balance = 1000

// if(balance > 500) console.log("test"),console.log("test2"), console.log("test3"); not goog practice

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 600){
//     console.log("less than 600");
// }else{
//     console.log("less then 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy cousrses");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}



const name = "Gagan";
const repoCount = 15;

//console.log(name + repoCount + " Value");

//String interpolation
// console.log(`Hello my name is ${name} and my total github repos are ${repoCount}`);

//Another way of declaring String

const gameName = new String("ven gen ce");
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console(gameName.indexOf('a'));

const newString = gameName.substring(1, 7);
// console.log(newString);

const anotherString = gameName.slice(5);
// console.log(anotherString);

//trim function
const newStringOne = "    gagan  ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://gagan.com/gagan%20sunar";

// console.log(url.replace('sunar' , 'something'));

// console.log(url.includes('%20'));
 
// console.log(gameName.split('-'));

// const myString = "the quick brown fox jump over the lady dog";
// const words = myString.split(' ')
// console.log(words);
// console.log(myString.replace('fox', 'dog'));

const stringName = "vengence";
console.log(stringName.valueOf('g'));
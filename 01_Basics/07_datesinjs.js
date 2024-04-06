// Dates

let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

// console.log(typeof(myDate));

// let myarbitrary = new Date(2025, 0 , 23, 5, 3 );

// let myarbitraryDate = new Date("2023-01-04")
 let myarbitraryDate = new Date("01-10-2024")

// console.log(myarbitraryDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myarbitraryDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.getMonth() + 1);

// console.log(`Today day is ${newDate.getDay()} , month is ${newDate.getMonth() + 1} and year is ${newDate.getFullYear()}`);

console.log(newDate.toLocaleString('default', {
    weekday : "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
}))


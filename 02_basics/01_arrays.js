//array

const myArr = [0, 1, 2, 3, 4, 5];

// console.log(myArr[0]);

const newArray = new Array(1, 2, 4, 5);
// console.log(newArray[0]);


//Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(1);
// myArr.shift();

// console.log(myArr.includes(122));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr)

// slice , splice 

console.log("A", myArr);

const myarr1 = myArr.slice(1, 3);

console.log(myarr1);
console.log("B", myArr);

const myarr2 = myArr.splice(1, 3);

console.log("c", myArr);
console.log(myarr2);


//slice dont manipulate original array
//splice manipulate original array

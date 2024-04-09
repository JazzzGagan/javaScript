const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNumbers.map((num) =>  num + 10)

// console.log(newNum);

// const values = myNumbers.forEach( (num) => {
//     console.log(num + 10);
// })

// const myArray = [];
// const values = myNumbers.forEach( (num) => {
//     if(num){
//         myArray.push(num + 10);
//     }
// })
// console.log(myArray);

//chaining

//whenever chaining is created the first map result pass to the second map 

const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbers = newNumbers
            .map( (num) => num * 10 )
            .map( (num) => num + 1 )
            .filter( (num) => num >= 30)


console.log(numbers);
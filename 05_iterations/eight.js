//Array.reduce()

const array = [1, 2, 3, 4, 5, 6];

// const numbers = array.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;

// } , 0)

// console.log(numbers);

// const inital = 0;
// const switchInitail = array.reduce( (acc, currval) => acc + currval , inital);

// console.log(switchInitail);

//using arrow function

const total = array.reduce( (acc, curval) => acc + curval, 0);

// console.log(total);

const shoppingCart = [
    {
        itemName: "web dev course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 1200
    },
    {
        itemName: "Data Science course",
        price: 5999
    },
    {
        itemName: " cyber Security course",
        price: 999
    },
];

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0);

console.log(totalPrice);


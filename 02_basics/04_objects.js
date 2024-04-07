const pathao = new Object()

const tinderUser = {}

tinderUser.id = "1234"
tinderUser.name = "Aron"
tinderUser.isLoggedIn = false

// console.log(pathao);
// console.log(tinderUser);

const regularUser = {
    email: "something@gmail.com",
    fullname: {
        userName:{
            firstname: "gagan",
            lastname: "sunar"
        }
    }
}
console.log(regularUser.fullname.userName);

//if there any no fullname we can use ? to check 
// console.log(regularUser.fullname?.userName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1 ,obj2};
const obj3 = Object.assign(obj1, obj2)
console.log(obj3);

//another good approach to combine objects use {} before objects

// if we are using {} the all objects source are targeted to {}, (target, source), if not then all objects are targeted to the first object.

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

//combine object using spread operator, most of the time we are this syntax rather than above syntax
const obj5 = {...obj1, ...obj2};
console.log(obj5);

const usersInfo = [
    {
        id: 1,
        email: "something@example.com"
    },
    {
        id: 1,
        email: "something@example.com"
    },
    {
        id: 1,
        email: "something@google.com"
    },
    {
        id: 1,
        email: "something@example.com"
    },
    {
        id: 1,
        email: "something@example.com"
    },
    
]

console.log(usersInfo[2].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));//very important 
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const programming = ["js", "php", "nodejs", "django"];

// const values = programming.forEach( (item) => {
//         console.log(item);
//         return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNums.filter( (num) => {
//     return num > 4 ;
// }) 

// const newNums = [];
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num);
//     }
// })
// console.log(newNums);

//+++++++++++++++++++ Filter +++++++++++//

const book = [
    {title: 'Book One', genre: 'Fiction', publish: 1984, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 1960},
    {title: 'Book Three', genre: 'History', publish: 2000, edition: 2004},
    {title: 'Book Four', genre: 'Philosohpy', publish: 2001, edition: 1999},
    {title: 'Book Five', genre: 'Drama', publish: 2004, edition: 1978},
    {title: 'Book Six', genre: 'Novel', publish: 2006, edition: 2004},
    {title: 'Book Seven', genre: 'History', publish: 2008, edition: 2000},
    {title: 'Book Eight', genre: 'Art', publish: 2009, edition: 2005},
];

// const books =  book.filter( (bk) => bk.publish >= 2000 && bk.genre == 'History');

// if we use curly braces then the return is explictly use

const books =  book.filter( (bk) => { return bk.publish == '2000' })

console.log(books);



const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function(value){
// console.log(value);
// })

// coding.forEach((value) => {
//     console.log(value);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: 'Python',
        languagefilename:'py'
    },
    {
        languageName: 'Java',
        languagefilename:'java'
    },
    {
        languageName: 'Csharp',
        languagefilename:'c#'
    },
    {
        languageName: 'javascript',
        languagefilename:'js'
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})
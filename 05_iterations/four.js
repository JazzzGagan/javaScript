const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    py: 'python'
}

for (const key in myObject) {
    // console.log(`${key} shortcut of ${myObject[key]}`);
}

const programming = ["js", "php", "nodejs", "django"];

for(const key in programming){
    // console.log(programming[key]);
}

const map = new Map();
map.set('IN', "India");;
map.set('USA', "united States of America");
map.set("NP", "Nepal");
map.set("IN", "India");

for (const key in map) {
    console.log(key);
}
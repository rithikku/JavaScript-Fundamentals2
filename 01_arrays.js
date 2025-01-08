// Array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr[5]);

// Array methods 
myArr.push(7);
myArr.pop(); // last value jo bhe hogi array ke aandar usko remove kar dega

myArr.unshift(9); // ye value ko pehle add kar deta hai

myArr.shift(); // first value jo bhe hogi array ke aandar usko remove kar dega

console.log(myArr.includes(8)); // mere array me 8 hai ya nahi
console.log(myArr.indexOf(19));

const newArr = myArr.join(); // array ko string me convert kar deta hai
console.log(myArr);
console.log(typeof newArr);

// slice, splice

console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3);

console.log(myn1); // // [ 1, 2 ]
console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3);
console.log("C ", myArr); // C  [ 0, 4, 5 ]
console.log(myn2); // [ 1, 2, 3 ]




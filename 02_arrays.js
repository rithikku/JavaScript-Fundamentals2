const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// first methos 
// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// second method 
// const all_heros = marvel_heros.concat(dc_heros); // Combined two or more string
// console.log(all_heros);

// third method -- Best
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [4, 5, 3]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // Output -- [1, 2, 3,  4, 5, 6, 7, 8, 9, 10, 4, 5, 3]


console.log(Array.isArray("Rithik"));
console.log(Array.from("Rithik")); // convert anything into array
console.log(Array.from({names : "Rithik"})); // return [] -- Interesting case 


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // convert all into the array










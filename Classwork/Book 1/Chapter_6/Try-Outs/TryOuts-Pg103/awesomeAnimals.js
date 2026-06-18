// TRY_IT_OUT No.: 1

// let animals = ["Lion", "Frog", "parrot", "Dog", "Cat"];

// for (let a = 0; a < animals.length;) {
//     animals[a] = "Awesome " + animals[a];
//     a++;
// }

// console.log(animals);


// // TRY_IT_OUT No.: 2
// let alphabet = "abcdefghijklmnopqrstuvwxyz";

// let randomString = "";

// let i = 0;

// while (i < 6) {
//     let r = Math.floor(Math.random() * alphabet.length);
//     randomString += alphabet[r];
//     i++;
// }

// console.log(randomString);

// TRY OUT EXCERCISE No.: 3
let input = "javascript is awesome";
let output = "";

for (let p = 0; p < input.length;) {
    if (input[p] === "a") {
        output += "4";
    } else if (input[p] === "e") {
        output += "3";
    } else if (input[p] === 'i') {
        output += "1";
    } else if (input[p] === "o") {
        output += "0";
    } else {
        output += input[p];
    }
    p++;
}

console.log(output);
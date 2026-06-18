//B-84 & L-57
// Math.random: generates a random number between 0 & 1
console.log("Math.random():", Math.random());

// Math.floor: Rounds a number down to the nearest integer
console.log("Math.floor(Math.random()):", Math.floor(0.18325486157393123));

// Math.floor with multiplication and random.
console.log("Math.floor(Math.random() * 4):", Math.floor(Math.random() * 4));

// Selecting a random word:
var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
var randomIndex = Math.floor(Math.random() * 4);
console.log("Random word:", randomWords[randomIndex]);

console.log("-----------------Random Insult Generator-----------------");

//Creating a random insult:
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Pig", "Stick", "Monkey", "Rat", "Dog"];

// Pick a random body part from the randomBodyParts array:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

// Pick a random adjective from the randomAdjectives array:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

// Pick a random word from the randomWords array:
var randomWord = randomWords[Math.floor(Math.random() * 6)];

// Join all the random strings into a sentence:
var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";

console.log(randomInsult);

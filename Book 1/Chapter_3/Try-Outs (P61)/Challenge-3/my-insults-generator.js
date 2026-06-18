console.log("-----------------My Insult Generator Using CONCATENATION-----------------");

var randomBodyParts = ["Ears", "Legs", "Hands", "Arms", "Eyes", "Teeth"];
var randomAdjectives = ["Smelly", "Lazy", "Stupid", "Dull", "Weird", "Ugly"];
var randomWords = ["Goat", "Donkey", "Monkey", "Rat", "Pig", "Chicken", "Lobster", "Crab", "Fish", "Sloth", "Worm", "Snail"];


var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];


var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];


var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];


var randomInsult = "Your " + randomBodyPart + " look like a " + randomAdjective + " " + randomWord + "'s!!!";

console.log(randomInsult);

console.log("-----------------My Insult Generator Using JOIN-----------------");

var randomBodyParts = ["Ears", "Legs", "Hands", "Arms", "Eyes", "Teeth"];
var randomAdjectives = ["Smelly", "Lazy", "Stupid", "Dull", "Weird", "Ugly"];
var randomWords = ["Goat", "Donkey", "Monkey", "Rat", "Pig", "Chicken", "Lobster", "Crab", "Fish", "Sloth", "Worm", "Snail"];

var randomInsultJoin = [
  "Your",
  randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)],
  randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)],
  "look like a",
  randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)],
  randomWords[Math.floor(Math.random() * randomWords.length)],
  "that lost a fight to a",
  randomWords[Math.floor(Math.random() * randomWords.length)] + "!"
];

var insult = randomInsultJoin.join(" ");
console.log(insult);
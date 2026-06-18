console.log("-----------------My Unique Insult Generator-----------------");


var randomBodyParts = ["Ears", "Legs", "Hands", "Arms", "Eyes", "Teeth"];
var randomAdjectives = ["Smelly", "Lazy", "Stupid", "Dull", "Weird", "Ugly"];
var randomWords = ["Goat", "Donkey", "Monkey", "Rat", "Pig", "Chicken", "Lobster", "Crab", "Fish", "Sloth", "Worm", "Snail"];


var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];


var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];


var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];


var randomInsult = "Your " + randomBodyPart + " look like a " + randomAdjective + " " + randomWord + "'s!!!";

console.log(randomInsult);
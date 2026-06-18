console.log("-----------------My Unique Insult Generator-----------------");


var randomBodyParts = ["Ears", "Legs", "Hands", "Arms", "Eyes", "Teeth"];
var randomAdjectives = ["Smelly", "Lazy", "Stupid", "Dull", "Weird", "Ugly"];
var randomAnimals = ["Goat", "Donkey", "Chicken", "Lobster", "Crab", "Worm", "Snail"];
var randomAnimalParts = ["Head", "Tail", "Wings", "Claws", "Horns", "Beak"];


var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];


var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];


var randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];


var randomAnimalPart = randomAnimalParts[Math.floor(Math.random() * randomAnimalParts.length)];


var randomInsult = "Your " + randomBodyPart + " are more " + randomAdjective + " than a " + randomAnimal + "'s " + randomAnimalPart + "!!!";

console.log(randomInsult);
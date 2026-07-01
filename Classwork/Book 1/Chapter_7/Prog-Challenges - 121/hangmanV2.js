let words = ["javascript", "giraffe", "amazing", "strawberry", "dublin"];

let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];

for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
// let howManyG = 0;
let howManyG = Math.ceil(word.length * 1.5);

while (remainingLetters > 0 && howManyG > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));
    alert("You have " + howManyG + " guesses left!");

    // Take input from the player
    let guess = prompt("Guess a letter, or click Cancel to stop playing.");

    if (guess === null) {
        // Player cancelled — break out of the loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {

        guess = guess.toLocaleLowerCase();
        let found = false;
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                found = true;
                answerArray[j] = guess;
                remainingLetters--;
            } 
        
        }
        if (!found) {
            howManyG--;
        }
    }
    // On to the next guess...
}

// The game loop has finished
alert(answerArray.join(" "));
alert("Done! The answer was " + word);
let words = ["javascript", "monkey", "amazing", "pancake"];

let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];

for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;

while (remainingLetters > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));

    // Take input from the player
    let guess = prompt("Guess a letter, or click Cancel to stop playing.");

    if (guess === null) {
        // Player cancelled — break out of the loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // Update answerArray and remainingLetters for every correct guess
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    // On to the next guess...
}

// The game loop has finished
alert(answerArray.join(" "));
alert("Done! The answer was " + word);
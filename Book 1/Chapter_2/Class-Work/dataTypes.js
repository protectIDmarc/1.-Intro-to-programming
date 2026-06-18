// Store the word "Hello" in a variable called greeting
var greeting = "Hello";

// Store the name "Nick" in a variable called myName
var myName = "Nick";

// Attempt to combine greeting and myName
// NOTE: There's a typo here: "greetiing" should be "greeting"
// Also, this won't add a space between the words
greetiing + myName;

// Get the length (number of characters) in the string "Hello Nick"
'Hello Nick'.length;

// Store the name "Nick" again in a variable
var myName = "Nick";

// Access the character at index 2 (third character) of the string
// Indexing starts at 0: N(0), i(1), c(2), k(3)
myName[2]; // returns "c"

// Perform a mathematical calculation
// Order of operations applies (BODMAS/PEMDAS)
52 * 3 + 5 - 1 / 2;

// Store a person's height
var height = 65;

// Store the minimum height required
var heightRestriction = 60;

// Check if height is greater than heightRestriction
// This returns true or false
height > heightRestriction;

// _____________________________________________________________________

"Hello there, how are you doing?".toUpperCase(); // Converts the string to uppercase
"hELlo THERE, hOW ARE yOu doINg?".toLowerCase(); // Converts the string to lowercase

//-------------------------------------------------------------------------
var mySecretNumber = 5;
var chicoGuess = 3;
mySecretNumber === chicoGuess; // true, because it's the same variable

var mySecretNumber = 5;
var chicoGuess = "5";
mySecretNumber === chicoGuess; // false, because the values are different   


// -------------------------------------------------------------------------

"This is a long string".slice(0,4); // returns "This", because it takes characters from index 0 to 3 (4 is not included)

"Hello, World!".slice(7,12); // returns "World", because it takes characters from index 7 to 11 (12 is not included)



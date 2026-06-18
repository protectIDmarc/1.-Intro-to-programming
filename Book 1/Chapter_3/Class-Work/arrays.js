//1. Creating an Array
var fruits = ['apples', 'bananas', 'cherry'];

//2. Indexing://Each itme in an array is assigned a position number(index)
// starting at 0.
// 
console.log("Value:", fruits[0]);

//3. Changing Elements:
//Update an array element by accessing its index and setting it to a new value.
fruits[1] = 'blueberry'; // Changes 'banana' to 'blueberry'
console.log("New value:", fruits);

//4. Micing Data types and getting value 2:
var mixedArray = [42, 'hello', true, { name: 'John' }, [1,2,3], false, [1, 2, 3, 6]];
console.log("Value:", mixedArray[6][2]);

//5. Finding Length:
console.log ("Fruits Length:", fruits.length); // This will print the number of elements in the fruits array

//6. Adding Elements: Appending new items to the end of an array using push() method.
fruits.push('date'); // Adds 'date' to the end of the fruits array
console.log("After-appending:", fruits);

//7. Removing Elements:
//Remove items from the end or a specific position in the array.
console.log(fruits.pop());
console.log("after-pop:", fruits);

//8. Joining arrays:
var allFruits = fruits.concat(mixedArray);
console.log("Concat:", allFruits);

//9. Finding Index:
console.log("index-Of:", fruits.indexOf('cherry'));

//10. Turning into a String:
//Convert the array into a single string with elements separated by a comma.
var fruitString = fruits.join(', ');
console.log("converted:", fruitString);

//11. Building with push: Add new items to the end of the array.
var numbers = [];
numbers.push(1, 2, 3);

//12. Adding to the beginnimg of the array.
numbers.unshift(8);
console.log("Added:", numbers);




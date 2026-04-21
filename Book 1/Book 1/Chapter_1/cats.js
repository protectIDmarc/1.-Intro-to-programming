//Define a function named drawCats that takes one argument: howManyTimes
var drawCats = function (howManyTimes) {

    //Loop from 0 up to (but not including) howMany Times
    for (var i = 0; i < howManyTimes; i++) {

        //print the current number and a cat face to the console
        console.log(i + " =^.^=");
    }
};

//Call the drawCats function with 10 as the argument
// This will draw (print) 10 cats numbered from 0 to 9
drawCats(10);

//without Function

for (var i = 7; i < 15; i++) {
    //print the current number and a cat face to the console
    console.log(i + " =^.^=");
}
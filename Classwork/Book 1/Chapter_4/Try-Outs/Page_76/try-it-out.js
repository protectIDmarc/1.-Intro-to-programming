//Excercise 1:

let scores = {
    John:  0,
    Nicole: 0,
    Trudie: 0,
    Paul: 0
};


scores.John += 5;
scores.Nicole += 3;
scores.Trudie += 6;
scores.Paul += 4;

console.log(scores);

//Excercise 2:

let myCrazyObject = {
"name": "A ridiculous object",
"some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
"random animal": "Banana Shark"
};

console.log(myCrazyObject["some array"][2].number);

// // Object
// var cat = {
//     legs: 3,
//     "full_name": "Harmoney",
//     colour: "Tortoiseshell"
// };

// console.log(cat);
// console.log(cat['legs']);
// console.log(cat["full name"]);

// let dog = {name: "Pancake", age:6, color: "White", bark: "Yip yap yip!"};
// let cat = {name: "Harmony", age: 8, color: "tortoiseshell"};
// console.log(Object.keys(dog));
// console.log(Object.keys(cat));

// let cat = {};
// cat.name = "Harmony";
// cat.color = "Tortoiseshell";
// cat.legs = 4;
// console.log(cat);
// cat.leg = 3;
// console.log(cat);

// //Adding kerys with dot notation  = p68

// console.log(DocumentFragment.isBrown);

// let dinosaurs = [
// { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
// { name: "Stegosaurus", period: "Late Jurassic" },
// { name: "Plateosaurus", period: "Triassic" }
// ];

// console.log(dinosaurs[0]);
// console.log(dinosaurs[0].name);
// console.log(dinosaurs[1].period);
// console.log(dinosaurs[2].period);

// An Array of friends

// let anna = {name:"Anna", age:11, luckyNumbers:[2, 4, 8, 16]};
// let dave = {name:"Dave", age:5, luckyNumbers:[3, 9, 40]};
// let kate = {name:"Kate", age:9, luckyNumbers:[1, 2, 3]};

// let friends = [anna, dave, kate]

// console.log(friends[1].luckyNumbers[2]);
// console.log(friends[2].name);
// console.log(friends[0].luckyNumbers[2]);


// let owedMoney = {};
// owedMoney["Jimmy"] = 5;
// owedMoney["Anna"] = 7;

// owedMoney["Jimmy"] += 3;
// console.log(owedMoney.Jimmy);
// console.log(owedMoney);

let movies = {
    "Finding Nemo": {
        releaseDate: 2003,
        duration: 100,
        actors: [
            "Albert Brooks",
            "Ellen DeGeneres",
            "Alexander Gould"
        ],
        format: "DVD"
    },
    "Star Wars: Episode VI - Return of the Jedi": {
        releaseDate: 1983,
        duration: 134,
        actors: [
            "Mark Hamill",
            "Harrison Ford",
            "Carrie Fisher"
        ],
        format: "DVD"
    },
    "Harry Potter and the Goblet of Fire": {
        releaseDate: 2005,
        duration: 157,
        actors: [
            "Daniel Radcliffe",
            "Emma Watson",
            "Rupert Grint"
        ],
        format: "Blue-ray"
    }
};

let findingNemo = movies["Finding Nemo"];

console.log(findingNemo.duration);
console.log(findingNemo.format);

let = cars = {
    releaseDate: 2006,
    duration: 117,
    actors: [
        "Owen Wilson",
        "Bonnie Hunt",
        "Paul Newman"
    ],
    format: "Blu-ray"
};
movies["Cars"] = cars;

console.log(movies["Cars"]);

console.log(Object.keys(movies));



// document.getElementById("myName").innerHTML += " Marques";
// //document.getElementById("myName").innerHTML = "Luis Marques";
// document.getElementById("aboutMe").innerHTML = "This is <em><strong> your</em></strong> paragraph!";

let item1;
let item2;
let item3;


document.getElementById("changeList").onclick = newList;

function newList() {
    item1 = prompt("Enter your first item");
    item2 = prompt("Enter your second item");
    item3 = prompt("Enter your third item");
    updateList();
}

function updateList() {
    document.getElementById("firstThing").innerHTML = item1;
    document.getElementById("secondThing").innerHTML = item2;
    document.getElementById("thirdThing").innerHTML = item3;
}
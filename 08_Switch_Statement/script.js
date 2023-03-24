// Erstelle eine Zufallszahl zwischen 5 und 10 

var min = 5;
var max = 10;
var random = (Math.random() * (max - min)) + min;
let randomAsInteger = Math.round(random);
console.log(randomAsInteger);


// Wenn der Wert 10 ist gib aus Ten 
// Wenn der Wert 9 ist gib aus Nine 
// Wenn der Wert 8 ist gib aus Eight 
// etc.

switch (randomAsInteger) {
    case 10:
        console.log("ten");
    break;
    case 9:
        console.log("nine");
    break;
    case 8:
        console.log("eight");
    break;
    case 7:
        console.log("seven");
    break;
    case 6:
        console.log("six");
    break;
    case 5:
        console.log("five");
    break;
}
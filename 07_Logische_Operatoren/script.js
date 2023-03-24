// Erstelle zwei Zufallszahl zwischen 0 und 100 

let random1 = Math.random() * 100;
let randomAsInteger1 = Math.round(random1);
console.log(randomAsInteger1);

let random2 = Math.random() * 100;
let randomAsInteger2 = Math.round(random2);
console.log(randomAsInteger2);

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini" 
if (randomAsInteger1<randomAsInteger2&&randomAsInteger1<50){
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}
 

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30 
// dann gib aus "Eine der beiden ist kleiner als 30" 
if (randomAsInteger1<30,randomAsInteger2<30){
    console.log("Eine der beiden ist kleiner als 30");
}
 

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist 
// dann gib aus "Erste Zahl klein, zweite kein 50iger" 
if (randomAsInteger1<50&&randomAsInteger2!=50){
    console.log("Erste Zahl klein, zweite kein 50iger");
}

//1. Der Fahrer darf das Motorrad fahren, wenn er 24 Jahre oder älter ist oder den Motorradführerschein besitzt
//   aber nicht mehr in der Probezeit ist.  
let fahrer = 23;
let license = "yes";
let probezeit = "no";



if (fahrer>=24||license=="yes"&&probezeit=="no"){
    console.log("Er darf das Motorrad fahren");
} else {
    console.log("Er darf das Motorrad nicht fahren");
}

//2. Das Kind darf den Kinofilm sehen, wenn es älter als 14 ist oder einen Elternteil mit dabei hat.  
let kind = 13;
let elternteil = "no"

if (kind>14||elternteil=="yes"){
    console.log("Er darf den Kinofilm sehen");
} else {
    console.log("Er darf den Kinofilm nicht sehen");
}

//3. Wenn ich den Kurs “Softwarearchitekturen” besuchen möchte, muss ich den Coding Campus besucht haben oder
//   bereits 2 Jahre Berufserfahrung vorweisen.
let codingCampus = "no";
let berufserfahrung = 3;

if (codingCampus=="yes"||berufserfahrung>=2){
    console.log("Er darf den Kurs besuchen")
} else {
    console.log("Er darf den Kurs nicht besuchen")
}

//4. Der Bewerber hat eine Chance auf eine Anstellung wenn er bereits über 5 Jahre Erfahrung vorweist oder 
//   einen Master Abschluss besitzt und auf jeden Fall eine einwandfreies Leumundszeugnis besitzt.

let erfahrung = 6;
let master = "no";
let leumundszeugnis = "yes";

if (erfahrung>5&&leumundszeugnis=="yes"||master=="yes"&&leumundszeugnis=="yes"){
    console.log("Er hat eine Chance")
} else {
    console.log("Er hat keine Chance")
}
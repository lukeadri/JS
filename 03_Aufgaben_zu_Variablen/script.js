// Erstelle eine Variable banana mit dem Wert "Banane"
// Erstelle eine Variable apple mit dem Wert "Apple"
let banana = "Banane";
let apple = "Apple";

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let bananaweight = "0.34";
let appleweight = "0.22";

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
let anzahlBananaProKilo = 1 / bananaweight;
console.log(anzahlBananaProKilo);

let anzahlAppleProKilo = 1 / appleweight;
console.log(anzahlAppleProKilo);

let preisProBanana = bananaPricePerKilo / anzahlBananaProKilo;
console.log(preisProBanana);

let preisProApple = applePricePerKilo / anzahlAppleProKilo;
console.log(preisProApple);

// Preis von 8 Äpfeln
let preis8Apple = preisProApple * 8;
console.log(preis8Apple);

// Preis von 17 Bananen
let preis17Bananen = preisProBanana * 17;
console.log(preis17Bananen);

// Preis von 1 Tonne Äpfel
let preis1000Apple = preisProApple * 1000;
console.log(preis1000Apple);

// Preis von 1 Tonne Bananen
let preis1000Banana = preisProBanana * 1000;
console.log(preis1000Banana);
const productName = "Trådlösa Hörlurar Pro";
let price = 899;
let inStock = true;
const productId = "12345";

console.log("Produktnamn:", productName);
console.log("Pris:", price, "SEK");
console.log("I lager:", inStock);
console.log("Produkt-ID:", productId);

console.log("variabeln price är av typen:", typeof price);
console.log("variabeln inStock är av typen:", typeof inStock);

price = 999;

console.log("Inflation nytt pris på hörlurar:", price);

// productId = "12312"; //assign value to constant ///script.js:18 Uncaught TypeError: Assignment to constant variable.

const features = ["Brusreducering", "Vattentålig"];
console.log("Features vanlig verision:", features);

features.push("Lång Batteritid");
console.log("FEATURES nya ultra pro verision med:", features);

const content = [];

const productC = "Produktnamn:" + productName;
const priceC = "Pris:" + price + "SEK";
const stockC = "I lager:" + inStock;
const idC = "Produkt-ID:" + productId;
const featuresC = "Funktioner:" + features;

content.push(productC, priceC, stockC, idC, featuresC);

let body = document.querySelector("body");
console.log(body);

for (let i = 0; i < content.length; i++) {
  body.innerHTML += `<h3>${content[i]}</h3>`;
}

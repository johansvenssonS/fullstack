let products = [];

let productClock = {
  name: "Klocka",
  price: 1600,
  inStock: false,
};
let productLamp = {
  name: "Lampa",
  price: 499,
  inStock: true,
};

products.push(productClock, productLamp);
console.log(products);

for (prod of products) {
  console.log(`Produkt:${prod.name}, Pris:${prod.price}kr`);
  if (prod.inStock) {
    let stockMsg = "Finns i lager!";
    printStock(stockMsg);
    // console.log("Finns i lager!");
  } else {
    // console.log("inte i lager");
    let stockMsg = "inte i lager!";
    printStock(stockMsg);
  }
}

function printStock(msg) {
  for (letter in msg) {
    console.log(msg[letter]);
  }
}

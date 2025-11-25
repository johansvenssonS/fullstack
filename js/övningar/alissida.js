// Del 2: Skriv en Klass
// Skapa en class med namnet Inventory.

// 1. En constructor() som skapar en tom array this.items = [].
// 2. En vanlig metod addItem(item) som lägger till item i this.items.
// 3. En vanlig metod getTotalItems() som returnerar this.items.length.
// 4. En pil-metod listItemsArrow = () => { ... } som returnerar en sträng med alla item-namn, kommaseparerade (t.ex. "Sword,Shield")

class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
    return this.items;
  }

  getTotalItems() {
    return this.items.length;
  }

  listItemsArrow = () => {
    let res = "";
    for (let item of this.items) {
      res += item + ",";
    }
    let str = res.substring(0, res.length - 1);
    return str;
  };
}

let x = new Inventory();

x.addItem("Sword");
x.addItem("Sheild");
x.addItem("Helmet");
x.addItem("Trousers");
console.log(x);
console.log(x.listItemsArrow());

// Del 2: Skriv en Klass
// Skapa en class med namnet Car.

// 1.En constructor(brand, year) som sätter this.brand och this.year.
// 2. En metod getDetails() som returnerar en sträng, t.ex: "Märke: Volvo, År: 2022".

class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  getDetails() {
    return `Märke: ${this.brand}, År: ${this.year}`;
  }
}

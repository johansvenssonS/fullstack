class Spelare {
  constructor(namn) {
    this.namn = namn;
    this.hp = 100;
  }

  takeDamage = (amount) => {
    this.hp = this.hp - amount;
    return this.hp;
  };

  getHP = () => {
    return this.hp;
  };
}

let jonte = new Spelare("Jonte");

console.log(jonte.getHP());
console.log(typeof jonte.takeDamage);
console.log(jonte.getHP());

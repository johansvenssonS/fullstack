// --- Setup (Nytt tema: Spelvärld) ---
const gameWorlds = [
  {
    id: "w1",
    name: "Eldoria",
    population: 1500,
    zones: [
      {
        id: "z1-a",
        name: "Fire Valley",
        safe: false,
        loot: [{ item: "Ruby", value: 100 }],
      },
      {
        id: "z1-b",
        name: "Ashfall",
        safe: false,
        loot: [
          { item: "Obsidian", value: 50 },
          { item: "Coal", value: 5 },
        ],
      },
    ],
  },
  {
    id: "w2",
    name: "Aquaheim",
    population: 800,
    zones: [
      {
        id: "z2-a",
        name: "Coral City",
        safe: true,
        loot: [{ item: "Pearl", value: 200 }],
      },
    ],
  },
];

const player = {
  username: "RiftWalker",
  level: 55,
  inventory: [
    { item: "Health Potion", quantity: 10 },
    { item: "Sword", quantity: 1 },
  ],
  currentZone: gameWorlds[0].zones[1], // Ref: Ashfall
};

// --- Funktioner ---
function getWorldPopulation(world) {
  return world.population;
}

const findAllLootItems = (arrOfWorlds) => {
  let res = [];
  for (world of arrOfWorlds) {
    for (zone of world.zones) {
      for (loot of zone.loot) {
        res.push(loot.item);
      }
    }
  }
  return res;
};

let x = findAllLootItems(gameWorlds);
console.log(x);

function findAllLootItems1(arrOfWorlds) {
  let res = [];
  for (world of arrOfWorlds) {
    for (zone of world.zones) {
      for (loot of zone.loot) {
        res.push(loot.item);
      }
    }
  }
  return res;
}

let y = findAllLootItems1(gameWorlds);

console.log(y);

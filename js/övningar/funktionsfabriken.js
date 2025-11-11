////// 1 Beräkna Area
////////////////Parameter
const area = (width, height) => {
  return width * height;
};
///////////////////ARGUMENT
let square = area(10, 5);
console.log(square);

/////////////////////2 Hitta Största talet

const findLargestNumber = (arr) => {
  let flag = 0;
  for (const num of arr) {
    if (num > flag) {
      flag = num;
    }
  }
  return flag;
};

let largest = findLargestNumber([5, 2, 9, 1, 4, 22, 143, 2]);
console.log(largest);

///3.Upprepa meddelelande
const repeatMessage = (message, times) => {
  for (let i = times; i > 0; i--) {
    console.log(message);
  }
};

let rop = repeatMessage("Hello World!", 5);

// let str = ["hej", "svejs"];
// console.log(str[1][0]);
// let res = "";
// let bool = true;
// let Bool = false;

// res += bool + " " + Bool + " ";

// console.log(res);

const getUsersOverAge = (arr, age) => {
  let res = [];
  for (const user of arr) {
    if (user.age > age) {
      res.push(user.name);
    }
  }
  return res;
};

const users = [
  { id: 1, name: "Alex", level: "premium", age: 30 },
  { id: 2, name: "Bea", level: "basic", age: 25 },
  { id: 3, name: "Carl", level: "premium", age: 40 },
];

let x = getUsersOverAge(users, 25);
console.log(x);

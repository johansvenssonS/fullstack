///////////1
for (let i = 10; i > 0; i--) {
  console.log(i);
}

///////////2

let arr = [2, 4, 6, 8];
let sum = 0;

for (num of arr) {
  sum += num;
}
console.log(sum);

///3
let star1 = "*";
let art = " ";
for (let i = 0; i < 5; i++) {
  art += star1;
  console.log(art);
}

// ///egen lek "\n"
let star = "*";
let row = "";

function createRow() {
  for (let i = 0; i < 5; i++) {
    row += star;
  }
}
let dist5 = "     ";
let dist3 = "   ";

createRow();
createH();

function createH() {
  let msg = "";
  for (let i = 0; i < 8; i++) {
    if (i === 3 || i === 4) {
      msg += row + row + row + dist3 + row + row + dist5 + dist5 + row + "\n";
      continue;
    }
    if (i === 0 || i === 7) {
      msg += row + dist5 + row + dist3 + row + row;
      if (i === 0) {
        msg += dist5 + row + row; //J
      } else {
        msg += dist5 + row + "**";
      }
      msg += "\n";
      continue;
    }
    if (i === 6) {
      msg +=
        row +
        dist5 +
        row +
        dist3 +
        row +
        dist5 +
        dist3 +
        "***" +
        dist3 +
        row +
        "\n";
      continue;
    }

    msg += row + dist5 + row + dist3 + row + dist5 + dist5 + dist5 + row + "\n";
  }
  console.log(msg);
}

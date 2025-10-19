const body = document.querySelector("body");
const button = document.querySelector("#theme-switcher");

button.addEventListener("click", themeSwitch);

function themeSwitch() {
  document.body.classList.toggle("dark-theme");
  console.log("hej");
}

const yellowBtn = document.querySelector("#yellow");
yellowBtn.addEventListener("click", () => selectColor(yellowBtn));
const redBtn = document.querySelector("#red");
redBtn.addEventListener("click", () => selectColor(redBtn));
const blueBtn = document.querySelector("#blue");
blueBtn.addEventListener("click", () => selectColor(blueBtn));
const greenBtn = document.querySelector("#green");
greenBtn.addEventListener("click", () => selectColor(greenBtn));

function selectColor(cButton) {
  const button = document.querySelector("#theme-switcher");
  button.style.backgroundColor = cButton.id;
}

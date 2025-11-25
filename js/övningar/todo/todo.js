createList = () => {
  let container = document.querySelector(".container");
  let list = document.createElement("div");
  list.classList.add("toDo");
  container.appendChild(list);
  console.log(container);
  console.log(list);
};

let x = createList();

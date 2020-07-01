const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ul = document.querySelector("ul#ingredients");

const createList = function (array) {
  const div = document.createElement("div");
  for (let i = 0; i < array.length; i += 1) {
    const li = document.createElement("li");
    li.textContent = `${array[i]}`;
    div.appendChild(li);
  }

  return div;
};

const list = createList(ingredients);

ul.append(list);

console.log(ul);

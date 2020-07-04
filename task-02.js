const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ul = document.querySelector("ul#ingredients");

function crt(element) {
  const li = document.createElement("li");
  li.textContent = `${element}`;
  return li;
}

const list = ingredients.map((item) => {
  return crt(item);
});

ul.append(...list);

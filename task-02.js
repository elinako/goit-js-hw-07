const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ul = document.querySelector("ul#ingredients");

// const createList = function (array) {
//   const div = document.createElement("div");
//   for (let i = 0; i < array.length; i += 1) {
//     const li = document.createElement("li");
//     li.textContent = `${array[i]}`;
//   }
//   ul.appendChild(div);
//   return ul;
// };

// function crt(element) {
//   const li = document.createElement("li");
//   li.textContent = `${element}`;
//   return li;
// }

const list = ingredients.reduce((acc, item) => acc + `<li>${item}</li>`, "");

console.log(list);

ul.insertAdjacentHTML("afterbegin", list);

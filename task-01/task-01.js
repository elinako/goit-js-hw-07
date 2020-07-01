const itemsInCategories = document.querySelector("#categories").children;
const length = itemsInCategories.length;
console.log(`В списе ${length} категории`);

const categories = document.querySelectorAll(".item > h2");

const textOfCategories = categories.forEach((category) =>
  console.log(`Категория: ${category.textContent} `)
);

const itemsInItem = document.querySelectorAll(".item > ul");
const items = itemsInItem.forEach((item) =>
  console.log(`Количество элементов: ${item.children.length}`)
);

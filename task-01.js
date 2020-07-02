const itemsInCategories = document.querySelector("#categories").children;
const length = itemsInCategories.length;
console.log(`В списе ${length} категории`);

const categories = document.querySelectorAll(".item");

const textOfCategories = categories.forEach((category) => {
  console.log(
    `Категория: ${category.querySelector("h2").textContent} `,
    `Количество элементов: ${category.querySelector("ul").children.length}`
  );
});

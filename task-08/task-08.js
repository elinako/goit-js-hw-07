const inputField = document.querySelector("input");
const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const boxFolder = document.getElementById("boxes");
boxFolder.style.display = "flex";

btnRender.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = inputField.value;
  let size = 30;
  for (i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.display = "block";
    box.style.backgroundColor = createColor();
    size += 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxFolder.appendChild(box);
  }
}

function createColor() {
  const R = randomColor(0, 255);
  const G = randomColor(0, 255);
  const B = randomColor(0, 255);
  return `rgb(${R},${G},${B})`;
}

function randomColor(from, to) {
  return Math.random() * (to - from) + from;
}

function destroyBoxes(amount) {
  const element = document.getElementById("boxes");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

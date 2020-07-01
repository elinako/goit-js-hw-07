const decrementation = document.querySelector(
  "button[data-action='decrement']"
);
const incrementation = document.querySelector(
  "button[data-action='increment']"
);

let counterValue = 0;

function decrement(e) {
  const element = document.getElementById("value");
  counterValue -= 1;
  element.textContent = counterValue;
}

function increment(e) {
  const element = document.getElementById("value");
  counterValue += 1;
  element.textContent = counterValue;
}

decrementation.addEventListener("click", decrement);
incrementation.addEventListener("click", increment);

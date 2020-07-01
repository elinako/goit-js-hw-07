const inputItem = document.getElementById("validation-input");
console.log(`inp:`, inputItem.dataset.length);
inputItem.addEventListener("blur", blurring);

function blurring(event) {
  const element = event.currentTarget.value;
  console.log(element.length);
  inputItem.classList.add("invalid");
  if (element.length == inputItem.dataset.length) {
    inputItem.classList.remove("invalid");
    inputItem.classList.add("valid");
  }
}

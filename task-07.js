const fontSizeControler = document.getElementById("font-size-control");

fontSizeControler.addEventListener("input", fontSizeChanger);

let textElement = document.getElementById("text");
textElement.style.fontSize = `${fontSizeControler.value}px`;

function fontSizeChanger(event) {
  const size = event.currentTarget.value;

  textElement.style.fontSize = `${size}px`;
}

const nameInput = document.getElementById("name-input");

nameInput.addEventListener("input", nameChanger);

function nameChanger(event) {
  const nameNew = event.currentTarget.value;

  let name = document.getElementById("name-output");
  if (nameNew.length === 0) {
    name.textContent = "незнакомец";
  } else {
    name.textContent = nameNew;
  }
}

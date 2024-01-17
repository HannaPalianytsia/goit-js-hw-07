function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const inputCount = document.querySelector("#controls>input");
const boxWithBoxes = document.querySelector("div#boxes");

function createBoxes(amount) {
  destroyBoxes();
  const allBoxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    let size = 30 + i * 10;
    box.style.cssText =
      `width: ${size}px; 
      height: ${size}px;
      background-color: ${getRandomHexColor()};`;
    allBoxes.push(box);
  }
  boxWithBoxes.append(...allBoxes);
}
function destroyBoxes() {
  boxWithBoxes.innerHTML = "";
}

btnCreate.addEventListener("click", (event) => { 
  const count = parseInt(inputCount.value, 10);
  if (count >= 1 && count <= 100 && count % 1 === 0) {
    createBoxes(count);
    inputCount.value = "";
  }
  
});
btnDestroy.addEventListener("click", destroyBoxes);

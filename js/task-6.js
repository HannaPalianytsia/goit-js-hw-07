function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const inputCount = document.getElementById("controls").querySelector("input");
const boxWithBoxes = document.querySelector("div#boxes");

function createBoxes(amount) {
  const arrayBoxesCreate = [];
  for (let i = 0; i < amount; i++) {
    arrayBoxesCreate.push('<div class="box"></div>')
  }
  boxWithBoxes.innerHTML = arrayBoxesCreate.join('');
  const arrayBoxesStyles = document.querySelectorAll('div.box');
  let boxWidth = 30;
  for (let i = 0; i < amount; i++) {
    arrayBoxesStyles[i].style.width = `${boxWidth}px`;
    arrayBoxesStyles[i].style.height = `${boxWidth}px`;
    arrayBoxesStyles[i].style.backgroundColor = getRandomHexColor();
    boxWidth += 10;
  }
}
function destroyBoxes() {
  boxWithBoxes.innerHTML = '';
}

btnCreate.addEventListener("click", (event) => { 
  const count = inputCount.value;
  if (count >= 1 && count <= 100 && count % 1 === 0) {
    createBoxes(count);
    inputCount.value = '';
  }
  
});
btnDestroy.addEventListener("click", destroyBoxes);

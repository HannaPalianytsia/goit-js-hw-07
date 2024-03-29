function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function changeBodyColor() {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    document.querySelector("span.color").textContent = newColor;
}

const btnChangeColor = document.querySelector("button.change-color");
btnChangeColor.addEventListener("click", changeBodyColor);
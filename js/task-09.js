const btnChangeColor = document.querySelector('button.change-color');
const bodyEl = document.querySelector('body');
const colorValueUI = document.querySelector('span.color');

btnChangeColor.addEventListener('click', () => {
  colorValueUI.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorValueUI.textContent;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

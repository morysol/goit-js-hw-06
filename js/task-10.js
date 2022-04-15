const controls = {
  inputAmount: document.querySelector('#controls input'),
  boxesUI: document.querySelector('#boxes'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
};

function getInputAmount(params) {
  return document.querySelector('#controls input').value;
}

controls.btnCreate.addEventListener('click', () => {
  controls.boxesUI.insertAdjacentHTML('afterbegin', makeBoxesMarkup(getInputAmount()));
});
controls.btnDestroy.addEventListener('click', () => {
  controls.boxesUI.innerHTML = '';
});

function makeBoxesMarkup(counter) {
  const limit = counter;
  const boxSize = 30;

  let result = '';

  for (let i = 0; i < limit; i += 1) {
    result = `<div style="width: ${boxSize + i * 10}px;
   height: ${boxSize + i * 10}px; background-color: ${getRandomHexColor()}">${result}
  </div>`;
  }

  return result;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

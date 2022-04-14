const refs = {
  inputSizeEl: document.querySelector('#font-size-control'),
  inputSizeElText: document.querySelector('#text'),
};

refs.inputSizeEl.addEventListener('input', event => {
  refs.inputSizeElText.style.fontSize = `${event.currentTarget.value}px`;
});

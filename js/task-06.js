const refs = {
  inputEl: document.querySelector('#validation-input'),
  inputElDataLength: document.querySelector('#validation-input').getAttribute('data-length'),
};

refs.inputEl.addEventListener('blur', event => {
  console.log(event.currentTarget.value.length);
  console.log(refs.inputElDataLength);

  refs.inputEl.classList.add('invalid');
  if (event.currentTarget.value.length === Number.parseInt(refs.inputElDataLength)) {
    refs.inputEl.classList.replace('invalid', 'valid');
  }
});

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = {
    email: event.currentTarget.elements.email.value,
    pass: event.currentTarget.elements.password.value,
  };

  if (formData.email === '' || formData.pass === '') {
    alert('Все поля должны быть заполнены!');
  } else {
    console.log(formData);
    form.reset();
  }
}

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

let formData = {};

function onFormInput(e) {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

returnTextInput();

function returnTextInput() {
  const localFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (localFormData) {
    form.email.value = localFormData.email || '';
    form.message.value = localFormData.message || '';
  }
}

function onFormSubmit(e) {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  console.log(formData);

  e.preventDefault();
  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}

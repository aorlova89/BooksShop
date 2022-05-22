import {
  checkName,
  checkStreet,
  checkHouse,
  checkDate,
  checkPayment,
  checkGifts,
  checkFlat,
  showSuccess, showError
} from './validators.js';


let form = document.forms[0];

let firstName = form.elements.fname;
firstName.addEventListener('blur', function(e) {
  let validator = checkName(e.target.value, 4);
  validator.isValid ? showSuccess(firstName) : showError(firstName, validator.msg);
});

let lastName = form.elements.lname;
lastName.addEventListener('blur', function(e) {
  let validator = checkName(e.target.value, 5);
  validator.isValid ? showSuccess(lastName) : showError(lastName, validator.msg);
});

let street = form.elements.street;
street.addEventListener('blur', function (e) {
  let validator = checkStreet(e.target.value);
  validator.isValid ? showSuccess(street) : showError(street, validator.msg);
});

let house = form.elements.house;
house.addEventListener('blur', function (e) {
  let validator = checkHouse(e.target.value);
  validator.isValid ? showSuccess(house) : showError(house, validator.msg);
});

let flat = form.elements.flat;
flat.addEventListener('blur', function (e) {
  let validator = checkFlat(e.target.value);
  validator.isValid ? showSuccess(flat) : showError(flat, validator.msg);
});

let deliveryDate = form.delivery;
deliveryDate.addEventListener('blur', function (e) {
  let validator = checkDate(e.target.value);
  validator.isValid ? showSuccess(deliveryDate) : showError(deliveryDate, validator.msg);
});

let cashPayment = document.querySelector('#cash');
let cardPayment = document.querySelector('#card');

let selectedGifts = form.gift;

checkGifts(selectedGifts);

let submitBtn = document.getElementById('submit-btn');
form.addEventListener('input', function(e) {
  if (checkName(firstName.value, 4).isValid
    && checkName(lastName.value, 5).isValid
    && checkStreet(street.value).isValid
    && checkHouse(house.value).isValid
    && checkFlat(flat.value).isValid
    && checkDate(deliveryDate.value).isValid
    && checkPayment(cashPayment, cardPayment).isValid
    && document.querySelectorAll('input[type="checkbox"]:checked').length < 3
  ){
    submitBtn.removeAttribute('disabled');
  }
  else {
    submitBtn.setAttribute('disabled', '');
  }
})

form.addEventListener('submit', function (e) {
  let confirmationDiv = document.getElementById('order-confirmation');
  let streetConfirmation = document.getElementById('street-confirmation');
  streetConfirmation.innerText = street.value;

  let houseConfirmation = document.getElementById('house-confirmation');
  houseConfirmation.innerText = house.value;

  let flatConfirmation = document.getElementById('flat-confirmation');
  flatConfirmation.innerText = flat.value;

  let firstNameConfirmation = document.getElementById('name-confirmation');
  firstNameConfirmation.innerText = firstName.value;

  let lastNameConfirmation = document.getElementById('lastname-confirmation');
  lastNameConfirmation.innerText = lastName.value;

  let deliveryDateConfirmation = document.getElementById('expected-delivery-date');
  deliveryDateConfirmation.innerText = deliveryDate.value;

  confirmationDiv.style.display = 'block';
  document.getElementById('order-container').style.display = 'none';

  e.preventDefault();
});




// //todo
// <!--5. form validation-->
// <!--The order form contains fields with own validation rules and Complete button +15-->

// <!--The Complete button is disabled until the user full form with valid information +5-->
//
// <!--If user left the field empty or full of invalid data, this field became red (means red border) and -->
// <!--the validation message (The field is invalid) is appeared. After user fix data and left the field again, -->
// <!--the validation red border and message should disappear. +5-->
//
// <!--After user full all mandatory field with valid information, the Complete button become active. +10-->
//
// <!--After user click on Complete button, he will see the summarized information: for instance, The order created. -->
// <!--The delivery address is Amazing street house 3 flat 10. Customer John Gald. 5-->

import {checkName, checkStreet, checkHouse, checkDate, checkPayment, checkGifts, checkFlat} from './validators.js';
let showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';

  input.style = 'border-color: #ccc'

  let submitBtn = document.getElementById('submit-btn');
  // submitBtn.removeAttribute('disabled');
}

let showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;

  input.style = 'border-color: darkred'
  let submitBtn = document.getElementById('submit-btn');
  submitBtn.setAttribute('disabled', '');
};

let form = document.forms[0];

let firstName = form.elements.fname;
firstName.onblur = function() {
  let validator = checkName(firstName, 4);
  validator.isValid ? showSuccess(firstName) : showError(firstName, validator.msg);
}

let lastName = form.elements.lname;
lastName.onblur = function () {
  let validator = checkName(lastName, 5);
  validator.isValid ? showSuccess(lastName) : showError(lastName, validator.msg);
}

let street = form.elements.street;
street.onblur = function () {
  let validator = checkStreet(street);
  validator.isValid ? showSuccess(street) : showError(street, validator.msg);
}

let house = form.elements.house;
house.onblur = function () {
  let validator = checkHouse(house);
  validator.isValid ? showSuccess(house) : showError(house, validator.msg);
}

let flat = form.elements.flat;
flat.onblur = function () {
  let validator = checkFlat(flat);
  validator.isValid ? showSuccess(flat) : showError(flat, validator.msg);
}

let deliveryDate = form.delivery;
deliveryDate.onblur = function () {
  let validator = checkDate(deliveryDate);
  validator.isValid ? showSuccess(deliveryDate) : showError(deliveryDate, validator.msg);
}

//todo
let cashPayment = document.querySelector('#cash');
let cardPayment = document.querySelector('#card');
// cashPayment.onblur = function() {
//   let validator = checkPayment(cashPayment, cardPayment) ;
//   validator.isValid ? showSuccess(cardPayment) : showError(cardPayment, validator.msg);
// }

let selectedGifts = form.gift;

checkGifts(selectedGifts);



let submitBtn = document.getElementById('submit-btn');
form.addEventListener('input', function() {
  if (checkName(firstName, 4).isValid
    && checkName(lastName, 5).isValid
    && checkStreet(street).isValid
    && checkHouse(house).isValid
    && checkFlat(flat).isValid
    && checkDate(deliveryDate).isValid
    && checkPayment(cashPayment, cardPayment).isValid
    // && checkGifts().isValid
  ){
    submitBtn.removeAttribute('disabled');
  }
  else {
    submitBtn.setAttribute('disabled', '')
  }
})

form.addEventListener('submit', function (e) {
  let confirmationDiv = document.getElementById('order-confirmation');
  let info = `The order has been created. Delivery address is ${street.value} street house ${house.value} flat ${flat.value}. Customer name: ${firstName.value} ${lastName.value}`;
  confirmationDiv.style.display = 'block';
  confirmationDiv.innerText = info;
  document.getElementById('order-container').style.display = 'none';
  e.preventDefault();
});




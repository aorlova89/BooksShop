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

let isRequired = value => value !== '';
let onlyChars = (str) => { return /^[a-zA-Z]+$/.test(str); }
let validFlatNumber = (str) => { return /^([0-9]+-)*[0-9]+$/.test(str); }

let checkName = (element, minLength) => {
  const name = element.value.trim();
  let res = {isValid: false, msg: ''};

  if (!isRequired(name)) {
    res.msg = 'Field cannot be blank';
  } else if (!onlyChars(name)) {
    res.msg = 'Value can only contain letters';
  } else if (name.length < minLength) {
    res.msg = `Value should have at least ${minLength} letters`;
  } else {
    res.isValid = true;
  }
  return res;
}

let checkStreet = (street) => {
  let streetName = street.value.trim();
  let res = {isValid: false, msg: ''};

  if (!isRequired(streetName)) {
    res.msg = 'Field cannot be blank';
  } else if (streetName.length < 5) {
    res.msg = 'Value must have at least 5 characters';
  } else {
    res.isValid = true;
  }
  return res;
}

let checkHouse = (house) => {
  let res = {isValid: false, msg: ''};

  if (!isRequired(house.value)) {
    res.msg = 'Field cannot be blank';
  } else if (house.value.trim() <= 0) {
    res.msg = 'House should be a positive number';
  } else {
    res.isValid = true;
  }
  return res;
}

let checkFlat = (flat) => {
  let res = {isValid: false, msg: ''};

  if (!isRequired(flat.value)) {
    res.msg = 'Field cannot be blank';
  } else if (!validFlatNumber(flat.value)) {
    res.msg = 'Flat should be a positive number, the dash symbol is allowed';
  } else {
    res.isValid = true;
  }
  return res;
}

let checkDate = (deliveryDate) => {
  let today = new Date();
  let nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);
  nextDay.setHours(0, 0, 0, 0);
  let selectedDeliveryDate = new Date(deliveryDate.value);

  let res = {isValid: false, msg: ''};

  if (!isRequired(deliveryDate.value)) {
    res.msg ='Field cannot be blank';
  } else if (selectedDeliveryDate < nextDay) {
    res.msg = 'Delivery Date cannot be earlier than next day';
  } else {
    res.isValid = true;
  }
  return res;
}

let checkPayment = (cashPayment, cardPayment) => {
  let res = {isValid: false, msg: ''};

  if (cashPayment.checked === false && cardPayment.checked === false) {
    res.msg = 'Please select Payment Type';
  } else {
    res.isValid = true;
  }
  return res;
}
//
// let checkGifts = () => {
//   let valid = false;
//   let countOfGifts = 0;
//   selectedGifts.forEach(gift => { if (gift.checked) countOfGifts++;});
//   if (countOfGifts > 2) {
//     showError(document.getElementsByClassName('gift')[3], 'You cannot choose more than 2 gifts');
//   } else {
//     showSuccess(document.getElementsByClassName('gift')[3]);
//     valid = true;
//   }
//
//   return valid;
// }

let checkGifts = (group) => {
  let res = {isValid: false, msg: ''};

	for (let i = 0; i < group.length; i++) {
		group[i].onclick = function() {
			let checkedCount = 0;
			for (let i = 0; i < group.length; i++) {
        checkedCount += (group[i].checked) ? 1 : 0;
			}
			if (checkedCount > 2) {
        // showError(document.getElementsByClassName('gift')[3], 'You cannot choose more than 2 gifts');

        res.msg = 'You cannot choose more than 2 gifts';
        console.log(res.msg)
			} else {
			  res.isValid = true;
        // showSuccess(document.getElementsByClassName('gift')[3]);
        // valid = true;
      }
		}
	}
	return res;
}



export {checkName, checkStreet, checkHouse, checkFlat, checkDate, checkPayment, checkGifts};
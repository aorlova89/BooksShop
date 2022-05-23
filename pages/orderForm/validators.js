let showSuccess = (input) => {
  const formField = input.parentElement;

  formField.classList.remove('error');
  formField.classList.add('success');

  const error = formField.querySelector('small');
  error.textContent = '';
}

let showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove('success');
  formField.classList.add('error');

  const error = formField.querySelector('small');
  error.textContent = message;

  let submitBtn = document.getElementById('submit-btn');
  submitBtn.setAttribute('disabled', '');
};

let isRequired = value => value !== '';
let onlyChars = (str) => { return /^[a-zA-Z]+$/.test(str); }
let validFlatNumber = (str) => { return /^([0-9]+-)*[0-9]+$/.test(str); }
let validStreet = (str) => { return /^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/.test(str); }

let checkName = (name, minLength) => {
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
  let res = {isValid: false, msg: ''};

  if (!isRequired(street.trim())) {
    res.msg = 'Field cannot be blank';
  } else if (street.trim().length < 5) {
    res.msg = 'Value should have at least 5 characters';
  } else if (!validStreet(street)) {
    res.msg = "Value shouldn't have multiple spaces in a row";
  }  else {
    res.isValid = true;
  }
  return res;
}

let checkHouse = (house) => {
  let res = {isValid: false, msg: ''};

  if (!isRequired(house)) {
    res.msg = 'Field cannot be blank';
  } else if (house.trim() <= 0) {
    res.msg = 'House should be a positive number';
  } else {
    res.isValid = true;
  }
  return res;
}

let checkFlat = (flat) => {
  let res = {isValid: false, msg: ''};

  if (!isRequired(flat)) {
    res.msg = 'Field cannot be blank';
  } else if (!validFlatNumber(flat)) {
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
  let selectedDeliveryDate = new Date(deliveryDate);

  let res = {isValid: false, msg: ''};

  if (!isRequired(deliveryDate)) {
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

let checkGifts = (group) => {
  let res = {isValid: false, msg: ''};

  for (let i = 0; i < group.length; i++) {
    group[i].onclick = function() {
      let checkedCount = 0;
      for (let i = 0; i < group.length; i++) {
        checkedCount += (group[i].checked) ? 1 : 0;
      }
      if (checkedCount > 2) {
        showError(document.getElementsByClassName('gift')[3], 'You cannot choose more than 2 gifts');
        res.msg = 'You cannot choose more than 2 gifts';
      } else {
        res.isValid = true;
        showSuccess(document.getElementsByClassName('gift')[3]);
      }
    }
  }
  return res;
}

export {checkName, checkStreet, checkHouse, checkFlat, checkDate, checkPayment, checkGifts, showError, showSuccess};

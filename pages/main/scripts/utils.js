let createDiv = (className) => {
  let divElement = document.createElement('div');
  divElement.classList.add(className);
  return divElement;
}

let createMyNode = (nodeType, className, innerText) => {
  let node = document.createElement(nodeType);
  node.classList.add(className);
  if (innerText) {
    let nodeValue = document.createTextNode(innerText);
    node.appendChild(nodeValue);
  }
  return node;
}

let handleCartBtn = () => {
  let cart = document.getElementById("cart");
  let books = document.getElementById("books-list");

  if (cart.style.display === "block") {
    cart.style.display = "none";
    books.style.width = '100%';
    books.style.display = 'flex';
  } else {
    cart.style.display = 'block';
    cart.style.width = '100';
    books.style.display = 'none';
  }
}

let animateCartIcon = (value) => {
  let cartBtn = document.getElementById('cart-btn');

  cartBtn.classList.remove('item-added-animation');
  setTimeout(function() {cartBtn.classList.add('item-added-animation')}, 0);

  let addedItemsCount = document.querySelector('.items-counter');
  addedItemsCount.innerText = Number(addedItemsCount.innerText) + value;
}

let updateLocalStorageCart = (item, amount) => {
  let currentCart = JSON.parse(localStorage.getItem('cart'));
  currentCart[item.id] = amount;
  localStorage.setItem('cart', JSON.stringify(currentCart));
}

let updateLocalStorageTotal = (changeValue) => {
  let itemsTotalPrice = (localStorage.getItem('itemsTotalPrice'));
  localStorage.setItem('itemsTotalPrice', `${Number(itemsTotalPrice) + Number(changeValue)}`);
}

let updateCartTotal = (items, totalPrice) => {
  let cartTotal = document.querySelector('.cart-total');
  cartTotal.innerText = `You have ${Number(items)} items for a total of $${Number(totalPrice)} in your cart`;
}

let updateQuantity = (action, item) => {
  let itemsCount = localStorage.getItem('itemsCount');
  let currentQuantity = document.querySelector(`.cart-item#${item.id} .quantity-span`).innerText;

  switch (action) {
    case 'increment': {
      document.querySelector(`.cart-item#${item.id} .quantity-span`).innerText = Number(currentQuantity) + 1;
      updateLocalStorageCart(item, Number(currentQuantity) + 1);
      localStorage.setItem('itemsCount', `${Number(itemsCount) + 1}`);
      updateLocalStorageTotal(item.price);
      updateCartTotal(Number(itemsCount) + 1, JSON.parse(localStorage.getItem('itemsTotalPrice')));
      animateCartIcon(1);
      document.querySelector('.decrement-quantity-span').classList.remove('disabled');
      break;
    }
    case 'decrement': {
      document.querySelector(`.cart-item#${item.id} .quantity-span`).innerText = Number(currentQuantity) - 1;
      updateLocalStorageCart(item, Number(currentQuantity) - 1);
      localStorage.setItem('itemsCount', `${Number(itemsCount) - 1}`);
      updateLocalStorageTotal(-item.price);
      updateCartTotal(Number(itemsCount) - 1, JSON.parse(localStorage.getItem('itemsTotalPrice')));
      animateCartIcon(-1);
      if (Number(currentQuantity) - 1 === 1) {
        document.querySelector('.decrement-quantity-span').classList.add('disabled');
      }
      break;
    }
  }
}

export {createMyNode, createDiv, handleCartBtn, animateCartIcon, updateLocalStorageCart, updateLocalStorageTotal, updateCartTotal, updateQuantity};

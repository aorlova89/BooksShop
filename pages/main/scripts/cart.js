import {createDiv, createMyNode, handleCartBtn} from "./utils.js";


let renderCart = () => {
  let cart = createDiv('cart');
  cart.id = "cart";

  let cartContent = createDiv('cart-content');
  let cartHeader = createMyNode('h2', 'cart-header', 'Your cart is empty');
  let cartItems = createDiv('cart-items');
  cartItems.id = 'cart-items';

  let cartTotal = createMyNode('p', 'cart-total', `You have 0 items for a total of $0 in your cart`)

  let cartButtons = createDiv('cart-buttons');

  let closeCart = createMyNode('button', 'close-cart-button', 'Continue Shopping');
  closeCart.addEventListener("click", handleCartBtn);

  let confirmOrder = createMyNode('button', 'confirm-button', 'Confirm Order');
  confirmOrder.id = 'confirm-button';
  confirmOrder.setAttribute('disabled', '');
  confirmOrder.addEventListener("click", handleConfirmOrderBtn);

  cart.appendChild(cartContent);
  cartContent.appendChild(cartHeader);
  cartContent.appendChild(cartItems);
  cartContent.appendChild(cartTotal);
  cartContent.appendChild(cartButtons);
  cartButtons.appendChild(closeCart);
  cartButtons.appendChild(confirmOrder);

  return cart;
}

function handleConfirmOrderBtn() {
  let cartHeader = document.querySelector('.cart-header');
  let confirmBtn = document.getElementById('confirm-button');

  if (cartHeader.innerText === 'Your cart is empty') {
    confirmBtn.setAttribute('disabled', "");
  }

  window.location.replace("../orderForm/orderForm.html");
}

export {renderCart, handleConfirmOrderBtn};

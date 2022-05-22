import {animateCartIcon, createDiv, createMyNode, updateLocalStorageTotal, updateCartTotal, updateQuantity}
from "./utils.js";
import {renderCart} from "./cart.js";


let booksJson = await fetch("../../assets/books.json");
let booksList = await booksJson.json();

function handleAddBtn(id) {
  let selectedBook = booksList.find(b => b.id === id);

  let cartHeader = document.querySelector('.cart-header');
  let cartItems = document.getElementById('cart-items');
  let confirmOrder = document.getElementById('confirm-button');

  if (cartHeader.innerText === 'Your cart is empty') {
    cartHeader.innerText = 'Your Order:';
    confirmOrder.removeAttribute('disabled');
  }

  let currentCart = JSON.parse(localStorage.getItem('cart'));

  if (currentCart.hasOwnProperty(id)) {
    let currentItemQuantity = document.querySelector(`.cart-item#${id} .quantity-span`);
    currentItemQuantity.innerText = Number(currentItemQuantity.innerText) + 1;
    document.querySelector('.decrement-quantity-span').classList.remove('disabled');
    currentCart[id] = currentItemQuantity.innerText;
    localStorage.setItem('cart', JSON.stringify(currentCart));
  } else {
    cartItems.appendChild(renderCartItem(selectedBook, 1));
    currentCart[id] = '1';
    localStorage.setItem('cart', JSON.stringify(currentCart));
  }

  animateCartIcon(1);

  let itemsCount = localStorage.getItem('itemsCount');
  localStorage.setItem('itemsCount', `${Number(itemsCount) + 1}`);

  updateLocalStorageTotal(Number(selectedBook.price));
  updateCartTotal(localStorage.getItem('itemsCount'), localStorage.getItem('itemsTotalPrice'));
}

let renderCartItem = (book, count) => {
  let cartItem = createDiv('cart-item');
  cartItem.setAttribute('id', book.id);
  let cartItemInfo = createDiv('cart-item-info');
  let checkoutInfo = createDiv('checkout-info');

  let img = createMyNode('img', 'item-img', '');
  img.src = book.imageLink;

  let itemDescription = createDiv('item-description');
  itemDescription.appendChild(createMyNode('h4', 'title', book.title));
  itemDescription.appendChild(createMyNode('p', 'author', book.author));
  itemDescription.appendChild(createMyNode('p', 'price', `$${book.price}`));

  let quantityButtons = createDiv('quantity-buttons');
  let decrementButton = createMyNode('span', 'decrement-quantity-span', '-');
  decrementButton.classList.add('disabled')
  decrementButton.onclick = function() { updateQuantity('decrement', book); };

  let incrementButton = createMyNode('span', 'increment-quantity-span', '+');
  incrementButton.onclick = function() { updateQuantity('increment', book); };

  quantityButtons.appendChild(decrementButton);
  quantityButtons.appendChild(createMyNode('span', 'quantity-span', count));
  quantityButtons.appendChild(incrementButton)

  checkoutInfo.appendChild(quantityButtons);

  let removeItemButton = createMyNode('button', 'remove-item-btn', 'Remove Item');
  removeItemButton.onclick = function() { handleDeleteBtn(book); };
  checkoutInfo.appendChild(removeItemButton);

  cartItemInfo.appendChild(img);
  cartItemInfo.appendChild(itemDescription);

  cartItem.appendChild(cartItemInfo);
  cartItem.appendChild(checkoutInfo);

  return cartItem;
}

let handleDeleteBtn = (book) => {
  let cartHeader = document.querySelector('.cart-header');
  let confirmOrder = document.getElementById('confirm-button');
  let cartItemsIcon = document.querySelector('.items-counter');

  let selectedBook = document.querySelector(`.cart-item#${book.id}`);
  selectedBook.remove();

  let localStorageCart = JSON.parse(localStorage.getItem('cart'));
  let selectedItemQuantity = localStorageCart[book.id];

  delete localStorageCart[book.id];
  localStorage.setItem('cart', JSON.stringify(localStorageCart));

  let itemsCount = localStorage.getItem('itemsCount');
  localStorage.setItem('itemsCount', `${Number(itemsCount) - Number(selectedItemQuantity)}`);

  updateLocalStorageTotal(-Number(selectedItemQuantity*book.price));
  updateCartTotal(localStorage.getItem('itemsCount'), localStorage.getItem('itemsTotalPrice'));
  animateCartIcon(-selectedItemQuantity);

  if (document.getElementById('cart-items').childElementCount === 0){
    cartHeader.innerText = 'Your cart is empty';
    confirmOrder.setAttribute('disabled', '');
    cartItemsIcon.innerText = '';
  }
}

let renderBookInfo = (book) => {
  let bookItem = createDiv("book-item");
  bookItem.id = book.id;

  let bookItemData = createDiv('book-item-data');

  let bookImg = document.createElement('img');
  bookImg.src = book.imageLink;

  let bookInfo = createDiv("book-info");
  let title = createMyNode("h4", "title", book.title);
  let author = createMyNode('p', 'author', book.author);
  let price = createMyNode('p', "price", `$${book.price}`);

  bookInfo.appendChild(bookImg);
  bookInfo.appendChild(title);
  bookInfo.appendChild(author);
  bookInfo.appendChild(price);

  bookItemData.appendChild(bookInfo);

  bookItem.appendChild(bookItemData);

  return bookItem;
}

let renderBook = (book) => {
  let renderedBook = new DocumentFragment();

  let bookBlock = renderBookInfo(book);

  let bookActions = createDiv("book-actions");
  let showMoreBtn = createMyNode('button', 'show-more-button', 'Show More');
  showMoreBtn.id = `desc-${book.id}`;
  showMoreBtn.onclick = function () { renderBookDescription(addBtn.id)};

  let addBtn = createMyNode('button', 'add-button', 'Add');
  addBtn.id = book.id;
  addBtn.onclick = function() { handleAddBtn(addBtn.id); }

  bookActions.appendChild(showMoreBtn);
  bookActions.appendChild(addBtn);

  bookBlock.appendChild(bookActions);

  bookBlock.setAttribute('draggable', "true");
  bookBlock.ondragstart = function() { onDragStart(event) };

  renderedBook.appendChild(bookBlock);
  return renderedBook;
}

let renderBookDescription = (bookId) => {
  let selectedBookDescription = booksList.find(b => b.id === bookId).description;

  let descriptionDiv = createMyNode('div', 'book-description', selectedBookDescription);
  let showMoreBtn = document.getElementById(bookId).querySelector('.show-more-button');
  let addBtn = document.getElementById(bookId).querySelector('.add-button');

  if (showMoreBtn.innerText === 'Show More') {
    document.getElementById(bookId).getElementsByClassName('book-item-data')[0].appendChild(descriptionDiv);
    document.getElementById(bookId).getElementsByClassName('book-info')[0].classList.add('overlayed');
    showMoreBtn.innerText = 'Close Description';
    showMoreBtn.style.width = '100%';
    addBtn.style.display = 'none';
    document.querySelectorAll(`.show-more-button:not(#desc-${bookId})`)
      .forEach(el => el.setAttribute('disabled', ''));
    document.querySelectorAll(`.add-button:not(#desc-${bookId})`)
      .forEach(el => el.setAttribute('disabled', ''));
  }
  else {
    document.getElementById(bookId).getElementsByClassName('book-info')[0].classList.remove('overlayed');
    document.getElementById(bookId).getElementsByClassName('book-item-data')[0].lastChild.remove();
    showMoreBtn.innerText = 'Show More';
    showMoreBtn.style.width = '48%';
    addBtn.style.display = 'inline-block';
    document.querySelectorAll(`.show-more-button:not(#desc-${bookId})`)
      .forEach(el => el.removeAttribute('disabled', ''));
    document.querySelectorAll(`.add-button:not(#desc-${bookId})`)
      .forEach(el => el.removeAttribute('disabled', ''));
  }
}

let renderBooksList = () => {
  let mainBlock = createDiv("main");
  let books = createDiv("books-list");
  books.id = 'books-list';

  booksList.forEach((book, index) => {
    book.id = `id-${index}`;
    book.quantity = 0;
    books.appendChild(renderBook(book));
  });

  let searchResultsContainer = createDiv('search-results-container');

  mainBlock.appendChild(searchResultsContainer);
  searchResultsContainer.appendChild(books);
  searchResultsContainer.appendChild(renderCart());

  return mainBlock;
}

function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
}

export {renderBooksList, handleAddBtn};

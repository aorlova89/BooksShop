import {createDiv, createMyNode} from "./utils.js";
import {renderCart, handleConfirmOrderBtn} from "./cart.js";


let booksJson = await fetch("../../assets/books.json");
let booksList = await booksJson.json();

function handleAddBtn(id) {
  let selectedBook = booksList.find(b => b.id === id);

  let cartHeader = document.querySelector('.cart-header');
  let cartItems = document.getElementById('cart-items');
  let confirmOrder = document.getElementById('confirm-button');

  if (cartHeader.innerText === 'Your cart is empty') {
    cartHeader.innerText = 'Your Order:';
  }

  cartItems.appendChild(
    renderBookInfo(selectedBook)
  );

  let itemsCount = document.getElementById('cart-items').children.length;
  let itemsPrices = document.querySelectorAll('.cart-items .price');
  let itemsTotal = 0;

  for (let i = 0; i < itemsPrices.length; i++ ) {
    itemsTotal += Number(itemsPrices[i].innerHTML.substring(1));
  }

  let cartTotal = document.querySelector('.cart-total');
  cartTotal.innerText = `You have ${itemsCount} items for a total of $${itemsTotal} in your cart`

  confirmOrder.removeAttribute('disabled');
  alert(`Item ${selectedBook.title} has been added`);
}

function handleDeleteBtn() {
  let cartHeader = document.querySelector('.cart-header');
  event.target.closest('.book-item').remove();

  if (document.getElementById('cart-items').childElementCount === 0){
    cartHeader.innerText = 'Your cart is empty';
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

  let deleteBtn = document.createElement("i");
  deleteBtn.classList.add('fa-solid', 'fa-xmark');
  deleteBtn.setAttribute('title', "Remove from cart");
  deleteBtn.onclick = handleDeleteBtn;

  bookInfo.appendChild(bookImg);
  bookInfo.appendChild(title);
  bookInfo.appendChild(author);
  bookInfo.appendChild(price);

  bookItemData.appendChild(bookInfo);

  bookItem.appendChild(deleteBtn);
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
  let resultsBlock = createDiv("search-results");
  let books = createDiv("books-list");
  books.id = 'books-list';

  booksList.forEach((book, index) => {
    book.id = `id-${index}`
    books.appendChild(renderBook(book));
  });

  let searchResultsContainer = createDiv('search-results-container');

  resultsBlock.appendChild(searchResultsContainer);
  searchResultsContainer.appendChild(books);
  searchResultsContainer.appendChild(renderCart());
  return resultsBlock;
}

function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
}

export {renderBooksList, handleAddBtn};

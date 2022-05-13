/*todo:
1. disable books when description is opened
2. cart layout
3. remove book from the bag by the cross button
4. add to cart by drag and drop
5. form validation
 */

import {createDiv, createMyNode} from "./utils.js";


function handleCartBtn() {
  let cart = document.getElementById("cart");
  let books = document.getElementById("books-list");

  if (cart.style.display === "block") {
    cart.style.display = "none";
    books.style.width = '100%';
  } else {
    cart.style.display = "block";
    cart.style.width = '28%';
    books.style.width = '70%';
  }
}

function handleConfirmOrderBtn() {
  let cartItems = document.getElementsByClassName('cart-items');
  let confirmBtn = document.getElementById('confirm-button');

  //disable for empty cart
  if (cartItems.length === 1 && cartItems.innerHTML === "You cart is empty") {
    console.log('btn is disabled');
    confirmBtn.setAttribute('disabled', "");
  }

  //navigate to orderForm
  window.location.replace("../orderForm/orderForm.html");
}

function handleAddBtn(id) {
  //get book by id from booksList
  let selectedBook = booksList.find(b => b.id === id);
  // console.log(selectedBook)

  cartItems.appendChild(
    renderBookInfo(selectedBook)
    // createMyNode('div', 'cart-item', renderBookInfo(selectedBook))
  );
}

let renderBookInfo = (book) => {
  let bookItem = createDiv("book-item");
  bookItem.id = book.id;
  bookItem.setAttribute('draggable', "true");

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

  // bookItemData.appendChild(bookImg);
  bookItemData.appendChild(bookInfo);

  bookItem.appendChild(bookItemData);

  return bookItem;
}

let renderBook = (book) => {
  let renderedBook = new DocumentFragment();

  let bookBlock = renderBookInfo(book);

  let bookActions = createDiv("book-actions");
  let showMoreBtn = createMyNode('button', 'show-more-button', 'Show More');
  // showMoreBtn.onclick = function () { renderBookDescription(addBtn.id)};

  bookBlock.addEventListener(
    "click",
    function(event) {
      console.log(event.target.closest(".book-item-data"))
      if (event.target.matches(".show-more-button") || !event.target.closest(".book-item-data")) {
        renderBookDescription(book.id)
      }
    },
    false
  )



  let addBtn = createMyNode('button', 'add-button', 'Add');
  addBtn.id = book.id;
  addBtn.onclick = function() { handleAddBtn(addBtn.id); }

  bookActions.appendChild(showMoreBtn);
  bookActions.appendChild(addBtn);

  bookBlock.appendChild(bookActions);

  renderedBook.appendChild(bookBlock);
  return renderedBook;
}

let renderBookDescription = (bookId, bookDiv) => {
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
  }
  else {
    document.getElementById(bookId).getElementsByClassName('book-info')[0].classList.remove('overlayed');
    document.getElementById(bookId).getElementsByClassName('book-item-data')[0].lastChild.remove();
    showMoreBtn.innerText = 'Show More';
    showMoreBtn.style.width = '48%';
    addBtn.style.display = 'inline-block';
  }
}

let container = createDiv('container');

/* top menu */
let topMenu = createDiv('top-menu');
let logo = createDiv('logo');
let logoIcon = document.createElement("i");
logoIcon.classList.add('fa-solid', 'fa-book');
let header = createMyNode("h1", "header", "Book Shop");
let cartBtn = document.createElement("i");
cartBtn.classList.add('fa', 'fa-shopping-basket');
cartBtn.id = "cart-btn";
cartBtn.addEventListener("click", handleCartBtn);
//todo
// let cartBadge = createMyNode('span', 'badge badge-warning', 0);
//<span class='badge badge-warning' id='lblCartCount'> 5 </span>

/* results block */
let resultsBlock = createDiv("search-results");
let books = createDiv("books-list");
books.id = 'books-list';
let searchResultsContainer = createDiv('search-results-container');

/* cart */
let cart = createDiv('cart');
cart.id = "cart";

let cartContent = createDiv('cart-content');
let cartItems = createDiv('cart-items');
cartItems.id = 'cart-items';
cartItems.innerHTML = 'You cart is empty';

let confirmOrder = createMyNode('button', 'confirm-button', 'Confirm Order');
confirmOrder.id = 'confirm-button';
confirmOrder.addEventListener("click", handleConfirmOrderBtn);

/* build mark up */
let page = new DocumentFragment();

page.appendChild(container);

container.appendChild(topMenu);
container.appendChild(resultsBlock);

logo.appendChild(logoIcon);
logo.appendChild(header);

topMenu.appendChild(logo);
topMenu.appendChild(cartBtn);


resultsBlock.appendChild(searchResultsContainer);

searchResultsContainer.appendChild(books);
searchResultsContainer.appendChild(cart);

cart.appendChild(cartContent);
cartContent.appendChild(cartItems);
cartContent.appendChild(confirmOrder);

document.body.appendChild(page);

let booksJson = await fetch("../../assets/books.json");
let booksList = await booksJson.json();

booksList.forEach((book, index) => book.id = `id-${index}`);

booksList.forEach(book => books.appendChild(renderBook(book)));

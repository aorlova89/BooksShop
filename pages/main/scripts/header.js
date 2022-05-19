import {createDiv, createMyNode, handleCartBtn} from "./utils.js";
import {handleAddBtn} from "./books.js";


let renderTopMenu = () => {
  let topMenu = createDiv('top-menu');
  let logo = createDiv('logo');
  let logoIcon = document.createElement("i");
  logoIcon.classList.add('fa-solid', 'fa-book');
  let header = createMyNode("h1", "header", "Book Shop");
  let cartBtn = document.createElement("i");
  cartBtn.classList.add('fa', 'fa-shopping-basket');
  cartBtn.id = "cart-btn";
  cartBtn.addEventListener("click", handleCartBtn);

  cartBtn.ondragover = function () {onDragOver(event) };
  cartBtn.ondrop = function () { onDrop(event) };

  let itemsCount = createMyNode('span', 'items-counter', '');
  cartBtn.appendChild(itemsCount)

  logo.appendChild(logoIcon);
  logo.appendChild(header);

  topMenu.appendChild(logo);
  topMenu.appendChild(cartBtn);

  return topMenu;
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');

  handleAddBtn(id);

  event
    .dataTransfer
    .clearData();
}

export {renderTopMenu};

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

function handleCartBtn() {
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


export {createMyNode, createDiv, handleCartBtn};

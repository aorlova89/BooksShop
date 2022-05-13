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


export {createMyNode, createDiv};

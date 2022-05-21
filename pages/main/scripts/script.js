import {createDiv} from "./utils.js";
import {renderBooksList} from './books.js';
import {renderTopMenu} from "./header.js";


let page = new DocumentFragment();
let container = createDiv('container');
container.appendChild(renderTopMenu());
container.appendChild(renderBooksList());
page.appendChild(container);
document.body.appendChild(page);

localStorage.setItem('itemsCount', '0');
localStorage.setItem('itemsTotalPrice', '0');
// localStorage.setItem('cart', JSON.stringify([{'id': 'id-1', 'quantity': 1}, {'id': 'id-0', 'quantity': 1}]));
localStorage.setItem('cart', JSON.stringify({}));

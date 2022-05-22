import {createDiv} from "./utils.js";
import {renderBooksList} from './books.js';
import {renderTopMenu} from "./header.js";
import {createHTMLHead} from "./createHTMLHead.js";


let page = new DocumentFragment();
let head = createHTMLHead();
let container = createDiv('container');
container.appendChild(renderTopMenu());
container.appendChild(renderBooksList());
page.appendChild(head);
page.appendChild(container);
document.body.appendChild(page);

localStorage.setItem('itemsCount', '0');
localStorage.setItem('itemsTotalPrice', '0');
localStorage.setItem('cart', JSON.stringify({}));

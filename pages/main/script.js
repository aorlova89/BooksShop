import {createDiv} from "./utils.js";
import {renderBooksList} from './books.js';
import {renderTopMenu} from "./header.js";

let page = new DocumentFragment();
let container = createDiv('container');
container.appendChild(renderTopMenu());
container.appendChild(renderBooksList());
page.appendChild(container);

document.body.appendChild(page);

//todo freeze top menu when scrolling

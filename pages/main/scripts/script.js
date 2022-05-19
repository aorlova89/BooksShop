import {createDiv} from "./utils.js";
import {renderBooksList} from './books.js';
import {renderTopMenu} from "./header.js";
import {renderConfirmation} from "./confirmationPopup.js";

let page = new DocumentFragment();
let container = createDiv('container');
container.appendChild(renderTopMenu());
container.appendChild(renderBooksList());
page.appendChild(container);
// page.appendChild(renderConfirmation());
document.body.appendChild(page);

//todo add padding bottom

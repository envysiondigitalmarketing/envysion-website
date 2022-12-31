import domElements from '/src/javascript/dom-elements.js';
import functions from '/src/javascript/functions.js';

domElements.scroll.forEach((el) => functions.observer.observe(el));

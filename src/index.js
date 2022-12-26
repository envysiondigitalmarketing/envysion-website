import domElements from '/src/javascript/dom-elements.js';
import functions from '/src/javascript/functions.js';
import paragraphs from '/src/javascript/paragraphs.js';

onload = () => functions.theHiddenThing(domElements.menuCover);

domElements.xButton.onclick = () => functions.openAndClose();
domElements.hero.onclick = () => functions.openAndClose();
domElements.services.onclick = () => functions.openAndClose();
domElements.pricing.onclick = () => functions.openAndClose();
domElements.contact.onclick = () => functions.openAndClose();
// growth.onclick = () => openAndClose
// whyEnvysion.onclick = () => openAndClose');

domElements.scroll.forEach((el) => functions.observer.observe(el));

// let count = 0;

// domElements.quoraCreativeLink
//   ? (domElements.quoraCreativeLink.onclick = () => {
//       window.open(
//         'https://quoracreative.com/article/mobile-marketing-statistics',
//         '_blank',
//         'width=800, height=800'
//       );
//     })
//   : null;

// domElements.nextButton.onclick = () => functions.carouselScrollNext();

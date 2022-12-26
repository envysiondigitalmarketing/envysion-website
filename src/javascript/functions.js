import domElements from '/src/javascript/dom-elements.js';

const theHiddenThing = (element) =>
  element.style.visibility == 'hidden'
    ? (element.style.visibility = 'visible')
    : (element.style.visibility = 'hidden');

const openAndClose = () => {
  domElements.xButton.classList.toggle('nav__button-x-open');
  theHiddenThing(domElements.menuCover);
};

const observer = new IntersectionObserver((entries) =>
  entries.forEach((i) => i.isIntersecting && i.target.classList.add('show'))
);

const functions = {
  theHiddenThing,
  openAndClose,
  observer,
};

export default functions;

// i.isIntersecting
//   ? i.target.classList.add('show')
//   : i.target.classList.remove('show');

// const carouselScrollNext = () => {
//   if (count === 4) {
//     count = 0;
//     currentCarousel.innerHTML = carouselDivs[count];
//   } else {
//     count += 1;
//     currentCarousel.innerHTML = carouselDivs[count];
//   }
// };

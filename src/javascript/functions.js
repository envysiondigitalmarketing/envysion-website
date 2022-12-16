const functions = {
  theHiddenThing: (itemInQuestion) => {
    itemInQuestion.style.visibility == 'hidden'
      ? (itemInQuestion.style.visibility = 'visible')
      : (itemInQuestion.style.visibility = 'hidden');
  },
  openAndClose: () => {
    domElements.xButton.classList.toggle('nav__button-x-open');
    theHiddenThing(domElements.menuCover);
  },
  selectService: (itemInQuestion, theString) => {
    if (!itemInQuestion.innerHTML) {
      domElements.websitesParagraph.innerHTML = '';
      domElements.seoParagraph.innerHTML = '';
      domElements.emailAndSMSParagraph.innerHTML = '';
      domElements.advertsParagraph.innerHTML = '';
      itemInQuestion.innerHTML = theString;
    } else {
      itemInQuestion.innerHTML = '';
    }
  },
  twoSelectService: (itemInQuestion, theString) => {
    if (!itemInQuestion.innerHTML) {
      domElements.twoWebsitesParagraph.innerHTML = '';
      domElements.twoSeoParagraph.innerHTML = '';
      domElements.twoEmailAndSMSParagraph.innerHTML = '';
      domElements.twoAdvertsParagraph.innerHTML = '';
      itemInQuestion.innerHTML = theString;
    } else {
      itemInQuestion.innerHTML = '';
    }
  },
};

// const carouselScrollNext = () => {
//   if (count === 4) {
//     count = 0;
//     currentCarousel.innerHTML = carouselDivs[count];
//   } else {
//     count += 1;
//     currentCarousel.innerHTML = carouselDivs[count];
//   }
// };

export default functions;

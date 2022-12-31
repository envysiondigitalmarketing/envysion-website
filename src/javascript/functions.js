const theHiddenThing = (element) =>
  element.style.visibility == 'hidden'
    ? (element.style.visibility = 'visible')
    : (element.style.visibility = 'hidden');

const observer = new IntersectionObserver((entries) =>
  entries.forEach((i) => i.isIntersecting && i.target.classList.add('show'))
);

const functions = {
  theHiddenThing,
  observer,
};

export default functions;

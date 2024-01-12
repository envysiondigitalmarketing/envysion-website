const hero = document.getElementById('hero-button');
const growth = document.getElementById('growth-button');
const services = document.getElementById('services-button');
const whyEnvysion = document.getElementById('why-envysion-button');
const pricing = document.getElementById('pricing-button');
const contact = document.getElementById('contact-button');
const allHeaders = document.querySelector('.services__header');
const carouselContainer = document.querySelector('.carousel-container');
const carouselWebsites = document.querySelector(
  '.carousel-container__websites'
);
const carouselSEO = document.querySelector(
  '.carousel-container__search-engine-optimization'
);
const carouselEmailMarketing = document.querySelector(
  '.carousel-container__email-marketing'
);
const carouselSMSMarketing = document.querySelector(
  '.carousel-container__sms-marketing'
);
const carouselDigitalAdvertisements = document.querySelector(
  '.carousel-container__digital-advertisements'
);
const nextButton = document.querySelector('.next');
const scroll = document.querySelectorAll('.scroll');

const domElements = {
  hero,
  growth,
  services,
  whyEnvysion,
  pricing,
  contact,
  allHeaders,
  carouselContainer,
  carouselWebsites,
  carouselSEO,
  carouselEmailMarketing,
  carouselSMSMarketing,
  carouselDigitalAdvertisements,
  nextButton,
  scroll,
};

export default domElements;

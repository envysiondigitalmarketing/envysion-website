const xButton = document.getElementById('nav__button-x');

const menuCover = document.getElementById('menu-cover');

const hero = document.getElementById('hero-button');
const growth = document.getElementById('growth-button');
const services = document.getElementById('services-button');
const whyEnvysion = document.getElementById('why-envysion-button');
const pricing = document.getElementById('pricing-button');
const contact = document.getElementById('contact-button');

const websitesHeader = document.querySelector('.services__header--websites');
const seoHeader = document.querySelector('.services__header--seo');
const emailAndSMSHeader = document.querySelector(
  '.services__header--email-and-sms'
);
const advertsHeader = document.querySelector('.services__header--adverts');
const allHeaders = document.querySelector('.services__header');

const twoWebsitesHeader = document.querySelector(
  '.services-II__header--websites'
);
const twoSeoHeader = document.querySelector('.services-II__header--seo');
const twoEmailAndSMSHeader = document.querySelector(
  '.services-II__header--email-and-sms'
);
const twoAdvertsHeader = document.querySelector(
  '.services-II__header--adverts'
);
const twoAllHeaders = document.querySelector('.services-II__header');

const websitesParagraph = document.querySelector(
  '.services__paragraph--websites'
);
const seoParagraph = document.querySelector('.services__paragraph--seo');
const emailAndSMSParagraph = document.querySelector(
  '.services__paragraph--email-and-sms'
);
const advertsParagraph = document.querySelector(
  '.services__paragraph--adverts'
);

const twoWebsitesParagraph = document.querySelector(
  '.services-II__paragraph--websites'
);
const twoSeoParagraph = document.querySelector('.services-II__paragraph--seo');
const twoEmailAndSMSParagraph = document.querySelector(
  '.services-II__paragraph--email-and-sms'
);
const twoAdvertsParagraph = document.querySelector(
  '.services-II__paragraph--adverts'
);

const quoraCreativeLink = document.querySelector('.quoracreative-link');

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
  xButton,
  menuCover,
  hero,
  growth,
  services,
  whyEnvysion,
  pricing,
  contact,
  websitesHeader,
  seoHeader,
  emailAndSMSHeader,
  advertsHeader,
  allHeaders,
  twoWebsitesHeader,
  twoSeoHeader,
  twoEmailAndSMSHeader,
  twoAdvertsHeader,
  twoAllHeaders,
  websitesParagraph,
  seoParagraph,
  emailAndSMSParagraph,
  advertsParagraph,
  twoWebsitesParagraph,
  twoSeoParagraph,
  twoEmailAndSMSParagraph,
  twoAdvertsParagraph,
  quoraCreativeLink,
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

// const carouselClasses = [
//   'carousel-container__content-front--websites',
//   'carousel-container__content-front--search-engine-optimization',
//   'carousel-container__content-front--email-marketing',
//   'carousel-container__content-front--sms-marketing',
//   'carousel-container__content-front--digital-advertisements',
// ];

// const currentCarousel = document.getElementById('current-carousel');

// const websitesDiv = `
// <div class="carousel-container__content-front carousel-container__content-front--websites">
//     <h2 class="carousel-container__content-front--header">
//         <span>Web</span><br>
//         <span>Development&nbsp;&nbsp;&#8640;</span>
//     </h2>
// </div>
// <div class="carousel-container__content-back carousel-container__content-back--websites">
//     <h2 class="carousel-container__content-back--header">
//         <span>1 Page: $1,500.00</span><hr>
//         <span>3 Pages: $3,000.00</span><hr>
//         <span>4 or More: Contact Us</span>
//     </h2>
//     <a
//     class='cta-orange cta-orange__pricing'
//     href="contact.html"
//     data-text='Contact'
//     >Contact Us
//     </a>
// </div>
// `;

// const SEODiv = `
// <div class="carousel-container__content-front carousel-container__content-front--search-engine-optimization">
//     <h2 class="carousel-container__content-front--header">
//         <span>Search</span><br>
//         <span>Engine</span><br>
//         <span>Optimization&nbsp;&#8640;</span>
//     </h2>
// </div>
// <div class="carousel-container__content-back carousel-container__content-back--search-engine-optimization">
//     <h2 class="carousel-container__content-back--header">
//         <span>$1,000.00/Month</span><br>
//     </h2>
//     <a
//     class='cta-orange cta-orange__pricing'
//     href="contact.html"
//     data-text='Contact'
//     >Contact Us
//     </a>
// </div>
// `;

// const emailDiv = `
// <div class="carousel-container__content-front carousel-container__content-front--email-marketing">
//     <h2 class="carousel-container__content-front--header">
//         <span>Email</span><br>
//         <span>Marketing&nbsp;&#8640;</span>
//     </h2>
// </div>
// <div class="carousel-container__content-back carousel-container__content-back--email-marketing">
//     <h2 class="carousel-container__content-back--header">
//         <span>$1,000.00/Month</span><br>
//     </h2>
//     <a
//     class='cta-orange cta-orange__pricing'
//     href="contact.html"
//     data-text='Contact'
//     >Contact Us
//     </a>
// </div>`;

// const SMSDiv = `
// <div class="carousel-container__content-front carousel-container__content-front--sms-marketing">
//     <h2 class="carousel-container__content-front--header">
//         <span>SMS</span><br>
//         <span>Marketing&nbsp;&#8640;</span>
//     </h2>
// </div>
// <div class="carousel-container__content-back carousel-container__content-back--sms-marketing">
//     <h2 class="carousel-container__content-back--header">
//         <span>$1,000.00/Month</span><br>
//     </h2>
//     <a
//     class='cta-orange cta-orange__pricing'
//     href="contact.html"
//     data-text='Contact'
//     >Contact Us
//     </a>
// </div>`;

// const advertisementsDiv = `
// <div class="carousel-container__content-front carousel-container__content-front--digital-advertisements">
//     <h2 class="carousel-container__content-front--header">
//         <span>Digital</span><br>
//         <span>Advertisements&nbsp;&#8640;</span>
//     </h2>
// </div>
// <div
// class="carousel-container__content-back carousel-container__content-back--digital-advertisements"
// >
//     <h2 class="carousel-container__content-back--header">
//         <span>$1,500.00/Month</span><br>
//     </h2>
//     <a
//     class='cta-orange cta-orange__pricing'
//     href="contact.html"
//     data-text='Contact'
//     >Contact Us
//     </a>
// </div>`;

// const carouselDivs = [websitesDiv, SEODiv, emailDiv, SMSDiv, advertisementsDiv];

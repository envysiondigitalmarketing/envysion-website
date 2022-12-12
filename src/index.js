import domElements from '/src/javascript/dom-elements.js';
import paragraphs from '/src/javascript/paragraphs.js';

const theHiddenThing = (itemInQuestion) => {
  itemInQuestion.style.visibility == 'hidden'
    ? (itemInQuestion.style.visibility = 'visible')
    : (itemInQuestion.style.visibility = 'hidden');
};
const openAndClose = () => {
  domElements.xButton.classList.toggle('nav__button-x-open');
  theHiddenThing(domElements.menuCover);
};
const selectService = (itemInQuestion, theString) => {
  if (!itemInQuestion.innerHTML) {
    domElements.websitesParagraph.innerHTML = '';
    domElements.seoParagraph.innerHTML = '';
    domElements.emailAndSMSParagraph.innerHTML = '';
    domElements.advertsParagraph.innerHTML = '';
    itemInQuestion.innerHTML = theString;
  } else {
    itemInQuestion.innerHTML = '';
  }
};

const twoSelectService = (itemInQuestion, theString) => {
  if (!itemInQuestion.innerHTML) {
    domElements.twoWebsitesParagraph.innerHTML = '';
    domElements.twoSeoParagraph.innerHTML = '';
    domElements.twoEmailAndSMSParagraph.innerHTML = '';
    domElements.twoAdvertsParagraph.innerHTML = '';
    itemInQuestion.innerHTML = theString;
  } else {
    itemInQuestion.innerHTML = '';
  }
};

onload = () => theHiddenThing(domElements.menuCover);

domElements.xButton.onclick = () => openAndClose();
domElements.hero.onclick = () => openAndClose();
domElements.services.onclick = () => openAndClose();
domElements.pricing.onclick = () => openAndClose();
domElements.contact.onclick = () => openAndClose();
// about.onclick = () => openAndClose
// whyEnvysion.onclick = () => openAndClose');

domElements.websitesHeader
  ? (domElements.websitesHeader.onclick = () => {
      selectService(domElements.websitesParagraph, paragraphs.samples.websites);
    })
  : null;
domElements.twoWebsitesHeader
  ? (domElements.twoWebsitesHeader.onclick = () => {
      twoSelectService(
        domElements.twoWebsitesParagraph,
        paragraphs.full.websites
      );
    })
  : null;
domElements.seoHeader
  ? (domElements.seoHeader.onclick = () => {
      selectService(domElements.seoParagraph, paragraphs.samples.seo);
    })
  : null;
domElements.twoSeoHeader
  ? (domElements.twoSeoHeader.onclick = () => {
      twoSelectService(domElements.twoSeoParagraph, paragraphs.full.seo);
    })
  : null;
domElements.emailAndSMSHeader
  ? (domElements.emailAndSMSHeader.onclick = () => {
      selectService(
        domElements.emailAndSMSParagraph,
        paragraphs.samples.emailAndSms
      );
    })
  : null;
domElements.twoEmailAndSMSHeader
  ? (domElements.twoEmailAndSMSHeader.onclick = () => {
      twoSelectService(
        domElements.twoEmailAndSMSParagraph,
        paragraphs.full.emailAndSms
      );
    })
  : null;
domElements.advertsHeader
  ? (domElements.advertsHeader.onclick = () => {
      selectService(domElements.advertsParagraph, paragraphs.samples.adverts);
    })
  : null;
domElements.twoAdvertsHeader
  ? (domElements.twoAdvertsHeader.onclick = () => {
      twoSelectService(
        domElements.twoAdvertsParagraph,
        paragraphs.full.adverts
      );
    })
  : null;

domElements.quoraCreativeLink
  ? (domElements.quoraCreativeLink.onclick = () => {
      window.open(
        'https://quoracreative.com/article/mobile-marketing-statistics',
        '_blank',
        'width=800, height=800'
      );
    })
  : null;

domElements.nextButton.onclick = () => carouselScroll();

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

// let count = 0;

// const carouselScroll = () => {
//   if (count === 4) {
//     count = 0;
//     currentCarousel.innerHTML = carouselDivs[count];
//   } else {
//     count += 1;
//     currentCarousel.innerHTML = carouselDivs[count];
//   }
// };

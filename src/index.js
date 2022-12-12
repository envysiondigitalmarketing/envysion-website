import domElements from './javascript/dom-elements';
import servicesParagraphs from './javascript/services-paragraphs';

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

const carouselClasses = [
  'carousel-container__content-front--websites',
  'carousel-container__content-front--search-engine-optimization',
  'carousel-container__content-front--email-marketing',
  'carousel-container__content-front--sms-marketing',
  'carousel-container__content-front--digital-advertisements',
];

const currentCarousel = document.getElementById('current-carousel');

const websitesDiv = `
<div class="carousel-container__content-front carousel-container__content-front--websites">
    <h2 class="carousel-container__content-front--header">
        <span>Web</span><br>
        <span>Development&nbsp;&nbsp;&#8640;</span>
    </h2>
</div>
<div class="carousel-container__content-back carousel-container__content-back--websites">
    <h2 class="carousel-container__content-back--header">
        <span>1 Page: $1,500.00</span><hr>
        <span>3 Pages: $3,000.00</span><hr>
        <span>4 or More: Contact Us</span>
    </h2>
    <a 
    class='cta-orange cta-orange__pricing'
    href="contact.html" 
    data-text='Contact'
    >Contact Us
    </a>
</div>
`;

const SEODiv = `
<div class="carousel-container__content-front carousel-container__content-front--search-engine-optimization">
    <h2 class="carousel-container__content-front--header">
        <span>Search</span><br>
        <span>Engine</span><br>
        <span>Optimization&nbsp;&#8640;</span>
    </h2>
</div>
<div class="carousel-container__content-back carousel-container__content-back--search-engine-optimization">
    <h2 class="carousel-container__content-back--header">
        <span>$1,000.00/Month</span><br>
    </h2>
    <a 
    class='cta-orange cta-orange__pricing'
    href="contact.html" 
    data-text='Contact'
    >Contact Us
    </a>
</div>
`;

const emailDiv = `
<div class="carousel-container__content-front carousel-container__content-front--email-marketing">
    <h2 class="carousel-container__content-front--header">
        <span>Email</span><br>
        <span>Marketing&nbsp;&#8640;</span>
    </h2>
</div>
<div class="carousel-container__content-back carousel-container__content-back--email-marketing">
    <h2 class="carousel-container__content-back--header">
        <span>$1,000.00/Month</span><br>
    </h2>
    <a 
    class='cta-orange cta-orange__pricing'
    href="contact.html" 
    data-text='Contact'
    >Contact Us
    </a>
</div>`;

const SMSDiv = `
<div class="carousel-container__content-front carousel-container__content-front--sms-marketing">
    <h2 class="carousel-container__content-front--header">
        <span>SMS</span><br>
        <span>Marketing&nbsp;&#8640;</span>
    </h2>
</div>
<div class="carousel-container__content-back carousel-container__content-back--sms-marketing">
    <h2 class="carousel-container__content-back--header">
        <span>$1,000.00/Month</span><br>
    </h2>
    <a 
    class='cta-orange cta-orange__pricing'
    href="contact.html" 
    data-text='Contact'
    >Contact Us
    </a>
</div>`;

const advertisementsDiv = `
<div class="carousel-container__content-front carousel-container__content-front--digital-advertisements">
    <h2 class="carousel-container__content-front--header">
        <span>Digital</span><br>
        <span>Advertisements&nbsp;&#8640;</span>
    </h2>
</div>
<div 
class="carousel-container__content-back carousel-container__content-back--digital-advertisements"
>
    <h2 class="carousel-container__content-back--header">
        <span>$1,500.00/Month</span><br>
    </h2>
    <a 
    class='cta-orange cta-orange__pricing'
    href="contact.html" 
    data-text='Contact'
    >Contact Us
    </a>
</div>`;

const carouselDivs = [websitesDiv, SEODiv, emailDiv, SMSDiv, advertisementsDiv];

let count = 0;

const theHiddenThing = (itemInQuestion) => {
  itemInQuestion.style.visibility == 'hidden'
    ? (itemInQuestion.style.visibility = 'visible')
    : (itemInQuestion.style.visibility = 'hidden');
};
const openAndClose = () => {
  xButton.classList.toggle('nav__button-x-open');
  theHiddenThing(menuCover);
};
const selectService = (itemInQuestion, theString) => {
  if (!itemInQuestion.innerHTML) {
    websitesParagraph.innerHTML = '';
    seoParagraph.innerHTML = '';
    emailAndSMSParagraph.innerHTML = '';
    advertsParagraph.innerHTML = '';
    itemInQuestion.innerHTML = theString;
  } else {
    itemInQuestion.innerHTML = '';
  }
};

const twoSelectService = (itemInQuestion, theString) => {
  if (!itemInQuestion.innerHTML) {
    twoWebsitesParagraph.innerHTML = '';
    twoSeoParagraph.innerHTML = '';
    twoEmailAndSMSParagraph.innerHTML = '';
    twoAdvertsParagraph.innerHTML = '';
    itemInQuestion.innerHTML = theString;
  } else {
    itemInQuestion.innerHTML = '';
  }
};

const carouselScroll = () => {
  if (count === 4) {
    count = 0;
    currentCarousel.innerHTML = carouselDivs[count];
  } else {
    count += 1;
    currentCarousel.innerHTML = carouselDivs[count];
  }
};

onload = () => theHiddenThing(menuCover);

xButton.onclick = () => openAndClose();
hero.onclick = () => openAndClose();
services.onclick = () => openAndClose();
pricing.onclick = () => openAndClose();
contact.onclick = () => openAndClose();
// about.onclick = () => openAndClose
// whyEnvysion.onclick = () => openAndClose');

websitesHeader
  ? (websitesHeader.onclick = () => {
      selectService(websitesParagraph, websitesParagraphSample);
    })
  : null;
twoWebsitesHeader
  ? (twoWebsitesHeader.onclick = () => {
      twoSelectService(twoWebsitesParagraph, websitesParagraphFull);
    })
  : null;
seoHeader
  ? (seoHeader.onclick = () => {
      selectService(seoParagraph, seoParagraphSample);
    })
  : null;
twoSeoHeader
  ? (twoSeoHeader.onclick = () => {
      twoSelectService(twoSeoParagraph, seoParagraphFull);
    })
  : null;
emailAndSMSHeader
  ? (emailAndSMSHeader.onclick = () => {
      selectService(emailAndSMSParagraph, emailAndSMSParagraphSample);
    })
  : null;
twoEmailAndSMSHeader
  ? (twoEmailAndSMSHeader.onclick = () => {
      twoSelectService(twoEmailAndSMSParagraph, emailAndSMSParagraphFull);
    })
  : null;
advertsHeader
  ? (advertsHeader.onclick = () => {
      selectService(advertsParagraph, advertsParagraphSample);
    })
  : null;
twoAdvertsHeader
  ? (twoAdvertsHeader.onclick = () => {
      twoSelectService(twoAdvertsParagraph, advertsParagraphFull);
    })
  : null;

quoraCreativeLink
  ? (quoraCreativeLink.onclick = () => {
      window.open(
        'https://quoracreative.com/article/mobile-marketing-statistics',
        '_blank',
        'width=800, height=800'
      );
    })
  : null;

nextButton.onclick = () => {
  carouselScroll();
};

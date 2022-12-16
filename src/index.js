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

domElements.websitesHeader
  ? (domElements.websitesHeader.onclick = () => {
      functions.selectService(
        domElements.websitesParagraph,
        paragraphs.samples.websites
      );
    })
  : null;
domElements.twoWebsitesHeader
  ? (domElements.twoWebsitesHeader.onclick = () => {
      functions.twoSelectService(
        domElements.twoWebsitesParagraph,
        paragraphs.full.websites
      );
    })
  : null;
domElements.seoHeader
  ? (domElements.seoHeader.onclick = () => {
      functions.selectService(domElements.seoParagraph, paragraphs.samples.seo);
    })
  : null;
domElements.twoSeoHeader
  ? (domElements.twoSeoHeader.onclick = () => {
      functions.twoSelectService(
        domElements.twoSeoParagraph,
        paragraphs.full.seo
      );
    })
  : null;
domElements.emailAndSMSHeader
  ? (domElements.emailAndSMSHeader.onclick = () => {
      functions.selectService(
        domElements.emailAndSMSParagraph,
        paragraphs.samples.emailAndSms
      );
    })
  : null;
domElements.twoEmailAndSMSHeader
  ? (domElements.twoEmailAndSMSHeader.onclick = () => {
      functions.twoSelectService(
        domElements.twoEmailAndSMSParagraph,
        paragraphs.full.emailAndSms
      );
    })
  : null;
domElements.advertsHeader
  ? (domElements.advertsHeader.onclick = () => {
      functions.selectService(
        domElements.advertsParagraph,
        paragraphs.samples.adverts
      );
    })
  : null;
domElements.twoAdvertsHeader
  ? (domElements.twoAdvertsHeader.onclick = () => {
      functions.twoSelectService(
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

domElements.nextButton.onclick = () => functions.carouselScrollNext();

// let count = 0;

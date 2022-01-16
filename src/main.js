const xButton = document.getElementById('home__nav--button-x');

const menuCover = document.getElementById('menu-cover');

const home = document.getElementById('home-button');
const about = document.getElementById('about-button');
const services = document.getElementById('services-button');
const whyEnvysion = document.getElementById('why-envysion-button');
const pricing = document.getElementById('pricing-button');
const contact = document.getElementById('contact-button');

const websitesHeader = document.querySelector('.services__header--websites');
const seoHeader = document.querySelector('.services__header--seo');
const emailAndSMSHeader = document.querySelector('.services__header--email-and-sms');
const advertsHeader = document.querySelector('.services__header--adverts');
const allHeaders = document.querySelector('.services__header');

const websitesParagraph = document.querySelector('.services__paragraph--websites');
const seoParagraph = document.querySelector('.services__paragraph--seo');
const emailAndSMSParagraph = document.querySelector('.services__paragraph--email-and-sms');
const advertsParagraph = document.querySelector('.services__paragraph--adverts');



const theHiddenThing = (itemInQuestion) => {
    itemInQuestion.style.visibility == 'hidden' ? itemInQuestion.style.visibility = 'visible' : itemInQuestion.style.visibility = 'hidden';
};
const openAndClose = () => {
    xButton.classList.toggle('home__nav--button-x-open');
    theHiddenThing(menuCover);
}
const selectService = (itemInQuestion, theString) => {
    if (itemInQuestion.innerHTML == '') {
        websitesParagraph.innerHTML = '';
        seoParagraph.innerHTML = '';
        emailAndSMSParagraph.innerHTML = '';
        advertsParagraph.innerHTML = '';
        itemInQuestion.innerHTML = `${theString}`;
    } else {
        itemInQuestion.innerHTML = '';
    }
}



onload = () => {
    theHiddenThing(menuCover);
};

xButton.onclick = () => {openAndClose()};
home.onclick = () => {openAndClose()};
about.onclick = () => {openAndClose()};
services.onclick = () => {openAndClose()};
whyEnvysion.onclick = () => {openAndClose()};
pricing.onclick = () => {openAndClose()};
contact.onclick = () => {openAndClose()};

websitesHeader.onclick = () => {
    selectService(websitesParagraph, `Your website is your digital hub, the place everyone will go when they want to learn more about your business. In many ways your website will be a chance at a first impression. Let’s make it a good one. Every site we create is hand-coded and designed specifically to encourage customers to take the next step and reach out to your business.`)
};
seoHeader.onclick = () => {selectService(seoParagraph, `Did you know that 68% of online experiences begin with a search engine (<a id='reference-link' onclick='window.open("https://videos.brightedge.com/research-report/BrightEdge_ChannelReport2019_FINAL.pdf", "_blank", "width=800, height=800");'>BrightEdge</a>), 92.96% of global traffic comes from Google (<a id='reference-link' onclick='window.open("https://sparktoro.com/blog/2018-search-market-share-myths-vs-realities-of-google-bing-amazon-facebook-duckduckgo-more/", "_blank", "width=800, height=800");'>Sparktoro</a>), and only 0.78% of Google searchers click on results from the 2nd page (<a id='reference-link' onclick='window.open("https://backlinko.com/google-ctr-stats", "_blank", "width=800, height=800");'>Backlinko</a>)? If you want customers who are searching for your product or service to find your business it is imperative that you use search engine optimization to bring your company up in the search results and avoid becoming a needle in a haystack.`)};//
emailAndSMSHeader.onclick = () => {selectService(emailAndSMSParagraph, `Email marketing and SMS marketing are great tools to generate new leads and keep your current customers up to date with the latest information about your business. A <a id='reference-link' onclick='window.open("https://dma.org.uk/uploads/misc/marketers-email-tracker-2019.pdf", "_blank", "width=800, height=800");'>recent study has shown</a> that for every dollar your company spends on email marketing alone you can expect a return of $42 and according to <a id='reference-link' onclick='window.open("https://www.gartner.com/en/marketing/insights/articles/tap-into-the-marketing-power-of-sms", "_blank", "width=800, height=800");'>Gartner Marketing and Communications</a> 98% of text messages sent are viewed by the receiver. If you’re interested in reaching out to new potential clients or you simply want a direct communication channel with your customers that you could use to launch new sales or products you can not go wrong with email marketing or SMS marketing. Not sure which one is right for you? No problem, give us a call and we can find a plan that best suits your needs.`)};
advertsHeader.onclick = () => {selectService(advertsParagraph, `Harness the power of Google, Facebook, or Instagram ads to drive traffic to your website. These platforms have been refined over time to become the best options for gaining visibility and reaching out to potential customers within your niche. No need to create content for your ads, Envysion has you covered. Just let us know what product or service you would like advertised and we will do the rest.`)};
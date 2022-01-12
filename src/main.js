const xButton = document.getElementById('home__nav--button-x');
const menuCover = document.getElementById('menu-cover');
const home = document.getElementById('home-button');
const about = document.getElementById('about-button');
const services = document.getElementById('services-button');
const whyEnvysion = document.getElementById('why-envysion-button');
const pricing = document.getElementById('pricing-button');
const contact = document.getElementById('contact-button');



const theHiddenThing = () => {
    menuCover.style.visibility == 'hidden' ? menuCover.style.visibility = 'visible' : menuCover.style.visibility = 'hidden';
};
const openAndClose = () => {
    xButton.classList.toggle('home__nav--button-x-open');
    theHiddenThing();
}



onload = () => {
    menuCover.style.visibility = 'hidden';
};
xButton.onclick = () => {openAndClose()};
home.onclick = () => {openAndClose()};
about.onclick = () => {openAndClose()};
services.onclick = () => {openAndClose()};
whyEnvysion.onclick = () => {openAndClose()};
pricing.onclick = () => {openAndClose()};
contact.onclick = () => {openAndClose()};
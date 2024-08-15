//import "./styles.css";
import renderAbout from "./about.js";
import { insertInto } from "./utils.js";
const aboutBtn = document.querySelector("#about");
const homeBtn = document.querySelector("#home");
aboutBtn.addEventListener('click', () => {
    document.querySelector('.content').remove();
    console.log('rendering about')
    renderAbout();
})


function renderHome() {
    const content = insertInto(document, 'div', 'content');
    const heroDiv = insertInto(content, 'div', 'hero');
    const carouselDiv = insertInto(heroDiv, 'div', 'carousel');
    const carouselItem1 = insertInto(carousel, 'div', 'carousel-item carousel1')
    insertInto(carouselItem1, 'h1', '', 'SPECIAL SAUCE');
    insertInto(carouselItem1, 'p', 'New Specials just dropped! Spicy pork, Pineapple Medley, Tennessee chicken...and Portobello Pesto ?!');
    insertInto(carouselItem1, 'button', '', 'SEE THE SPECIALS');
}

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
carouselItems[1].style.display = "none";
const slickDots = document.querySelectorAll('.slick-dots button');

slickDots[0].addEventListener("click", e => {
    console.log("car1 clicked")
    carouselItems[1].style.display = "none";
    carouselItems[0].style.display = "flex";
});


slickDots[1].addEventListener("click", e => {
    console.log('car2 clicked')
    carouselItems[0].style.display = "none";
    carouselItems[1].style.display = "flex";
});

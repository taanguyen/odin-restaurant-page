import "../css/template.css";
import renderAbout from "../js/about.js";
import renderMenu from "../js/menu.js";
import { insertInto, renderObjWithParent } from "../js/utils.js";
const aboutBtn = document.getElementById("about");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById('menu');

aboutBtn.addEventListener('click', () => {
    document.getElementById('content').innerHTML = '';
    renderAbout();
});

homeBtn.addEventListener('click', () => {
    document.getElementById('content').innerHTML = '';
    renderHome();
});

menuBtn.addEventListener('click', () => {
    document.getElementById('content').innerHTML = '';
    renderMenu();
});

function renderHome() {
    const content = document.getElementById('content');
    content.classList.remove('menu-content');
    renderHero(content);
    renderHomeSpecials(content);
    renderHomeMenu(content);

    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems[1].style.display = "none";
    const slickDots = document.querySelectorAll('.slick-dots button');

    slickDots[0].addEventListener("click", e => {
        carouselItems[1].style.display = "none";
        carouselItems[0].style.display = "flex";
    });

    slickDots[1].addEventListener("click", e => {
        carouselItems[0].style.display = "none";
        carouselItems[1].style.display = "flex";
    });
}

function renderHero(content) {
    const heroDiv = insertInto(content, 'div', 'hero');
    const carouselDiv = insertInto(heroDiv, 'div', 'carousel');

    const carouselItem1 = insertInto(carouselDiv, 'div', 'carousel-item carousel1')
    renderObjWithParent(carouselItem1, {
        h1: 'SPECIAL SAUCE',
        p: 'New Specials just dropped! Spicy pork, Pineapple Medley, Tennessee chicken...and Portobello Pesto ?!',
        button: 'SEE THE SPECIALS'
    })

    const carouselItem2 = insertInto(carouselDiv, 'div', 'carousel-item carousel2');
    renderObjWithParent(carouselItem2, {
        h1: 'PORTLY SUPPER CLUB',
        p: 'A fancy 4-course dine-in experience that will leave you in a carb-filled daze.',
        button: 'GET YOUR TICKETS'
    });

    const slickDots = insertInto(carouselDiv, 'ul', 'slick-dots');
    const slickDotsListItem1 = insertInto(slickDots, 'li');
    const slickDotsListItem2 = insertInto(slickDots, 'li');
    insertInto(slickDotsListItem1, 'button');
    insertInto(slickDotsListItem2, 'button');

}

function renderHomeSpecials(content) {
    const homeSpecials = insertInto(content, 'div', 'home-specials');

    renderHomeSpecial({
        h1: "SPECIALS",
        p: `Pizzaiolo Pete is always up to something! Check out our rotating specialty sandwiches and limited drops, including a Limited Time Only Monthly Chef's Special that will leave you craving for more!`,
        button: 'SEE THE SPECIALS'
    });

    renderHomeSpecial({
        h1: "SUPPER CLUB",
        p: "Once a month, Chef and Pizzaiolo Pete presents a new 4-course dine-in experience that goes beyond our regular offerings and puts a smoky spin on gourmet culture.",
        button: 'GET YOUR TICKETS'
    });

    function renderHomeSpecial(obj) {
        const homeSpecial = insertInto(homeSpecials, 'div', 'home-special');
        insertInto(homeSpecial, 'div', 'home-special-img');
        const homeSpecialText = insertInto(homeSpecial, 'div', 'home-special-text');
        renderObjWithParent(homeSpecialText, obj);
    }
}

function renderHomeMenu(content) {
    const homeMenuDiv = insertInto(content, 'div', 'home-menu');
    const homeMenuText = insertInto(homeMenuDiv, 'div', 'home-menu-text');
    renderObjWithParent(homeMenuText, {
        h1: 'MENU',
        p: ["We're craft American pizza made in-house(always).Get traditions and favorites from all over the world - all on one plate.Portly Pizzas is a two - time Michelin Bib Gourmand winner serving up DC's best blend of the classic pizza traditions you'd find at the most elite cookout and the elevated flavors you'd find at a true fine dining spot.", "Everything we serve is house-made and prepared by a staff that cares. You could spend a lifetime sampling every flavor combination at Portly Pizzas, and we hope you do.",],
        button: 'PEEP THE MENU'
    });
    insertInto(homeMenuDiv, 'div', 'home-menu-img')
}

renderHome();


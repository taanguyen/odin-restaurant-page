import { insertInto, renderObjWithParent } from "./utils.js";

export default function renderHome() {
    const content = document.getElementById('content');
    content.classList.remove('menu-content');
    renderHero(content);
    renderHomeSpecials(content);
    renderHomeMenu(content);

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

    function renderCarouselItem(obj, i) {
        const carouselItem = insertInto(carouselDiv, 'div', `carousel-item carousel${i + 1}`);
        renderObjWithParent(carouselItem, obj);
    }

    const carouselItems = [
        {
            h1: 'SPECIAL SAUCE',
            p: 'New Specials just dropped! Spicy pork, Pineapple Medley, Tennessee chicken...and Portobello Pesto ?!',
            button: 'SEE THE SPECIALS'
        },
        {
            h1: 'SPECIAL SAUCE',
            p: 'New Specials just dropped! Spicy pork, Pineapple Medley, Tennessee chicken...and Portobello Pesto ?!',
            button: 'SEE THE SPECIALS'
        }
    ];

    for (let i = 0; i < carouselItems.length; i++) {
        renderCarouselItem(carouselItems[i], i);
    }
    const slickDots = insertInto(carouselDiv, 'ul', 'slick-dots');
    for (let i = 0; i < carouselItems.length; i++) {
        let slickDot = insertInto(slickDots, 'li');
        insertInto(slickDot, 'button');
    }
}

function renderHomeSpecials(content) {
    const homeSpecials = insertInto(content, 'div', 'home-specials');

    function renderHomeSpecial(obj) {
        const homeSpecial = insertInto(homeSpecials, 'div', 'home-special');
        insertInto(homeSpecial, 'div', 'home-special-img');
        const homeSpecialText = insertInto(homeSpecial, 'div', 'home-special-text');
        renderObjWithParent(homeSpecialText, obj);
    }

    const homeSpecialTexts = [
        {
            h1: "SPECIALS",
            p: `Pizzaiolo Pete is always up to something! Check out our rotating specialty sandwiches and limited drops, including a Limited Time Only Monthly Chef's Special that will leave you craving for more!`,
            button: 'SEE THE SPECIALS'
        },
        {
            h1: "SUPPER CLUB",
            p: "Once a month, Chef and Pizzaiolo Pete presents a new 4-course dine-in experience that goes beyond our regular offerings and puts a smoky spin on gourmet culture.",
            button: 'GET YOUR TICKETS'
        }
    ];

    for (let homeSpecialText of homeSpecialTexts) {
        renderHomeSpecial(homeSpecialText);
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
import { insertInto } from "../js/utils.js";
import "../css/about.css"

export default function renderAbout() {
    const content = document.getElementById('content');
    content.classList.remove('menu-content');
    let h2 = insertInto(content, 'h2', '', "ALL THE PIZZA. ALL ON ONE PLATE. ALL AWESOME.")
    let divContent = insertInto(content, 'div', 'about-content');

    const abouts = [
        {
            p: `Welcome to Portly Pizzas, where pizza isn’t just food—it’s a celebration. Located in the heart of D.C., we’re dedicated to crafting the kind of pizzas that make you sit back, savor every bite, and share a smile with friends and family`
        }, {
            p: `At Portly Pizzas, our story is simple: we believe that the best ingredients make the best pies. That’s why we use only the freshest, locally sourced ingredients, from ripe tomatoes and hand-stretched dough to premium cheeses and savory toppings. Each pizza is made to order and cooked to perfection in our traditional brick oven, giving every slice that irresistible crispiness and smoky flavor.`
        }, {
            p: `We’re proud of our team, who share our passion for pizza and commitment to quality. From our chefs who hand-craft every pizza with care to our friendly servers who ensure your experience is top-notch, we’re here to make sure your time at Portly Pizzas is nothing short of fantastic.`
        }, {
            p: `Thank you for joining us on this delicious journey. We can’t wait to share our passion for pizza with you. Come on in, take a seat, and let’s make your day a little bit tastier. Portly Pizzas – Where every slice is a slice of happiness.`
        }
    ];
    abouts.map(({ p }) => insertInto(divContent, 'p', '', p));
    insertInto(divContent, 'div', 'about-img');
}
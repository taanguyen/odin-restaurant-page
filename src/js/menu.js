import { insertInto, renderObjWithParent } from "../js/utils.js";
import "../css/menu.css"

export default function renderMenu() {
    const content = document.getElementById('content');
    content.classList.add('menu-content');
    renderMenuIntro(content);
    renderMenuItems(content);
    renderSpecials(content);
}

function renderMenuIntro(content) {
    const menuIntro = insertInto(content, 'div', 'menu-intro');
    renderObjWithParent(menuIntro, {
        h1: 'MENU',
        p: `A culinary tour of pizza tradition from around this great nation and this beautiful planet. Evolved from flatbreads eaten in ancient cultures like Greece, Egypt, and the Roman Empire, pizza unites us, across time and space.`
    });
}

function renderMenuItems(content) {
    function renderMenuItem(title, text, i) {
        const menuItem = insertInto(menuItems, 'div', 'menu-item');
        const menuDesc = insertInto(menuItem, 'div', `menu-item-img pizza${i + 1}`);
        renderObjWithParent(menuDesc, title);
        renderObjWithParent(menuItem, text);
    }

    const menuItems = insertInto(content, 'div', 'menu-items');
    const menuItemTexts = [
        {
            h2: `Yummy Tummy / $15`,
            p: `Classic margherita pizza with basil, freshly-grated parmesan, harvest tomatoes, and bubbly mozzarella.`
        }, {
            h2: `BBQ Basil / $15`,
            p: `Basil, spinach, mozzarella chunks, and BBQ sauce. Topped with salmon, this pie will surely delight your taste buds.`
        }, {
            h2: `Chococalate Craze / $10`,
            p: `All your favorite chocolates in one place - M&M's, Reese's pieces, chocolate pretzels, chocolate chips.`
        }, {
            h2: `Peppy Pie / $10`,
            p: `Plenty pepperoni for a perfect plate of pleasant, palatable pie.`
        }
    ];

    for (let i = 0; i < menuItemTexts.length; i++) {
        let { h2, p } = menuItemTexts[i];
        renderMenuItem({ h2 }, { p }, i);
    }
}

function renderSpecials(content) {
    insertInto(content, 'h1', '', 'SPECIALS');
    const specialItems = insertInto(content, 'div', 'special-items');

    const specialItemsTexts = [
        {
            h2: `Haiwaiian Medley / $20`,
            p: `Grilled pineapples drizzled in hot sauce and topped with cilantro. Sprinkled with sweet onions.`
        }, {
            h2: `Super Duper Sausages / $20`,
            p: `Sausages seasoned with garlic, chipotle sauce, and served with chile.`
        }
    ];

    function renderSpecial(title, text, i) {
        const specialItem = insertInto(specialItems, 'div', 'special-item');
        const specialDesc = insertInto(specialItem, 'div', `menu-item-img special${i + 1}`);
        renderObjWithParent(specialDesc, title);
        renderObjWithParent(specialItem, text);
    }

    for (let i = 0; i < specialItemsTexts.length; i++) {
        let { h2, p } = specialItemsTexts[i];
        renderSpecial({ h2 }, { p }, i);
    }
}
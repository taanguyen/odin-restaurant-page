import { insertInto, renderObjWithParent } from "../js/utils.js";
import "../css/menu.css"

export default function renderMenu() {
    const content = document.getElementById('content');
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
            p: `Classic margherita pizza with basil, freshly-grated parmesan, harvest tomatoes, and bubbly mozzarella.`
        }, {
            p: `Basil, spinach, mozzarella chunks, and BBQ sauce. Topped with salmon, this pie will surely delight your taste buds.`
        }, {
            p: `All your favorite chocolates in one place - M&M's, Reese's pieces, chocolate pretzels, chocolate chips.`
        }, {
            p: `Plenty pepperoni for a perfect plate of pleasant, palatable pie.`
        }
    ]
    const menuItemTitles = [
        {
            h2: `Yummy Tummy / $15`,
        },
        {
            h2: `BBQ Basil / $15`,
        },
        {
            h2: `Chococalate Craze / $10`,
        },
        {
            h2: `Peppy Pie / $10`,
        }
    ];

    for (let i = 0; i < menuItemTitles.length; i++) {
        renderMenuItem(menuItemTitles[i], menuItemTexts[i], i);
    }
}

function renderSpecials(content) {
    insertInto(content, 'h1', '', 'SPECIALS');
    const specialItems = insertInto(content, 'div', 'special-items');

    const specialTexts = [
        {
            p: `Grilled pineapples drizzled in hot sauce and topped with cilantro. Sprinkled with sweet onions.`
        }, {
            p: `Sausages seasoned with garlic, chipotle sauce, and served with chile.`
        }
    ];

    const specialTitles = [
        {
            h2: `Haiwaiian Medley / $20`,
        },
        {
            h2: `Super Duper Sausages / $20`
        }
    ];

    function renderSpecial(title, text, i) {
        const specialItem = insertInto(specialItems, 'div', 'special-item');
        const specialDesc = insertInto(specialItem, 'div', `menu-item-img special${i + 1}`);
        renderObjWithParent(specialDesc, title);
        renderObjWithParent(specialItem, text);
    }

    for (let i = 0; i < specialTitles.length; i++) {
        renderSpecial(specialTitles[i], specialTexts[i], i);
    }
}
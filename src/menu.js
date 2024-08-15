import { insertInto, renderObjWithParent } from "./utils";
import "./menu-styles.css"

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
    function renderMenuItem(obj, i) {
        const menuItem = insertInto(menuItems, 'div', 'menu-item');
        insertInto(menuItem, 'div', `menu-item-img pizza${i + 1}`);
        renderObjWithParent(menuItem, obj);
    }

    const menuItems = insertInto(content, 'div', 'menu-items');
    const menuItemContents = [
        {
            h2: `Yummy Tummy / $15`,
            p: `Classic margherita pizza with basil, freshly-grated parmesan, harvest tomatoes, and bubbly mozzarella.`
        },
        {
            h2: `BBQ Basil / $15`,
            p: `Basil, spinach, mozzarella chunks, and BBQ sauce. Topped with salmon, this pie will surely delight your taste buds.`
        },
        {
            h2: `Chococalate Craze / $10`,
            p: `All your favorite chocolates in one place - M&M's, Reese's pieces, chocolate pretzels, chocolate chips.`
        },
        {
            h2: `Peppy Pie / $10`,
            p: `Plenty pepperoni for a perfect plate of pleasant, palatable pie.`
        }
    ];

    for (let i = 0; i < menuItemContents.length; i++) {
        renderMenuItem(menuItemContents[i], i);
    }
}

function renderSpecials(content) {
    insertInto(content, 'h1');
    const specialItems = insertInto(content, 'div', 'special-items');

    const specials = [
        {
            h2: `Haiwaiian Medley / $20`,
            p: `Grilled pineapples drizzled in hot sauce and topped with cilantro. Sprinkled with sweet onions.`
        },
        {
            h2: `Super Duper Sausages / $20`,
            p: `Sausages seasoned with garlic, chipotle sauce, and served with chile.`
        }
    ];

    function renderSpecial(obj, i) {
        const specialItem = insertInto(specialItems, 'div', 'special-item');
        const specialDesc = insertInto(specialItem, 'div', `menu-item-img special${i + 1}`);
        renderObjWithParent(specialItem, obj);
    }

    for (let i = 0; i < specials.length; i++) {
        renderSpecial(specials[i], i);
    }
}
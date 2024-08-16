import "../css/template.css";
import renderAbout from "../js/about.js";
import renderMenu from "../js/menu.js";
import renderHome from "./home.js";

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

renderHome();


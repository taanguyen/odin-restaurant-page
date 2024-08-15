export function insertInto(parent, element, classList, elemHTML = '') {
    const elem = document.createElement(element);
    elem.innerHTML = elemHTML;
    if (classList.length > 0) {
        const classes = classList.split(' ');
        for (let classNm of classes) {
            elem.classList.add(classNm);
        }
    }
    if (parent == document) {
        parent = parent.body;
    }
    parent.appendChild(elem);
    return elem;
}

